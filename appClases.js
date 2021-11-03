const Clases = require('./Clases.js')

console.log("---- Test Contact ----")
var miContacto = new Clases.Contact("Exequiel", "exemay777@gmail.com", 2612085518, true)
console.log(miContacto)

console.log("---- mi otro contacto ----")
var miOtroContacto = new Clases.Contact()
console.log(miOtroContacto)

console.log("---- mi otro contacto con sus atributos----")
miOtroContacto.setName("daniel");
miOtroContacto.setEmail("danymay21@gmail.com");
miOtroContacto.setMobil(2612857617);
miOtroContacto.setTopList(true);

console.log(miOtroContacto)

console.log("Nombre: "+miOtroContacto.getName())
console.log("Email: "+miOtroContacto.getEmail())
console.log("Mobil: "+miOtroContacto.getMobil())
console.log("Top List: "+miOtroContacto.getTopList())


var miTercerContacto = new Clases.Contact("Adriana", "adriana@email.com", 12345,)
console.log(miTercerContacto)


var miContactBook = new Clases.ContactBook("Amigos de Futbol",[])
miContactBook.addContact(miContacto)
miContactBook.addContact(miOtroContacto)
console.log(miContactBook)