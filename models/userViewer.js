
var db = require( './database' );

module.exports = {
	getById: function( id, callback ){
		var sql = "select * from login where id=?";
		db.getResult( sql, [id], function( results ){
			callback( results );
		});
	},
	getByStudentId: function( id, callback ){
		var sql = "select * from studentlist where id=?";
		db.getResult( sql, [id], function( results ){
			callback( results );
		});
	},

	getAllStudent: function( callback ){
		var sql = "select * from studentlist ORDER BY id ASC";
		db.getResult( sql, [], function( results ){
			callback( results );
		});
	},
	getAllCourse: function( callback ){
		var sql = "select * from courselist";
		db.getResult( sql, [], function( results ){
			callback( results );
		});
	},
	getAllBatch: function( callback ){
		var sql = "select * from batchlist";
		db.getResult( sql, [], function( results ){
			callback( results );
		});
	},
	getAllDocument: function( callback ){
		var sql = "select * from documentlist";
		db.getResult( sql, [], function( results ){
			callback( results );
		});
	},
	getTeacherById: function( id, callback ){
		var sql = "select * from profile where uid=?";
			db.getResult( sql, [id], function( results ){
				callback( results );
			});
	},
	delete: function(id, callback){
		var sql = "delete from courselist where courseid=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
	
	validate: function( user, callback ){
		var sql = "select * from login where uid=? and password=?";
		db.getResult( sql, [user.id, user.password], function( results ){
			if( results.length > 0 ){
				callback( true );
			}else{
				callback( false );
			}
		});
	}
}
