# Flow 4

Este flow tiene como objetivo ocupar el protocolo de comunicación MQTT y node-red, ocupando un broker en internet en el cual cada integrante del diplomado publica un JSON con nombre y la temperatura donde se encuentra.  
Otra sección del flow se encarga de suscribirse al tema donde es mandada toda la información, extrae los datos del nombre y el valor de temperatura de cada mensaje y va realizando un registro en la gráfica de los datos compartidos.

## Material

- PC con maquina virtual con ubuntu.
- Node-red instalado.

## Resultados
![Flow 4](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow4/imagenes/flow4.png)

![Flow 4 Dashboard](https://github.com/angelumoca21/SamsungInnovationCampus/blob/main/flow4/imagenes/flow4Dash.png)