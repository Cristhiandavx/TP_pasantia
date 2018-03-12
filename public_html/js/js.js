/*archivo con las funciones en JavaScript
 * @author Cristhiandavx*/
/*Botones para configurar los menus de navegación*/
var c = 1;
function colapsarMenu(a) {
    /* para seleccionar multiples elementos se puede usar la opcion
     * Get Elements By Class name. Esta opcion da un array de valores
     * por lo tanto para poder realizar cambios a todos los elementos con
     * ese nombre de clase se recorren todos los elementos del array:
     */
    var reo = document.getElementsByClassName("reorder");
    for (var i = 0; i < reo.length; i++) {
        reo[i].classList.toggle("c");
    }
    var nav = document.getElementById("nav");
    var btn = document.getElementById("menuBtn");
    var foot = document.getElementById("footer");
    nav.classList.toggle("col-3");
    foot.classList.toggle("col-11");
    foot.classList.toggle("col-9");
    btn.classList.toggle("fa-outdent");
    btn.classList.toggle("fa-indent");
//WEB STORAGE
//guarda la posicion para la sesion actual
    if (c === 1) {
        c = 0;
        sessionStorage.setItem("menu", "colapsado");
    } else {
        c = 1;
        sessionStorage.setItem("menu", "ampliado");
    }
}
//al cargar la página
function config() {
    //si el menu en la ultima sesion se dejó en "colapsed",
    //se vuelve a cargar la primera funcion
    if (sessionStorage.getItem("menu") === "colapsado") {
        colapsarMenu();
    }
}
//desplegar menus al dar clic
function dropdown(a) {
    //console.log(a.nextElementSibling);
    a.nextElementSibling.classList.toggle("show");
}
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 784) {
        if(sessionStorage.getItem("menu") !== "colapsado"){
            $("#menuBtn").removeClass("fa-outdent");
        } else {
            $("#menuBtn").removeClass("fa-indent");
        }
        $("#menuBtn").addClass("fa-medium");
    } else {
        $("#menuBtn").removeClass("fa-medium");
        if (sessionStorage.getItem("menu") === "colapsado"){
            $("#menuBtn").addClass("fa-indent");
        } else {
            $("#menuBtn").addClass("fa-outdent");
        }
    }
});