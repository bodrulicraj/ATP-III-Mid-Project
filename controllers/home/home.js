
var express = require('express');
// var user = require.main.require('./models/user-model');
var router = express.Router();

router.get( '/', function( req, res ){
	res.render( 'home/home' );
});

module.exports = router;
