
var db = require( './database' );

module.exports = {
		
	deleteCourse: function(id, callback){
		var sql1 = "delete from courselist where courseid=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},

	updateStudent: function(user, callback){
		var sql = "update studentlist set name=?, email=? where id=?";
		db.execute(sql, [user.name, user.email, user.id], function(status){
			callback(status);
		});
	},
	
}

