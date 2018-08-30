var mysql =  require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'burgers',
    port: 3306
})

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id: " + connection.threadid);
});

module.exports = connection