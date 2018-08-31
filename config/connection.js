var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: process.env.DBHOST || "localhost", 
    user: process.env.DBUSER || "root",
    password: process.env.DBPASSWORD || "root",
    port: 3306, 
    database: process.env.DB || "burgers",
    multipleStatements: true
  });
}


connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id: " + connection.threadid);
});

module.exports = connection