# Flow 7

Para el flow 7 se toma de referencia el flow 5 realizando la conexión de una base de datos relacional con MySQL, también se hace uso del ESP32CAM y un sensor DHT11 el cual proporciona la medición de temperatura y humedad y se muestran dichos datos en el dashboard. 
Los datos que manda cada participante del diplomado son extraidos el tema MQTT y almacenados en la base de datos, estos datos son utilizados como fuente de información de las gráficas realizas con Grafana. Las gráficas generadas se exportan al dashbord de node-red teniendo así una interfaz más completa.  


## Material

- PC con maquina virtual con ubuntu.
- Grafana.
- IDE de Arduino configurada para programar el ESP32CAM.
- ESP32CAM, módulo FTDI y cable USB.
- Sensor DHT11. 
- Protoboard y cables.

## Resultados
![Flow 7](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow7/imagenes/flow7.png)

![Flow 7 Dashboard](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow7/imagenes/flow7dash.png)

![Flow 7 Grafana](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow7/imagenes/flow7Grafana.png)

![Flow 7 Circuito](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow7/imagenes/circuito.jpg)