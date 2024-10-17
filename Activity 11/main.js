function sendForm(e) {
    //Prevenir cambios
    e.preventDefault();

    //Variables
    const place = document.getElementById('place').value;

    //Variable para url:
    const aux = new URL('https://www.google.com/maps/@26.8611352,-15.8911308,8.08z?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D');
    //CLAVE DE API: AIzaSyAdoY6EhLoHvU3FZnRvmEL5lmdZTPmAvCA

    fetch(aux).then(response => {
        return response.json()
    });

}
