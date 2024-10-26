const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
var link=document.getElementById('linkedi');
var disable=document.getElementById('disablesignup');
const signIn = document.getElementById('disablesignin');


signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signIn.addEventListener('click', () => {
    // Enable the "Live Editor" button
    disable.disabled = false;
    disable.classList.remove('disabled'); // Remove the 'disabled' class if necessary
});
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
  
})

link.addEventListener('click', function (event) {
    if (disable.disabled) {
        event.preventDefault();
    }
});