/*archivo con las funciones en JavaScript
 * @author Cristhiandavx*/
/*Botones para configurar los menus de navegación*/
var c = 1;
//console.log(sessionStorage.getItem("view"));
function mostrarMenuH() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("verticalnav");
    nav.classList.toggle("horizontalnav");
    var contenido = document.getElementById("contenido");
    contenido.classList.toggle("content-v");
    contenido.classList.toggle("content-h");
    /***********************WEB STORAGE**********************************/
    //guarda la posicion para la sesion actual
    if (c === 1) {
        c = 0;
        sessionStorage.setItem("view", "h");
    } else {
        c = 1;
        sessionStorage.setItem("view", "v");
    }
    //console.log(sessionStorage.getItem("view"));

    //guarda el valor de la nueva variable en el local
    //localStorage.setItem("menuActivo", menuActivo);
}
//al cargar la página
function config() {
    //si el menu en la ultima sesion se dejó en "h",
    //se vuelve a cargar la primera funcion
    if (sessionStorage.getItem("view") === "h") {
        mostrarMenuH();
    }
}