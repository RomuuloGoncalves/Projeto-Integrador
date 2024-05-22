#include <WiFiClient.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

#define MQ9_PIN 34

const char *ssid = "TP-Link_441C";
const char *password = "99967888";

const char *serverAddress = "https://amused-hopelessly-tetra.ngrok-free.app/Projeto-Integrador/System/views/dados/cadastro.php";

void setup(){
  pinMode(MQ9_PIN, INPUT);
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED){
    delay(100);
    Serial.print(".");
  }
}

void loop(){
  if (WiFi.status() == WL_CONNECTED){
    HTTPClient http;
    WiFiClient client;

    int mq9_value = analogRead(MQ9_PIN);
    Serial.print("Leitura do Sensor MQ-9: ");
    Serial.println(mq9_value);

    StaticJsonDocument<200> doc;
    doc["id_sensor"] = 1;
    doc["valor"] = mq9_value;

    String jsonString;
    serializeJson(doc, jsonString);
    Serial.println(jsonString);

    http.begin(client, serverAddress);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("ngrok-skip-browser-warning", "69420");

    int httpResponseCode = http.POST(jsonString);
    if (httpResponseCode > 0){
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else{
      Serial.print("Erro ao enviar POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
  delay(5000);
}
