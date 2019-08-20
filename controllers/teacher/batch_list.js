
var express = require( 'express' );
var viewer	= require.main.require( './models/userViewer' );
var modifier = require.main.require('./models/userModifier');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		viewer.getAllBatch(function ( results ){
			console.log(results.uid);
			if( results.length > 0 ){
				res.render( 'teacher/batch_list', {userInfo: results} );
			}else {
				res.send('No User available');
			}
		});
	}else{
		res.redirect( '/login/login' );
	}
});

module.exports = router;

