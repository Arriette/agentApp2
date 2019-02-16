const express = require('express');
const mysql = require('mysql');

const app = express();

var connect = mysql.createConection({
	host:'localhost:3306',
	user: 'root',
	password:'',
	database: 'agentApp'
});

connection.connect(function(error) {
	if(!!error) {
		console.log('Error');
	}else {
		console;log('connected');
	}
})

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'sandra', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  connection.query("SELECT * FROM agentApp", function(error, rows, fields)
  if(!!error) {
  	console.log('Error in the query')
  } else {
  	//parsing
  	console.log('succes')
  }
  //callback

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

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);