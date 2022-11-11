const fs = require('fs');

fs.writeFileSync('archivo1.txt',"Hola, este es un archivo nuevo, creado de manera sincronica");
fs.writeFile('archivo2.txt',"Hola, este es un archivo nuevo, creado de manera asincronica",(err)=>{
    if(err)
        console.log(err);
    else{
    }
});

fs.readFileSync('info.txt','utf8');

let information = fs.readFileSync('info.txt','utf8');
console.log(information);

fs.unlinkSync('archivo1.txt');