// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers_db", function(res) {
      cb(res);
    });
  },

  insertOne: function(tableName, colName, value, cb) {
    orm.insertOne("burgers_db", colName, value, function(res) {
      cb(res);
    });
  },

  updateOne: function(tableName, colName, newValue, cb) {
    orm.updateOne("burgers_db", colName, newValue, condition, function(res) {
      cb(res);
    });
  }

};

module.exports = cat;
