
var express = require( 'express' );
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		req.session.uid = null;
		res.redirect( '/login/login' );
	}else{
		res.redirect( '/login/login' );
	}
});

module.exports = router;
