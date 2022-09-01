const form = document.getElementById('createForm');
const nombreEdit = document.getElementById('nombreEdit');
const imageEdit = document.getElementById('imageEdit');
const descripcionEdit = document.getElementById('descripcionEdit');


window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = []
        
        if (nombreEdit.value == " ") {
            errores.push("El campo de nombre tiene que estar completo")
        } else if (nombreEdit.value.length < 5) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");
        }

        if (descripcionEdit.value.length < 20) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");
        }; 
        if (errores.length > 0) {
            e.preventDefault();

            let erroresUl = document.querySelector("div.errores ul");
            erroresUl.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                erroresUl.innerHTML += "<li>" + errores[i] + "</li>";
            };
        };
    });
    })