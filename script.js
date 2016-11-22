var id = [];
var name = [];
var surname = [];
var level = [];
var salary = [];
var cont = 0;
var lock = 1;
//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 1337));

app.use('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);


	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the ontent of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";	
		//se definita e non nulla prendo l'elemento id dal form
		if ( typeof request.body.id !== 'undefined' && request.body.id){
            //salvo nell'array l'id
			id[cont] = request.body.id;
		
            //oltre a fare il controllo di prima controlla anche una variabile lock, senza ID non esiste l'operaio
		  if ( typeof request.body.name !== 'undefined' && request.body.name)
                //salvo nell'array 
    		  name[cont] = request.body.name;
		  else 
                // in caso qualcosa vada storto
			  name[cont] = "not defined";
          if ( typeof request.body.surname !== 'undefined' && request.body.surname)
                //salvo nell'array 
              surname[cont] = request.body.surname;
		  else 
                // in caso qualcosa vada storto
			  surname[cont] = "not defined";
          if ( typeof request.body.level !== 'undefined' && request.body.level)
                //salvo nell'array 
    		  level[cont] = request.body.level;
		  else 
                // in caso qualcosa vada storto
			  level[cont] = 0;
          if ( typeof request.body.salary !== 'undefined' && request.body.salary)
                //salvo nell'array 
    		  level[cont] = request.body.salary;
		  else 
                // in caso qualcosa vada storto
			  level[cont] = 0;
            
            cont++;
        }
        else 
			alert("Non è stato selezionato alcun ID per l'operaio");
        
	    	
        text = text + "post received: id=" + id[cont] + ", name="+ name[cont]+", surname="+surname[cont]+", level="+level[cont]+", salary="+salary[cont];
	}
	else
	{
		text = "body undefined";
	}

    response.end(text);

});