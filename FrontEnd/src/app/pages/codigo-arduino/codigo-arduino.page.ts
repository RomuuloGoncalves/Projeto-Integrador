import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { ArduinoService } from 'src/app/services/arduino.service';
import { SensorService } from 'src/app/services/sensor.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-codigo-arduino',
  templateUrl: './codigo-arduino.page.html',
  styleUrls: ['./codigo-arduino.page.scss'],
})
export class CodigoArduinoPage implements OnInit {

  constructor(
    private Arduino: ArduinoService,
    private Toast: ToastService,
    private Usuario: UsuarioService,
    private route: ActivatedRoute
  ) { }

  loading = false;
  arduinos: any = [];
  usuario!: any;
  nome_usuario?: string = this.Usuario.nome_usuario;
  id_usuario: any = this.Usuario.id_usuario;
  quantidade_arduinos = 0;
  generatedCode: string = '';
  id_arduino!:number
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_arduino = (params['id_arduino']);
    });

    this.listagemArduino(this.id_arduino);
    console.log(this.id_arduino)
  }

  listagemArduino(id: number) {
    this.Arduino.listarArduinoSensor(id).subscribe(
      response => {
        console.log('arduinos', response);
        this.arduinos = response;
        this.loading = false;
        this.quantidade_arduinos = this.arduinos.length;
        this.Toast.mostrarToast('success', 'Listagem dos arduínos concluida');
        this.generateArduinoCode();
      },
      error => {
        console.error('Erro ao cadastrar os dados:', error);
        this.loading = false;
        this.Toast.mostrarToast('danger', 'Algo deu errado!');
      }
    );
  }

  generateArduinoCode() {
    let code = `
#include <WiFiClient.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "your-ssid";
const char* password = "your-password";
const char* serverAddress = "https://amused-hopelessly-tetra.ngrok-free.app/Projeto-Integrador/System";

void setup() {
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    WiFiClient client;

    StaticJsonDocument<200> doc;
    JsonArray data = doc.createNestedArray("data");
`;

    this.arduinos.forEach((arduino: any) => {
      arduino.sensores.forEach((sensor: any, index: number) => {
        code += `
    int ${sensor.nome}Value = analogRead(${sensor.pino});
    JsonObject sensor${index + 1}Data = data.createNestedObject();
    sensor${index + 1}Data["id_sensor"] = ${sensor.id_sensor};
    sensor${index + 1}Data["valor"] = ${sensor.nome}Value;
        `;
      });
    });

    code += `
    String jsonString;
    serializeJson(doc, jsonString);
    Serial.println(jsonString);

    http.begin(serverAddress);
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(jsonString);
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Erro ao enviar POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
  delay(10000);
}
`;

    this.generatedCode = code;
  }

  copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = this.generatedCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.Toast.mostrarToast('success', 'Código copiado para a área de transferência!');
  }
}
