// Obtén la barra de navegación
var navbar = document.querySelector(".navbar");

// Obtén la posición inicial de la barra de navegación
var navbarOffset = navbar.offsetTop;

// Función para cambiar la altura de la barra de navegación
function resizeNavbar() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("small");
        document.body.classList.add("small-navbar-padding");
    } else {
        navbar.classList.remove("small");
        document.body.classList.remove("small-navbar-padding");
    }
}

// Asocia la función resizeNavbar con el evento scroll
window.onscroll = function () {
    resizeNavbar();
};

// Ejecuta resizeNavbar al cargar la página
resizeNavbar();
