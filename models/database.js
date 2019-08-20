
var mysql = require( "mysql" );

var dbConfig = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'school'
};

var getConnection = function( callback ){
  var connection = mysql.createConnection( dbConfig );

  connection.connect( function( error ){
    if ( error ){
      console.log( 'Connection Error..!' );
    }else {
      console.log( 'Connected as id ' + connection.threadId );
    }
	});
  callback( connection );
}

module.exports = {
  getResult: function( sql, params, callback ){
    getConnection( function( connection ){
      if( params != "" ){
        connection.query( sql, params, function( error, results ){
          if( error ){
            callback( [] );
					}else{
						callback( results );
					}
				});
			}else{
				connection.query( sql, function( error, results ){
					if( error ){
						callback( [] );
					}else{
						callback( results );
					}
				});
			}
      connection.end( function( error ){
				console.log( 'Connection Ending..!' );
			});
		});
	},
  execute: function( sql, params, callback ){
		getConnection( function( connection ){
			if( params != "" ){
				connection.query( sql, params, function( error, results ){
					if( error ){
						callback( false );
					}else{
						callback( true );
					}
				});
			}else{
				connection.query( sql, function( error, results ){
					if( error ){
						callback( false );
					}else{
						callback( true );
					}
				});
			}
			connection.end( function( error ){
				console.log( 'Connection Ending..!' );
			});
		});
	}
}
