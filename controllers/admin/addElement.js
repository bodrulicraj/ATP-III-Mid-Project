
var express = require( 'express' );
var modifier = require.main.require('./models/userModifier');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		res.send('Invalid..!');
	}else{
		res.redirect( '/login/login' );
	}
	// res.render( 'admin/addStudent' );
});

router.get( '/addStudent', function( req, res ){
	if( req.session.uid != null ){
		res.render( 'admin/addStudent', {username: req.session.uid} );
	}else{
		res.redirect( '/login/login' );
	}
	// res.render( 'admin/addStudent' );
});

router.get( '/addTeacher', function( req, res ){
	if( req.session.uid != null ){
	}else{
		res.redirect( '/login/login' );
	}
	// res.render( 'admin/addStudent' );
});

router.post( '/addStudent', function( req, res ){
	var data = {
		id     : req.body.sid,
		name   : req.body.sname,
		email  : req.body.semail,
		gender : req.body.sgender
	};
	modifier.addStudent( data, function( status ){
		if( status ){
			// student.create( data2, function( status ){
			// 	if( status ){
			// 		res.redirect( '/admin/admin' );
			// 	}else {
					res.redirect( '/admin/admin' );
			// 	}
			// });
		}else{
			res.redirect( '/admin/admin' );
		}
	});
});

router.post( '/addTeacher', function( req, res ){
	var data1 = {
		id     : req.body.sid
	};
	var data2 = {
		name   : req.body.sname,
		email  : req.body.semail,
		gender : req.body.sgender
	};
	login.create( data1, function( status ){
		if( status ){
			student.create( data2, function( status ){
				if( status ){
					res.redirect( '/admin/admin' );
				}else {
					res.redirect( '/admin/admin' );
				}
			});
		}else{
			res.redirect( '/admin/admin' );
		}
	});
});

module.exports = router;
