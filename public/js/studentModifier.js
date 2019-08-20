
$( document ).ready( function(){

  $( document ).on( 'click', '.edit_data', function(){
    var uid = $( this ).attr( "id" );
    console.log(uid);
    $.ajax({
      url: 'user/student/'+uid,
      method: "GET",
      dataType: "json",
      success: function( data ){
        $('#id').val(data[0].id);
        $('#name').val(data[0].name);
        $('#email').val(data[0].email);
        $('#student_Modal').modal('show');
      }
    });
  });
  

  $( document ).on( 'click', '.view_data', function(){
    var uid = $( this ).attr( "id" );
    
    console.log(uid);
    if( uid != '' ){
      $.ajax({
        url:"view/student/"+uid,
        method:"GET",
        dataType: "json",
        success:function( data ){          
          $('#sid').html(data[0].id);
          $('#sname').html(data[0].name);
          $('#semail').html(data[0].email);
          $('#viewModal').modal('show');
        }
      });
    }
  });

  $('#update_form').on("submit", function(event){
    event.preventDefault();

    if($('#name').val() == ""){
      alert("Name is required");
    }else if($('#email').val() == ""){
      alert("Email is required");
    }else if($('#gender').val() == ""){
      alert("Gender is required");
    }else{
      $.ajax({
        url:"update/student",
        method:"POST",
        data:$('#update_form').serialize(),
        success:function(data){
          $('#student_Modal').modal('hide');
          $('#msg').html(data);
          $('#msgModal').modal('show');
        }
      });
    }
  });

  $( document ).on( 'click', '.delete_data', function(){
    var uid = $( this ).attr( "id" );
    $.ajax({
      url: 'delete/student',
      method: "POST",
      data: {id: uid},
      success: function( data ){
        console.log(data);
        $('#dmsg').html(data);
        $('#deleteModal').modal('show');
      }
    });
  });
  
});
  




