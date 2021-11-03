const Clases = require('./Clases.js')
var fs = require('fs');
const { response } = require('express');
const { send } = require('process');

/*
var miContacto = new Clases.Contact("exequiel","exemay@1234",1213124321,true)
console.log(miContacto.toString1())
console.log(miContacto.toString2('#'))

var contacto2 = new Clases.Contact("daniel","may777@tt.com", 224448, false)

var miContactBook = new Clases.ContactBook("familia")
miContactBook.addContact(miContacto)
miContactBook.addContact(contacto2)

console.log(miContacto.toString1())
console.log(miContacto.toString2('&%&'))


//var miCB = new Clases.ContactBook("escuela")
//console.log(miCB.toString)
*/


function createCB (nombre){
    if(fs.existsSync("./files/contactos/"+nombre+".txt")){
        var mensaje = "La libreta ya existe"        
    }else{
        fs.createWriteStream("./files/contactos/"+nombre+".txt")
    }    
}

function overwriteContact(nombre, nuevoC){
    var data = JSON.stringify(nuevoC)
    
    fs.writeFile("./files/contactos/"+nombre+".txt",data,(error)=>{
        if(error){
            console.log("no se pudo escribir en el archivo")
        }else{
            console.log("escritura exitosa")
        }
    })
}

function SaveContact(nombre, nuevoC){
    var data = JSON.stringify(nuevoC)

    fs.appendFile("./files/contactos/"+nombre+".txt","\n" + data, (error)=>{
        if(error){
            console.send("No se pudo escribir en el archivo")
        }else{
            console.send("Escritura exitosa")
        }
    })
}

function readCB(){
    var data = fs.readdirSync("./files/contactos")
    console.send("<p>los contactos existentes son:</p>")
    console.send(data)
}


function readContact(){
    const { consumers } = require('stream');

    var contenido = fs.readFile('./files/contacto.txt',(error,datos)=>{
        if(error){
            console.log("archivo no leido")
        }else{
            var json_datos = JSON.parse(datos)
            //console.log(json_datos)
            console.log(" ---- los datos guardados son: ---- ")
            console.log(
                json_datos.name+"\n"+
                json_datos.email+"\n"+
                json_datos.mobil+"\n"+
                json_datos.topList
            )
        }
    });
}

module.exports = {overwriteContact, readCB, createCB, SaveContact, readContact}