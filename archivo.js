var fs = require('fs');

verDatos("unicaLibreta")

function verDatos(){
    var contenido = fs.readFile('./files/contactos/unicaLibreta.json',(error,datos)=>{
        if(error){
            console.log("archivo no leido")
        }else{
            var json_datos = JSON.parse(datos)
            //console.log(json_datos)
            console.log("contactBook")
            
            dataArray = json_datos.contactos
            console.log(dataArray)

var str = "";

            for (i=0;i<dataArray.length;i++) {
                var name = json_datos.contactos[i].name
                var mobil = json_datos.contactos[i].mobil
                var email = json_datos.contactos[i].email
                var topList = json_datos.contactos[i].topList
                
                console.log(
                    name+"\n"+
                    mobil+"\n"+
                    email+"\n"+
                    topList+"\n"
                )
                if(topList==="on"){
                    topList = "yes"
                }else{
                    topList = "no"
                }

                str = str + "<br>"+"<br>"+"<p>"+name+"</p>"+
                "\n<p>"+mobil+"</p>"+
                "\n<p>"+email+"</p>"+
                "\n<p>"+topList+"</p>"

                console.log(str)
            } 
        }
    });
}

    