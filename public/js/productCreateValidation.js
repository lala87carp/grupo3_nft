const form = document.getElementById('createForm');
const nombreCreate = document.getElementById('nombreCreate');
const imageCreate = document.getElementById('imageCreate');
const descripcionCreate = document.getElementById('descripcionCreate');


window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        
        if (nombreCreate.value == " ") {
            alert("El campo de nombre tiene que estar completo")
        } else if (nombreCreate.value.length < 5) {
            alert("El campo de nombre debe tener al menos 5 caracteres");
        }

        if (descripcionCreate.value.length < 20) {
            alert("El campo de nombre debe tener al menos 5 caracteres");
        }; 
    });
    })

