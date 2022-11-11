function miFuncion(elobjeto){
    elobjeto.marca = "Toyota";
}

var miCarro = {
    marca: "Honda",
    modelo:"Accord",
    año: 1998
};

window.alert(miCarro.marca);

miFuncion(miCarro);

window.alert(miCarro.marca);