module.exports = function() {
    var db = require('../repositories/db_connect')();
    var Schema = require('mongoose').Schema;

    var message = Schema({
        sender : String,
        text : String
    });

    var chat = Schema({
        name : {
            type : String,
            required : true
        },

        email : {
            type : String,
            required : true,
            index : {
                unique : true
            }
        },

        messages : [message]
    });

    return db.model('chat', chat);
};
