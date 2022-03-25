const Clases = require('./Clases.js')
var fs = require('fs');
const { response } = require('express');
const { send } = require('process');
const { consumers } = require('stream');

//crea libreta de contacto
function crearCB (nombre){
    fs.createWriteStream("./files/contactos/"+nombre+".json")
}

//sobreescribe el contacto
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

//guarda el nuevo contacto 
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

//lee los contactos existentes en la libreta de contacto
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
        "\n<p> is topList: "+topList+"</p>"+
        "\n<p> ---------------------------------------------------------------"+"</p>"
    } 
    console.log(str)
    return str
}



module.exports = {crearCB, sobreescribirContacto, guardarContacto,leerContactBook}