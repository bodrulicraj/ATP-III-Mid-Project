
var express = require( 'express' );
var viewer	= require.main.require( './models/userViewer' );
var modifier = require.main.require('./models/userModifier');
var router = express.Router();

router.get( '/', function( req, res ){
	if( req.session.uid != null ){
		viewer.getTeacherById( req.session.uid, function( results ) {
			if( results.length > 0 ){
				console.log(results);
				res.render( 'teacher/teacher', {userInfo: results});
			}else{
				res.redirect( '/teacher/teacher' );
			}
		});
  }else{
    res.redirect( '/login/login' );
  }
});

module.exports = router;


