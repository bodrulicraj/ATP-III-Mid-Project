
$( document ).ready( function(){

  $( document ).on( 'click', '.edit_data', function(){
    var uid = $( this ).attr( "id" );
    $.ajax({
      url: 'user/teacher/'+uid,
      method: "GET",
      dataType: "json",
      success: function( data ){
        $('#id').val(data[0].tid);
        $('#name').val(data[0].name);
        $('#email').val(data[0].email);
        $('#gender').val(data[0].gender);
        $('#teacher_Modal').modal('show');
      }
    });
  });

  $( document ).on( 'click', '.view_data', function(){
    var uid = $( this ).attr( "id" );
    if( uid != '' ){
      $.ajax({
        url:"view/teacher/"+uid,
        method:"GET",
        dataType: "json",
        success:function( data ){
            $('#tid').html(data[0].tid);
          $('#tname').html(data[0].name);
          $('#temail').html(data[0].email);
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
        url:"update/teacher",
        method:"POST",
        data:$('#update_form').serialize(),
        success:function(data){
          $('#teacher_Modal').modal('hide');
          $('#msg').html(data);
          $('#msgModal').modal('show');
        }
      });
    }
  });

  $( document ).on( 'click', '.delete_data', function(){
    var uid = $( this ).attr( "id" );
    $.ajax({
      url: 'delete/teacher',
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




//
//
// $('#insert_form').on("submit", function(event){
//      event.preventDefault();
//      if($('#name').val() == "")
//      {
//           alert("Name is required");
//      }
//      else if($('#address').val() == '')
//      {
//           alert("Address is required");
//      }
//      else if($('#designation').val() == '')
//      {
//           alert("Designation is required");
//      }
//      else if($('#age').val() == '')
//      {
//           alert("Age is required");
//      }
//      else
//      {
//           $.ajax({
//                url:"insert.php",
//                method:"POST",
//                data:$('#insert_form').serialize(),
//                beforeSend:function(){
//                     $('#insert').val("Inserting");
//                },
//                success:function(data){
//                     $('#insert_form')[0].reset();
//                     $('#add_data_Modal').modal('hide');
//                     $('#employee_table').html(data);
//                }
//           });
//      }
// });
// $(document).on('click', '.view_data', function(){
//      var employee_id = $(this).attr("id");
//      if(employee_id != '')
//      {
//           $.ajax({
//                url:"select.php",
//                method:"POST",
//                data:{employee_id:employee_id},
//                success:function(data){
//                     $('#employee_detail').html(data);
//                     $('#dataModal').modal('show');
//                }
//           });
//      }
// });
