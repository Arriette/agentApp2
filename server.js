const express = require('express');
const mysql = require('mysql');

const app = express();

var connect = mysql.createPool({
	host:'localhost',
	user: 'root',
	password:'',
	database: 'appAgent2',
  insecureAuth : true
});

connect.getConnection(function(err) {
  if (err) {
    throw err;
  } else{
    app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'sandra', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
})

.get('/artistes', (req, res) => {
  const artistes = [
    {id: 1, firstName: 'Sophie', lastName: 'Doe'},
    {id: 2, firstName: 'Julie', lastName: 'Traversy'},
    {id: 3, firstName: 'Myriam', lastName: 'Swanson'},
  ];

  res.json(artistes);
})
.get('/', (req, res) => {
  const artistes = [
    {id: 1, firstName: 'Sophie', lastName: 'Doe'},
    {id: 2, firstName: 'Julie', lastName: 'Traversy'},
    {id: 3, firstName: 'Myriam', lastName: 'Swanson'},
  ];

  res.json(artistes);
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
  }
}); 



// var http = require("http");
// var url = require("url");

// function start(route, handle) {
//  function onRequest(request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("Requête reçue pour le chemin " + pathname + ".");
//   route(handle, pathname, response, request);
//  }

//  http.createServer(onRequest).listen(8888);
//  console.log("Démarrage du serveur.");
// }

// function app(route, handle) {
//  function onRequest(request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("Requête reçue pour le chemin " + pathname + ".");
//   route(handle, pathname, response, request);
//  }

//  http.createServer(onRequest).listen(8888);
//  console.log("Démarrage du serveur.");
// }


// function upload() {
//   console.log("Le gestionnaire 'upload' est appelé.");
// }

// exports.start = start;
// exports.upload = upload;

