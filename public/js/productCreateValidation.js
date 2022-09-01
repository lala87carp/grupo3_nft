const form = document.getElementById('createForm');
const nombreCreate = document.getElementById('nombreCreate');
const imageCreate = document.getElementById('imageCreate');
const descripcionCreate = document.getElementById('descripcionCreate');


window.addEventListener("load", function () {
    let formulario = document.querySelector("form.reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = []
        
        if (nombreCreate.value == " ") {
            errores.push("El campo de nombre tiene que estar completo")
        } else if (nombreCreate.value.length < 5) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");
        }

        if (descripcionCreate.value.length < 20) {
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

