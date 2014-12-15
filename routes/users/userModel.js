var bookshelf = require('./../../config/db').bookshelf;

var User = bookshelf.Model.extend({
  tableName: 'user'
});

module.exports = {
  User: User
};