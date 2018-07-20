$(document).ready(function(){
    var registerForm = document.getElementById('registerForm');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirm_password = document.getElementById('#confirm_password');
registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.email.value,password,confirm_password)
})
})

