# Flow 6

El flow 6 hace uso del protocolo MQTT, el broker se encuentra en el localhost. A diferencia de los ejercicios anteriores este flow trabaja en conjunto del ESP32CAM pudiendo así desde el dashboard controlar un switch el cual manda por MQTT un mensaje en el tema que el ESP32CAM está suscrito y asi encender y apagar el flash de la placa del microcontrolador.
El ESP32CAM manda un mensaje de igual forma por MQTT al tema donde node-red está suscrito pudiendo asi recibir y extraer los datos enviados por el ESP32CAM. 

## Material

- PC con maquina virtual con ubuntu.
- IDE de Arduino configurada para programar el ESP32CAM.
- ESP32CAM, módulo FTDI y cable USB.
- Protoboard y cables.

## Resultados
![Flow 6](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow6/imagenes/flow6.png)

![Flow 6 Dashboard](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow6/imagenes/flow6dash.png)

![Flow 6 Circuito](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow6/imagenes/circuito.jpg)