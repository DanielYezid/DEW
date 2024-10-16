//write your JS code here:

function ej1() {
    window.open('', 'ejemplo', 'width = 200,height = 100');
    // window.document.write('hola, hola');
    // debugger;
}

//Añadir info adinional a la ventana
// let ventana2 = window.open('', 'ejemplo', 'width = 200,height = 100');   
// ventana2 = ventana2.document.write(' que fue');

//Abrir una nuea ventana

// function ej5() {
//     window.open('', 'ejemplo', 'top= 100, left= 200, width = 200,height = 100');
//     window.location.replace('https://www.example.com');
// }

// 5. Open a new window and control its appearance
// let customWindow = window.open('', '', 'toolbar=yes,scrollbars=yes,resizable=yes,width=200,height=400,left=200,top=100');
// debugger; // Pausa aquí

//toolbar=yes: Muestra la barra de herramientas de la ventana.
//scrollbars=yes: Habilita las barras de desplazamiento si el contenido excede el tamaño de la ventana.
//resizable=yes: Permite al usuario redimensionar la ventana.
//width y height: Defi

//6.- Abrir y cerrar
// let ventana6 = window.open('', 'ejemplo', 'top= 100, left= 200, width = 200,height = 100');
// ventana6.close();

//7.- Usar Opener
// let ventana7 = window.open('', '', 'width=300,height=300');
// ventana7.opener.document.write('some text');

//8.-
// let ifrm = document.createElement("iframe");
// ifrm.src = 'iframe.html';
// document.body.appendChild(ifrm);
// ifrm.onload = function () {
//     let ifrmDoc = ifrm.contentDocument || ifrm.contentWindow.document;
//     ifrmDoc.write('some text');
// }

//9.-
let iframe2 = document.createElement('iframe');
iframe2.src = 'iframe.html'; // Asegúrate de que existe
document.body.appendChild(iframe2); // se añade el iframe al cuerpo del documento
iframe.onload = function() { //cargamos el iframe
    let iframeDoc = iframe2.contentDocument || iframe2.contentWindow.document;
    console.log(iframeDoc.body.innerHTML);
};








