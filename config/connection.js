var mysql =  require('mysql');

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database:'burgers',
    port: 3306
})
}

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id: " + connection.threadid);
});

module.exports = connection