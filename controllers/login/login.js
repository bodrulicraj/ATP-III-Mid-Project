
var express = require( 'express' );
var viewer	= require.main.require( './models/userViewer' );
var router = express.Router();

router.get( '/', function( req, res ){
	res.render( 'login/login' );
});

router.post( '/', function( req, res ){
	var data = {
		id       : req.body.username,
		password : req.body.password
	};

	viewer.validate( data, function( status ){
		if( status ){
			req.session.uid = req.body.username;
			res.redirect( '/teacher/teacher' );
		}else{
			res.send( 'invalid..!' );
			// res.render( 'login/login' );
		}
	});
});

module.exports = router;
