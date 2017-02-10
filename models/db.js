var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/realestestate', function(mongooseErr) {
    if( mongooseErr ) {
	console.error(mongooseErr);
    } 
    else {
	console.info('Mongoose initialized!');
    }
})
