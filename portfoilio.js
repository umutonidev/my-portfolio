


// ========================================================================================================================
function openTab(tabName) {
    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
} 
function call() {
    var phone_number = "0787795163";
    window.open("tel:" + phone_number, "_blank");
  }

  var sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
  var links = sidemenu.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closemenu);
}
 
}
function closemenu(){
  sidemenu.style.right= "-200px";
}
function isshoworhide() {
    var targeted = event.target.className;
    const id = event.target.id;
    const tochange = document.querySelector(`.${targeted}`);
    const toShowOrHide = document.getElementById(targeted);
    var view = tochange.innerHTML;
    if (tochange.innerHTML === 'view') {
        tochange.innerHTML = 'hide';
        toShowOrHide.style.height = 'auto';
        toShowOrHide.style.display = 'block';
    }
    else {
        tochange.innerHTML = 'view';
        toShowOrHide.style.height = '0';
        toShowOrHide.style.display = 'none';
    }
} 
var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById("name").value;
    if(name.length == 0){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
        nameError.innerHTML='write full name';
        return false;
    }
    nameError.innerHTML="valid"; 
    return true; 
}
function validateEmail(){
    var email=document.getElementById("email").value;
if(email.length == 0 ){
    emailError.innerHTML="Email is required";
    return false;
}
if(!email.match(/^[A-Za-z][A-Za-z0-9._%-]*@[A-Za-z]{5}\.[A-Za-z]{2,4}$/)) {
   emailError.innerHTML='email invalid';
   return false;
}
emailError.innerHTML="email accepted";
return true;
}
function validateMessage(){
    var message=document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;
    if(left > 0){
        messageError.innerHTML= left + 'more charactres';
        return false;
    }

    messageError.innerHTML="valid";
    return true;

}
function validateForm(){
    if(!validateEmail() || !validateMessage() || !validateName()){
        submitError.style.display="block";
        submitError.innerHTML='please fix error to submit';
        offset( submitError);
        return false; }  
}
 function offset(v){
    setTimeout(function(){ v.style.display="none"},3000);
 }

