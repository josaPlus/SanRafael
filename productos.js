document.addEventListener("DOMContentLoaded", function () {
    
    // Datos de ejemplo, deberías obtener estos datos desde tu base de datos o una API.
    const productos = [
        { nombre: "Hilo encerado", imagen: "hiloEncerado.png", especificaciones: ["50 gr", "100 gr", "250 gr", "460 gr", "1 kg"] },
        { nombre: "Hilo poliéster", imagen: "hiloPoliester.png", especificaciones: ["1000/2", "1000/3", "1000/4"] },
        { nombre: "Hilo algodón", imagen: "hiloAlgodon.png", especificaciones: ["#5 450 gr", "#6 250gr"] },
        { nombre: "Hilo lubricado", imagen: "hiloLubricado.png", especificaciones: ["#1.5 500 mts"] },
        { nombre: "Hilo macramé tipo croche", imagen: "hiloMacrame.png", especificaciones: ["#2 275 mts", "#5 275 mts", "#6 250 gr", "#18 250 gr"] },
        { nombre: "Hilo pespunte", imagen: "hiloPespunte.png", especificaciones: ["#8 1200 m", "#30 2000 m", "#0 600 m", "#00 400 m"] },
        { nombre: "Hilo semiencerado tipo italiano", imagen: "hiloSemiencerado.png", especificaciones: ["#1.2 500 mts"] },
        {nombre: "Hilo semiencerado de macrame", imagen: "hiloSemiencerado2.png", especificaciones: ["#4 250 gr", "#4 100 gr", "#4 50 gr"]}
    ];

    const productosContainer = document.getElementById("productos");

    productos.forEach(producto => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("producto");

        const imagenElement = document.createElement("img");
        imagenElement.src = producto.imagen;
        imagenElement.alt = producto.nombre;

        const nombreElement = document.createElement("p");
        nombreElement.textContent = producto.nombre;

        //crear lista ordenada de cada hilo
        const especificacionesElement = document.createElement("ol");
        producto.especificaciones.forEach(especificacion => {
            const liElement = document.createElement("li");
            liElement.textContent = especificacion;
            especificacionesElement.appendChild(liElement);
        });
        

        // Enlace a la página de contacto con un mensaje personalizado
const enlaceContacto = document.createElement("a");
enlaceContacto.href = `contactos.html?mensaje=Estoy interesado en el ${producto.nombre}.`;
enlaceContacto.textContent = "Seleccionar";
enlaceContacto.classList.add("enlace-contacto"); // Agregar una clase al enlace

productoElement.appendChild(imagenElement);
productoElement.appendChild(nombreElement);
productoElement.appendChild(especificacionesElement);
productoElement.appendChild(enlaceContacto);

productosContainer.appendChild(productoElement);
    });
});