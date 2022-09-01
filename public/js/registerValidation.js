const { ErrorCreate } = require("session/lib/session/storage/base");

window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let campoNombre = document.querySelector("input.name");
        if (campoNombre.value == " ") {
            alert("el campo de nombre tiene que estar completo")
        } else if (campoNombre.value.length < 3) {
            alert("El campo de nombre debe tener al menos 3 caracteres");
        }
        let surname = document.querySelector("input.surname");
        if (surname.value == " ") {
            alert("El campo de apellido tiene que estar completo")
        } else if (surname.value.length < 2) {
            alert("El campo de apellido debe tener al menos 2 caracteres");
        
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
        
        let password = document.querySelector("input.password")
        if (password.value.length < 8) {
            alert("La contraseña debe tener entre 8 y 10 caracteres");
        };
        if (password.value == "") {
            alert("La contraseña no puede estar vacia");
        }; 
    });
    })










