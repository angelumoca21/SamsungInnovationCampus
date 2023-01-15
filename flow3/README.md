# Flow 3

Este flow continuamos con la creación de dashboards en node-red, desplegando además de texto algunos gráficos como lo es una gráfica y un medidor gauge.
Se utilizan cuatro nodos inject, un nodo de caja de texto, un nodo gauge y un nodo de gráfica chart.
El primer nodo inject solo envía un texto de prueba el cual en el dashboar se muestra dicho mensaje, los siguientes nodos inject mandan o el valor 0 o 5 o 10 los cuales se van graficando tanto en el medidor gauge y la gráfica chart.

## Material

- PC con maquina virtual con ubuntu.
- Node-red instalado.

## Resultados
![Flow 3]()

![Flow 3 Dashboard]()