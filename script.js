document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegister").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

var boxForm = document.querySelector(".boxForm");
var formularioLogin = document.querySelector(".formularioLogin");
var formularioRegister= document.querySelector(".formularioRegister");
var boxLogin = document.querySelector(".boxLogin");
var boxRegister= document.querySelector(".boxRegister");

function anchoPagina(){
    if(window.innerWidth > 850){
        boxLogin.style.display="block";
        boxRegister.style.display="block";
    } else{
        boxRegister.style.display="block";
        boxRegister.style.opacity="1";
        boxLogin.style.display="none";
        formularioLogin.style.display="block";
        boxForm.style.left="0px";
        formularioRegister.style.display="none";
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formularioLogin.style.display= "block";
        boxForm.style.left= "10px";
        formularioRegister.style.display= "none";
        boxRegister.style.opacity= "1";
        boxLogin.style.opacity= "0";
    } else{
        formularioLogin.style.display= "block";
        boxForm.style.left= "0px";
        formularioRegister.style.display= "none";
        boxRegister.style.display= "block";
        boxLogin.style.display= "none";
    }
    
}

function register(){
    if(window.innerWidth > 850){
        formularioRegister.style.display= "block";
        boxForm.style.left= "410px";
        formularioLogin.style.display= "none";
        boxRegister.style.opacity= "0";
        boxLogin.style.opacity= "1";
    } else{
        formularioRegister.style.display= "block";
        boxForm.style.left= "0px";
        formularioLogin.style.display= "none";
        boxRegister.style.display= "none";
        boxLogin.style.display="block";
        boxLogin.style.opacity= "1";
    }

}