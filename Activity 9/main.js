//cargamos el DOM
document.addEventListener("DOMContentLoaded", function () {
    //obtener el primer formulario
    const form = document.getElementsByTagName("form")[0];

    //Escuchardor al submit
    form.addEventListener("submit", function (e) {

        //Prevenir el submit antes de la validación
        e.preventDefault();

        //Validaciones
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const password = document.getElementById("passwrod").value;

        //Variable validacion y errores
        let isValid = true;
        let errorMessage = "";

        //Validaciones
        if (!/^[A-Z]/.test(name)) {
            isValid = false;
            errorMessage += "El nombre debe comenzar con mayúscula.\n";
        }

        if (!/^[A-Z]/.test(lastName)) {
            isValid = false;
            errorMessage += "El apellido debe comenzar con mayúscula.\n";
        }

        if (!/^[A-Z]/.test(password)) {
            isValid = false;
            errorMessage += "La contraseña debe comenzar con mayúscula.\n";
        }

        if (name === "") {
            isValid = false;
            errorMessage += "El nombre no puede estar vacío";
        }

        if (lastName === "") {
            isValid = false;
            errorMessage += "El apellido no puede estar vacío";
        }

        if (password === "") {
            isValid = false;
            errorMessage += "La contraseña no puede estar vacía";
        }
    })

})