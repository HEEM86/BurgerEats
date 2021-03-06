// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(result) {
      cb(result);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(result) {
      cb(result);
    });

  }
};










// Export the database functions for the controller (burgersController.js).
module.exports = burger;
