// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },

  insertOne: function(tableName, colName, value, cb) {
    var queryString = "INSERT INTO ?? SET ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableName, colName, value], function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },

  updateOne: function(tableName, colName, newValue, condition, cb) {
    var queryString = "UPDATE " + tableName + "  SET ?? WHERE ??";

    console.log(queryString);

    connection.query(queryString, 
      [
        {
          colName: newValue
        },
        {
          id: condition
        }
      ], 
      
      function(err, result) {
        if (err) throw err;

      cb(result);
    });
  }

};


module.exports = orm;
