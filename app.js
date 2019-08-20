//Declaraton
var express = require( 'express' );
var ejs = require( 'ejs' );

var bodyParser = require( 'body-parser' );
var expressSession = require( 'express-session' );
// var cookieParser = require('cookie-parser');

var home = require( './controllers/home/home' );
var login = require( './controllers/login/login' );
var admin = require( './controllers/admin/admin' );
// var userList = require( './controllers/admin/userList' );
var addElement = require( './controllers/admin/addElement' );
var student = require( './controllers/student/student' );
var teacher = require( './controllers/teacher/teacher' );
var userList = require( './controllers/teacher/userList' );
// var student_list = require('./controllers/teacher/student_list');
var course_list = require('./controllers/teacher/course_list');
var batch_list = require('./controllers/teacher/batch_list');
var document_list = require('./controllers/teacher/document_list');
var teacher_profile = require('./controllers/teacher/teacher_profile');
var logout = require( './controllers/logout/logout' );

var app = express();
var port = 3600;

//Configuration
app.set( 'view engine', 'ejs' );

//Middleware
app.use(bodyParser.urlencoded({'extended':true}));
app.use(expressSession({secret:'my top secret password', saveUninitialized: true, resave: false}));
// app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(express.static('static_files'));

app.use( '/home/home', home );
app.use( '/login/login', login );
app.use( '/admin/admin', admin );
// app.use( '/admin/userList', userList );
app.use( '/admin/addElement', addElement );
app.use( '/student/student', student );
app.use( '/teacher/teacher', teacher );
app.use( '/teacher/userList', userList );
// app.use( '/teacher/student_list', student_list);
app.use( '/teacher/course_list', course_list);
app.use( '/teacher/batch_list', batch_list);
app.use( '/teacher/document_list', document_list);
app.use( '/teacher/teacher_profile', teacher_profile);
app.use( '/logout/logout', logout );

//Routing
app.get( '/', function( req, res ){
  res.render( "home/home" );
});

// app.get( '/admin/admin', function( req, res ){
//   res.render( "admin/admin" );
// });
//
// app.get( '/admin/addStudent', function( req, res ){
//   res.render( "admin/addStudent" );
// });

//Server Startup
app.listen( port, function(){
  console.log( "Server Started at " + port );
});
