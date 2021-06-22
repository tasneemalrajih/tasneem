$(function(){
var $registerForm = $("#registration");
if($registerForm.length){
  $registerForm.validate({
    rules:{
      first_name:{
        required: true
      }
    },
    messages:{
      first_name: {'First name is mm'
    }
    }
  })
}

})
