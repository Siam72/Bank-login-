document.getElementById('btn-field').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById("pass-field")
    const password = passwordField.value;
    password.value="";

    if( email === 'mdsiamh77@gmail.com' && password === '1234'){
       window.location.href= 'bank.html';
}
   else{
    alert('invalid user')
   }
    
})