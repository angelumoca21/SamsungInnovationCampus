console.log("Parameter number of args attribute:" + process.argv.length);

console.dir(process.argv)

process.argv.forEach(function(item,index){
    console.log(index + ':',item);
})