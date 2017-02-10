var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name:  String,
    email: {
	type : String,
	unique : true
    },
    password: String,
    created: {
	type: Number,
	default: function(){ return Date.now() }
    }
})
	

var User = mongoose.model('User', UserSchema)
module.exports = User;
