var express        = require('express')
var bodyParser     = require('body-parser')
var path           = require('path')
var sessionsModule = require('client-sessions')
var db             = require('./models/db')

var app = express()
app.set('view engine', 'pug')

var gar = global.appRoot = path.resolve(__dirname);

var sessionMiddleware = sessionsModule({
    cookieName: 'auth-cookie',  // front-end cookie name
    secret: 'DR@G0N$',        // the encryption password : keep this safe
    requestKey: 'session',    // req.session,
    duration: (86400 * 1000) * 7, // one week in milliseconds
    cookie: {
        ephemeral: false,     // when true, cookie expires when browser is closed
        httpOnly: true,       // when true, the cookie is not accesbile via front-end JavaScript
        secure: false         // when true, cookie will only be read when sent over HTTPS
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./public'))
app.use(sessionMiddleware)

app.use(require('./routes/mainRoutes'))



var port = process.env.PORT || 80
app.listen(port, function(err){
    if ( err ) { console.log(err) }
})
