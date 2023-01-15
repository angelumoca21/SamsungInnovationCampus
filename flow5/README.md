# Flow 5

En este flow de node-red además de implemetar lo aprendido en sesiones anteriores (integración de MQTT, graficar, etc.) se implemantan las solicitudes a una API específicamente a la API de OpenWater, con la cual se pueden obtener datos climatológicos de un lugar especifico dandole las coordenadas del lugar.
Los datos obtenidos de la API son graficados y enviados por MQTT a un broker en internet, este mismo flow esta suscrito al tema para recopilar los datos y graficarlos por cada usaurio del diplomado.  

## Material

- PC con maquina virtual con ubuntu.
- Node-red instalado.

## Resultados
![Flow 5]()

![Flow 5 Dashboard]()