var id = [];
var name = [];
var surname = [];
var level = [];
var salary = [];
var cont = 0;
var tempCont;
var bool = false;
//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 1338));

app.use('/', function(request, response) 
{

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the ontent of the POST receiced
		text = "request.body: " + util.inspect(request.body.id) + "\n";	
		//se definita e non nulla prendo l'elemento id dal form
		if ( typeof request.body.id !== 'undefined' && request.body.id){
            //salvo nell'array l'id
            console.log("if dell'id");
			tempID = parseInt(JSON.parse(request.body.id));
            
            if(existID(tempID,id)){
                console.log("Sono dentro l'if"),
                tempCont = cont;
                cont = findID(tempID,id);
                bool = true;
            }
            else id[cont] = tempID;
                 
            console.log("id: "+id[cont]);
        }else {
            var max = newMax(id);
            id[cont] = max;
            console.log("id: "+id[cont]);
        }
		
		  if (typeof request.body.name !== 'undefined' && request.body.name){
                //salvo nell'array 
    		  name[cont] = JSON.stringify(request.body.name);
              console.log("name: "+name[cont]);
          }
		  else 
                // in caso qualcosa vada storto
			  name[cont] = "not defined";
          if ( typeof request.body.surname !== 'undefined' && request.body.surname){
                //salvo nell'array 
              surname[cont] = JSON.stringify(request.body.surname);
              console.log("surname: "+ surname[cont]);
          }
		  else 
                // in caso qualcosa vada storto
			  surname[cont] = "not defined";
          if ( typeof request.body.level !== 'undefined' && request.body.level){
                //salvo nell'array 
    		  level[cont] = parseInt(JSON.parse(request.body.level));
              console.log("level: "+ level[cont]);
              }
		  else 
                // in caso qualcosa vada storto
			  level[cont] = 0;
          if ( typeof request.body.salary !== 'undefined' && request.body.salary){
                //salvo nell'array 
    		  salary[cont] = parseInt(JSON.parse(request.body.salary));
              console.log("salary: "+salary[cont]);
            }
		  else 
                // in caso qualcosa vada storto
			  salary[cont] = 0;
            //aumento il contatore
        if(bool){
            cont = tempCont;
            bool = false;
        }    
        cont++;
        printIDArray(id);
        
        
        
	}
	else
	{
		text = "body undefined";
	}

    response.sendFile("home.html", {root: __dirname});

});

function existID(id,array){
    var res = false;
    for(i=0;i<cont;i++){
        if(array[i]==id) res = true;
    }
    return res;
}

function printIDArray(array){
    for(i=0;i<cont;i++){
        console.log("id: "+array[i]);
    }
}

function findID(id,array){
    var res;
    for(i=0;i<cont;i++){
        if(array[i]==id) res = i;
    }
    return res;   
}
    
 function newMax(array){
     var max = 0;
     for(i=0;i<cont;i++)
         if(array[i]>max) max = array[i];
     console.log("max:"+max);
     max = max+1;
     console.log("max+1:"+max);
    return max; 
 }   

//starta il server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});