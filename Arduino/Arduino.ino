#include <WiFiClient.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char *ssid = "Ro";
const char *password = "amaterasu";

const char *serverAddress = "https://amused-hopelessly-tetra.ngrok-free.app/Projeto-Integrador/System";

void setup()
{
  Serial.begin(115200);
  Serial.println("Hello, ESP32!");

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(100);
    Serial.print(".");
  }
}

void loop()
{
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    WiFiClient client;

    StaticJsonDocument<200> doc;
    doc["id_sensor"] = 1;
    doc["valor"] = rand() % 101;

    String jsonString;
    serializeJson(doc, jsonString);
    Serial.println(jsonString);

    //    http.begin(String(serverAddress) + "/views/dados/cadastro.php");
    http.begin("https://httpbin.org/anything");
    http.addHeader("Content-Type", "application/json");
    //    http.addHeader("ngrok-skip-browser-warning", "69420");

    int httpResponseCode = http.POST(jsonString);
    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Erro ao enviar POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  }
}
