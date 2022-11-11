var eventos = require('events');
var EmisorEventos = eventos.EventEmitter;
var manejador = new EmisorEventos();

manejador.on('saludo',function(nombre){
    console.log("Hola " + nombre);
});

manejador.emit('saludo','Angel');

setInterval(function(){
    manejador.emit('saludo','Angel');
},1000);