//lectura de archivo con readFileSync
var fs = require('fs');
var contenido = fs.readFileSync('./files/text.txt','utf-8')
console.log(contenido)

//lectura de archivo con readFile
var fs = require('fs');

var contenido = fs.readFile('./files/text.txt','utf-8',(error,data)=>{
console.log(data)
})
console.log(contenido)

//escribir en un archivo existente con writeFile (reescrbe el archivo)
var fs = require('fs');
fs.writeFile('./files/text.txt','Texto escrito en el archivo',(error)=>{
    if(error){
        console.log("no se pudo escribir en el archivo")
    }else{
        console.log("escritura exitosa")
    }
})


//escribir en un archivo existente con appendFile (escribe luego del final del archivo)
var fs = require('fs');

var textParaAgregar = "2021-10-20 Registrado exitosamente"

fs.appendFile('./files/LogFile.txt',"\n" + textParaAgregar, (error)=>{
    if(error){
        console.log("No se pudo escribir en el archivo")
    }else{
        console.log("Escritura exitosa")
    }
})


//archivos.json
var alumna = require('./files/data.json')

console.log(alumna)

var fs = require('fs');
const { consumers } = require('stream');

var contenido = fs.readFile('./files/data.json',(error,datos)=>{
if(error){
    console.log("archivo no leido")
}else{
    console.log(datos)
    console.log("----perseando a json")
    //var json_datos = JSON.perse(datos)
    //console.log(json_datos)


    var json_datos = JSON.parse(datos)
    console.log(json_datos)
    console.log("acceso a atributos")
    console.log(
    json_datos.alumno+"\n"+
    json_datos.dni+"\n"+
    json_datos.edad+"\n"+
    json_datos.libretaDeuda
    )
}
});