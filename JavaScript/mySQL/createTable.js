var mySql = require('mysql');
var con = mySql.createConnection({
	host: "localhost",
	user: 'root',
	password: '',
	database: "mydb"
});

con.connect(err => {
	if(err) console.log('error on connection');
	console.log('Connected...');
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, (err, result) => {
		if(err) console.log("error on creating on tabel");
		console.log("Tabel created , result " + result);
	})
});