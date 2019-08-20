
var express = require( 'express' );
// var user = require.main.require('./models/user-model');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		res.render( 'admin/admin', {username: req.session.uid});
	}else{
		res.redirect( '/login/login' );
	}
	// res.render( 'admin/admin' );
});

module.exports = router;
