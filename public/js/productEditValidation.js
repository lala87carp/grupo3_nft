const form = document.getElementById('createForm');
const nombreEdit = document.getElementById('nombreEdit');
const imageEdit = document.getElementById('imageEdit');
const descripcionEdit = document.getElementById('descripcionEdit');


window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        
        if (nombreEdit.value == " ") {
            alert("El campo de nombre tiene que estar completo")
        } else if (nombreEdit.value.length < 5) {
            alert("El campo de nombre debe tener al menos 5 caracteres");
        }

        if (descripcionEdit.value.length < 20) {
            alert("El campo de nombre debe tener al menos 5 caracteres");
        }; 
    });
    })