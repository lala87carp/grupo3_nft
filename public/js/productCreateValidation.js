
window.addEventListener("load", function () {
    let formulario = document.getElementById("createForm"); //chequear nombre
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = []
        
        const nombreCreate = document.getElementById('nombreCreate');
        if (nombreCreate.value == " ") {
            errores.push("El campo de nombre tiene que estar completo")
        } else if (nombreCreate.value.length < 5) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");
        }

        const descripcionCreate = document.getElementById('description');
        if (descripcionCreate.value.length < 20) {
            errores.push("El campo de nombre debe tener al menos 5 caracteres");
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
    })

