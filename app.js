const Clases = require('./Clases.js')
var fs = require('fs');
const { response } = require('express');
const { send } = require('process');
const { consumers } = require('stream');


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


function crearCB (nombre){
    fs.createWriteStream("./files/contactos/"+nombre+".json")
}

function sobreescribirContacto(nombre, nuevoContact){
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

function guardarContacto(nombre, nuevoC){
    var contenido = fs.readFile('./files/contactos/'+nombre+".json",(error,datos)=>{
        if(error){
            console.log("archivo no leido")
        }else{
            console.log("----perseando a json")
        
            var json_datos = JSON.parse(datos)
            //console.log(json_datos)
            console.log("contactBook")
            
            dataArray = json_datos.contactos
            console.log(dataArray)

            var miContactBook = new Clases.ContactBook("unica libreta",[])

            for (i=0;i<dataArray.length;i++) {
                var name = json_datos.contactos[i].name
                var mobil = json_datos.contactos[i].mobil
                var email = json_datos.contactos[i].email
                var topList = json_datos.contactos[i].topList
                /*
                console.log(
                    name+"\n"+
                    mobil+"\n"+
                    email+"\n"+
                    topList+"\n"
                )*/

                var miContacto = new Clases.Contact(name,mobil,email,topList);
                miContactBook.addContact(miContacto); 
            }  

            miContactBook.addContact(nuevoC);
            console.log(miContactBook)

            var data = JSON.stringify(miContactBook)
            //console.log(data)
            
            fs.writeFile("./files/contactos/"+nombre+".json",data+"\n",(error)=>{
                if(error){
                    console.log("no se pudo escribir en el archivo")
                }else{
                    console.log("escritura exitosa")
                }
            })
        }
    });
}


function leerContactBook(nombre){
    var str = "los datos guardados son: ";
    var datos = fs.readFileSync('./files/contactos/'+nombre+'.json')

    var json_datos = JSON.parse(datos)
    dataArray = json_datos.contactos
    console.log(dataArray)

    for (i=0;i<dataArray.length;i++) {
        var name = json_datos.contactos[i].name
        var mobil = json_datos.contactos[i].mobil
        var email = json_datos.contactos[i].email
        var topList = json_datos.contactos[i].topList

            if(topList==="on"){
                topList = "yes"
            }else{
                topList = "no"
            }

        str = str +"<br>"+
        "<p> nombre: "+name+"</p>"+
        "\n<p> mobil: "+mobil+"</p>"+
        "\n<p> email: "+email+"</p>"+
        "\n<p> is topList: "+topList+"</p>"
    } 
    console.log(str)
    return str
}



module.exports = {crearCB, sobreescribirContacto, guardarContacto,leerContactBook}