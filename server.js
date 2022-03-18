	const express = require('express');
	const path = require('path');
	const Clases1 = require('./app.js')
	const Clases2 = require('./Clases.js')
	const bodyParser = require('body-parser');
	const app = express();
	var fs = require('fs');
	const { request, response } = require('express');

	app.use(express.json());
	app.use(express.urlencoded({extended:false}))

	app.get('/',(request,response)=>{
		//response.send('Hello express ..! :) ');
		response.sendFile(path.join(__dirname, './static/menu.html'));
	});

	//mustra el formulario de crear libreta de contacto
	app.get('/createContactBook',(request,response)=>{
		response.sendFile(path.join(__dirname,'./forms/createContactBook.html'));
	});

	//guarda la libreta de contacto en la unidad local
	app.post('/SaveCB',(request,response)=>{

		console.log(request.body)
		
		let name = request.body.nombre

		if(fs.existsSync("./files/contactos/"+name+".txt")){
			response.sendFile(path.join(__dirname,'./forms/CBNoGuardado.html'));
		}else{
			console.log("llego el nombre de la libreta y se guardo: ");
			Clases1.crearCB(name)
			response.sendFile(path.join(__dirname,'./forms/CBGuardado.html'));
		} 
	});

	//mustra el formulario de agregar contacto
	app.get('/addContact',(request,response)=>{
		response.sendFile(path.join(__dirname,'./forms/addContact.html'));
	});

	//guarda el contacto en la unidad local
	app.post('/AddContacts',(request,response)=>{
		var sobreescribir = request.body.overwrite
		//console.log(request.body)

		var name = request.body.name;
		var email = request.body.email;
		var mobil = request.body.mobil;
		var topList = request.body.topList;

		var miContacto = new Clases2.Contact(name,email,mobil,topList);
		//console.log(miContacto)

		if(sobreescribir=='on'){
			Clases1.sobreescribirContacto("unicaLibreta",miContacto)
			response.sendFile(path.join(__dirname,'./forms/contactoAgregado.html'));
			//console.log(request.body)
		}else{
			Clases1.guardarContacto("unicaLibreta",miContacto)
			response.sendFile(path.join(__dirname,'./forms/contactoAgregado.html'));
			//console.log(request.body)
		}
	});

	//muestra los contactos gardados en la libreta de contacto
	app.get('/ListContactBook',(request,response)=>{
		var name = "unicaLibreta";
		//var data = leerContactBook(name)
		var data = Clases1.leerContactBook(name);
		console.log("-->"+data);
		response.send(data)
		//response.send("<p>respuesta dede get listar ContacBook</p>")
	});


	app.post('/home',(request,response)=>{
		console.log("llego un post a home")
		response.send(request.body)
	})

	const port = 3000;
	app.listen(port,()=>{
		console.log(`Express listen on port ${port}!`);
	});
