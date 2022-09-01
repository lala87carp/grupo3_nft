const form = document.getElementById('loginForm');
const email = document.getElementById('loginEmail');
const password = document.getElementById('loginPassword');


window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        
        if (email.value == " ") {
            alert("El campo de usuario tiene que estar completo")
        } 
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };
          if( !validateEmail.test(email.value) ){
            alert("el email no es un formato valido")
          };
        
        if (password.value == "") {
            alert("La contraseña no puede estar vacia");
        }; 
    });
    })



