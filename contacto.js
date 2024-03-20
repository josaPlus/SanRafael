function whatsapp() {
    let nombre = document.querySelector('.selec1[name="nombre"]').value;
    let mensaje = document.querySelector('.selec1[name="mensaje"]').value;

    let empresa = "+52 1 477 432 5057"; // Número de la fábrica
    let mensajeCapitalizado = capitalizarPrimeraLetra(mensaje);

    let informacion = encodeURIComponent("Mi nombre es " + nombre + ". " + mensajeCapitalizado);

    let enlace = "https://api.whatsapp.com/send?phone=" + empresa + "&text=" + informacion;
    window.open(enlace, "_blank");
}

function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function enviarFormulario() {
    // Capitalizamos la primera letra del mensaje antes de enviar el formulario
    var mensajeTextarea = document.querySelector('.selec1[name="mensaje"]');
    mensajeTextarea.value = capitalizarPrimeraLetra(mensajeTextarea.value);

    // Aquí puedes agregar código adicional para validar los campos del formulario si es necesario

    // Llamamos a la función de WhatsApp antes de enviar el formulario
    whatsapp();

    // El formulario se enviará si esta función devuelve true
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const mensajeInput = document.getElementById("mensaje");

    // Obtener el mensaje personalizado de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const mensajePersonalizado = urlParams.get("mensaje");

    // Si hay un mensaje personalizado, asignarlo al textarea
    if (mensajePersonalizado) {
        mensajeInput.value = mensajePersonalizado;
    }
});
