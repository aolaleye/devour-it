// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {

    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    create: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },
    
    update: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }

};

module.exports = burgers;
