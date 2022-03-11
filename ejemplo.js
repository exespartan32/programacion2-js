const Clases = require('./Clases.js')
var fs = require('fs');
const { response } = require('express');
const { send } = require('process');

var miContactBook = new Clases.ContactBook("unica libreta",[])
    console.log(miContactBook)


    var miOtroContacto = new Clases.Contact()
    console.log(miOtroContacto)
    
    console.log("---- mi otro contacto con sus atributos----")
    miOtroContacto.setName("daniel");
    miOtroContacto.setEmail("danymay21@gmail.com");
    miOtroContacto.setMobil(2612857617);
    miOtroContacto.setTopList(true);

var miContacto = new Clases.Contact("Exequiel", "exemay777@gmail.com", 2612085518, true)
    console.log(miContacto)
    miContactBook.addContact(miContacto)
    miContactBook.addContact(miOtroContacto)
    console.log(miContactBook)



nombre = "unica libreta"

function overwriteContact(nombre, nuevoContact){
    var miContactBook = new Clases.ContactBook("unica libreta",[])
    miContactBook.addContact(nuevoContact)
    
    console.log(miContactBook)
    var data = JSON.stringify(miContactBook)
    
    console.log(data)
    
    fs.writeFile("./files/contactos/"+nombre+".json",data,(error)=>{
        if(error){
            console.log("no se pudo escribir en el archivo")
        }else{
            console.log("escritura exitosa")
        }
    })
}

function SaveContact(nombre, nuevoC){

    var data = JSON.stringify(nuevoC)

    console.log(data)

    fs.appendFile("./files/contactos/"+nombre+".json",","+"\n" + data + ",", (error)=>{
        if(error){
            console.log("No se pudo escribir en el archivo")
        }else{
            console.log("Escritura exitosa")
        }
    })
}