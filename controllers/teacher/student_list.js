
var express = require( 'express' );
var viewer	= require.main.require( './models/userViewer' );
var modifier = require.main.require('./models/userModifier');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		viewer.getAllStudent(function ( results ){
			console.log(results.uid);
			if( results.length > 0 ){
				res.render( 'teacher/student_list', {userList: results} );
			}else {
				res.send('No User available');
			}
		});
	}else{
		res.redirect( '/login/login' );
	}
});

router.get( '/user/student/:uid', function( req, res ){
	if( req.session.uid != null ){
		viewer.getByStudentId( req.params.uid, function( results ){
			if( results.length > 0 ){
				res.send(results);
			}else{
				res.redirect( '/teacher/userList/studentList' );
			}
		});
	}else{
		res.redirect( '/login/login' );
	}

});

module.exports = router;
