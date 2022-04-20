const mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});



let factRepo = {
    get: function (resolve, reject) {

        connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    getById: function (id, resolve, reject) {

        connection.query(`SELECT * FROM fact_table WHERE id=${id}`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    getByTopic: function (topic, resolve, reject) {

        connection.query(`SELECT * FROM fact_table WHERE topic="${topic}"`, function (err, result, fields) {
            if (err) {
                reject(err)
            }
            resolve(result);
        });

    },
    insert: function (newData, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {
                connection.query(` CREATE fact_table 'sammy'@'localhost' IDENTIFIED BY 'password ${id}`, function (err, result, fields) {
                    if (err) throw err;
                    resolve(result);
                });
            }
        })
    },
    delete: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err)
            } else {


            }
        })
    },

}

module.exports = factRepo