
var express = require( 'express' );
var viewer	= require.main.require( './models/userViewer' );
var modifier = require.main.require('./models/userModifier');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		res.send('Invalid..!');
	}else{
		res.redirect( '/login/login' );
	}
});

router.get( '/studentList', function( req, res ){
	if( req.session.uid != null ){
		viewer.getAllStudent(function ( results ){
			console.log(results.uid);
			if( results.length > 0 ){
				res.render( 'admin/studentList', {userList: results} );
			}else {
				res.send('No User available');
			}
		});
	}else{
		res.redirect( '/login/login' );
	}
});

router.get( '/teacherList', function( req, res ){
	if( req.session.uid != null ){
	}else{
		res.redirect( '/login/login' );
	}
});

module.exports = router;
