	const express = require('express');
	const path = require('path');
	const Clases = require('./app.js')
	const bodyParser = require('body-parser');
	const app = express();

	app.use(express.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.urlencoded({extended:false}));

	app.get('/',(request,response)=>{
		//response.send('Hello express ..! :) ');
		response.sendFile(path.join(__dirname, './static/menu.html'));
	});

	app.get('/createContactBook',(request,response)=>{
		response.sendFile(path.join(__dirname,'./forms/createContactBook.html'));
	});

	app.post('/SaveCB',(request,response)=>{
		console.log("llego el nombre de la libreta y se guardo: ");
		let name = request.body.nombre
		Clases.createCB(name)
		

	});

	app.get('/addContact',(request,response)=>{
		response.sendFile(path.join(__dirname,'./forms/addContact.html'));
	});


	app.get('/ListContactBook',(request,response)=>{
		Clases.readCB()
	});

	app.post('/addCon',(request,response)=>{
		//response.send("<h1>hola mundo</h1>"+"<p>hola</p>")

		var sobreescribir = request.body.overwrite

		//response.send(request.body.overwrite)

		if(sobreescribir=="on"){
			Clases.overwriteContact("unico contacto",request.body)
		}else{
			Clases.SaveContact("unico contacto",request.body)
		}
	});

	const port = 3000;
	app.listen(port,()=>{
		console.log(`Express listen on port ${port}!`);
	});
