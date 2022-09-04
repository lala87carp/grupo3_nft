

window.addEventListener("load", function () {
    let formulario = document.getElementById("reservation"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = []

        let campoNombre = document.querySelector("#name");
        if (campoNombre.value == " ") {
            errores.push("El campo de nombre tiene que estar completo")
        } else if (campoNombre.value.length < 2) {
            errores.push("El campo de nombre debe tener al menos 2 caracteres");
        }
        let surname = document.querySelector("#surname");
        if (surname.value == " ") {
            errores.push("El campo de apellido tiene que estar completo")
        } else if (surname.value.length < 2) {
            errores.push("El campo de apellido debe tener al menos 2 caracteres");

        }
        const email = document.getElementById('email');
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };
        if (!validateEmail(email.value)) {
            errores.push("El email no es un formato valido")
        };

        let password = document.querySelector("#password")
        if (password.value == "") {
            errores.push("La contraseña no puede estar vacia");
        };
        if (password.value.length < 8) {
            errores.push("La contraseña debe tener entre 8 y 10 caracteres");
        };

        const file = document.getElementById('image');
        function validate_fileupload(fileName) {
            var allowed_extensions = ["jpg", "png", "gif", "jpeg"];
            var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

            var isValid = allowed_extensions.includes(file_extension);
            return isValid;
        }
        if(!validate_fileupload(file.value)){
            errores.push("El tipo de archivo no es válido debe ser jpg, png, gif o jpeg")
        }

        if (errores.length > 0) {
            e.preventDefault();

            let erroresUl = document.querySelector("div.errores ul");
            erroresUl.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                erroresUl.innerHTML += "<li>" + errores[i] + "</li>";
            };
        };
    });
});











