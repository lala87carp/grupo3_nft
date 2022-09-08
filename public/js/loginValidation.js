
window.addEventListener("load", function () {
    let formulario = document.getElementById("loginForm");
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = []

        const email = document.getElementById('loginEmail');
        if (email.value == " ") {
            errores.push("El campo de usuario tiene que estar completo")
        } 
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
        
        let password = document.getElementById("loginPassword")  
        if (password.value == "") {
            errores.push("La contraseña no puede estar vacia");
        }; 
        if (errores.length > 0) {
            e.preventDefault();
            console.log(errores)

            let erroresUl = document.querySelector("div.errores ul");
            erroresUl.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                erroresUl.innerHTML += "<li>" + errores[i] + "</li>";
            };
        }else {
            formulario.submit()
        };
    });
    })



