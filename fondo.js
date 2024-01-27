document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {  /* Cambia el número según cuánto quieras que el usuario se desplace antes de que ocurra el cambio de fondo */
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});



