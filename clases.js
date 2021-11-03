//Deficion de clases

const { response } = require("express")

class Contact{
    constructor(name, email, mobil, topList=false){
        this.name = name
        this.email = email
        this.mobil = mobil
        this.topList = topList
    }
    setName(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setEmail(email){
        this.email = email
    }
    getEmail(){
        return this.email
    }
    setMobil(mobil){
        this.mobil = mobil
    }
    getMobil(){
        return this.mobil
    }
    setTopList(topList){
        this.topList = topList
    }
    getTopList(){
        return this.topList
    }

    toString1(){
        return `\n-Nombre: ${this.name}`+ 
        `\n-email: ${this.email} `+
        `\n-phone number: ${this.mobil} `+
        `\n-Does it belong to the top list?: ${this.topList} \n`
    }
    toString2(separador){
        return this.name+separador+this.email+separador+this.mobil+separador+this.topList
    }
}


class ContactBook{
    constructor(nombre, contactos=[]){
        this.nombre = nombre
        this.contactos = contactos
    }

    getNombre(){
        return this.nombre
    }
    setNombre(){
        this.nombre = this.nombre
    }

    addContact(cont){
        this.contactos.push(cont)
    }
    
    toString1(){
        tmp = ""
		for (i=0;i<contacts.size();i++) {
			tmp = tmp+contacts.get(i).toString();
		}
		if (tmp == "") {
			return "the name of the contact book is:  "+ this.name;
		}else {
			return "the name of the contact book is:  "+ this.name+" "+tmp;
		}
    }

    toString2(separador){
        st_CB="";
		for(i =0;i<contacts.size();i++) {
			if(i==this.contacts.size()-1) {
				st_CB = st_CB + this.contacts.get(i).toString("#");
			}else {
				st_CB = st_CB + this.contacts.get(i).toString("#")+sep;
			}
		}
		return st_CB;
    }
}

module.exports = {Contact, ContactBook}