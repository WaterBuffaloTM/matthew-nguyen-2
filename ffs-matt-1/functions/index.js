const functions = require("firebase-functions");
const mysql = require("mysql");




exports.createContact = functions.https.onCall(async (body, context) => {
    console.log(body);
    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'Contacts_DB_Manager'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    const runQuery = new Promise((accept, reject) => {
    
       let myQuery = connection.query("INSERT INTO `contacts`(`firstName`, `lastName`, `email`, `phoneNumber`) VALUES ('"+body.firstname+"','"+body.lastname+"','"+body.emailaddress+"','"+body.phonenumber+"' )" , function (err, result, fields) {
            if (err) {
                console.log(myQuery);
                reject();
            } 
            else {
                accept(result);
            }
        });
    })
    const resultME = await runQuery;
   return resultME

})



////////////////////////////////// VIEW ALL//////////////////////////////////


exports.viewAll = functions.https.onCall(async (body, context) => {
    console.log('made my way to the server');
    // connect to the MYSQL database!

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'Contacts_DB_Manager'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    const runQuery = new Promise((accept, reject) => {
    
       let myQuery = connection.query("SELECT * FROM contacts" , function (err, result, fields) {
            if (err) {
                console.log(myQuery);
                reject();
            } 
            else {
                accept(result);
            }
        });
    })
    const resultsOne = await runQuery;
   return resultsOne
  

})

exports.viewAContact = functions.https.onCall(async (body, context) => {
    console.log('made my way to the server');
    console.log(body);
    // connect to the MYSQL database!

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'Contacts_DB_Manager'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    const runQuery = new Promise((accept, reject) => {
        let id = body;
       let myQuery = connection.query("SELECT * FROM `contacts` WHERE id = "+id+"" , function (err, result, fields) {
            if (err) {
              
                reject();
            } 
            else {
                console.log(myQuery);
                accept(result);
            }
        });
    })
    
    const resultsOne = await runQuery;
   return resultsOne
  

})


///////////////////////////// DELETE CONTACTS////////////////////////

exports.deleteFunction = functions.https.onCall(async (body, context) => {
    console.log('made my way to the server');
    console.log(body);
    // connect to the MYSQL database!

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'Contacts_DB_Manager'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    const runQuery = new Promise((accept, reject) => {
        let idFromPage = body;
        console.log(idFromPage);
       let myQuery = connection.query("DELETE FROM `Contacts` WHERE id = "+idFromPage+"" , function (err, result, fields) {
            if (err) {
              
                reject();
            } 
            else {
                console.log(myQuery);
                accept(result);
            }
        });
    })
    
    const resultsOne = await runQuery;
   return resultsOne
  

})