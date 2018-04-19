/* 
 * @author Cristhiandavx
 * Created on : 02/04/2018, 12:11:14 PM, by: Cristhian
 */
/*Utilizando JQuery y JavaScript*/
//============================Al momento de que el documento está cargado=======
$(document).ready(function () {
    $("#configMenu-V, #configMenu-H").click(function () {
        console.log("cambiar orientacion de menu");
        $("#vertical-nav, #horizontal-group").toggleClass("d-lg-none");
        $("#content").toggleClass("col-lg-10");
        $("#horizontal-group").toggleClass("d-lg-flex", "d-none");
    });
    
    $("#configIcon-E, #configIcon-C").click(function () {
        console.log("expandir menu");
        $(".etiqueta").toggleClass("d-lg-inline-block ml-1");
        $("#content").toggleClass("col-lg-7");
        
        $("#configIcon-E").toggleClass("d-none");
        $("#configIcon-C").toggleClass("d-none");
    });
    
    $("#optVertical").on("click", function(){
        $("#optHorizontal").removeClass("active");
        $("#nav").removeClass("h");
        $(this).addClass("active");
    });
    $("#optHorizontal").on("click", function(){
        $("#nav").addClass("h");
        $("#optVertical").removeClass("active");
        $(this).addClass("active");
    });
    
    $("#FormControlNumerodecedula").focusout(function () {
        loadRecordDataByCi();
        console.log("searching");
    });
});
$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 784) {
        if (sessionStorage.getItem("menu") !== "colapsado") {
            $("#menuBtn").removeClass("fa-outdent");
        } else {
            $("#menuBtn").removeClass("fa-indent");
        }
        $("#menuBtn").addClass("fa-institution");
    } else {
        $("#menuBtn").removeClass("fa-institution");
        if (sessionStorage.getItem("menu") === "colapsado") {
            $("#menuBtn").addClass("fa-indent");
        } else {
            $("#menuBtn").addClass("fa-outdent");
        }
    }
});
// =========================Validaciones========================================
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log("hay campos invalidos");
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    if ($("#btnGuardar").hasClass("d-none")) {
                        modifyRecord($("#FormControlNumerodecedula").val());
                        console.log("sent to modify");
                    } else if ($("#btnModificar").hasClass("d-none")) {
                        addRecord();
                        console.log("sent to add");
                    }

                }
                /*Esto solo funcionará con los estilos personalizados de bootstrap*/
                //form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();
//
// =========================Funciones llamadas==================================
function reset() {
    if ($("#btnGuardar").hasClass("d-none")) {
        document.querySelector("#btnModificar").classList.add("d-none");
        document.querySelector("#btnGuardar").classList.remove("d-none");
    }
    document.querySelector("#FormControlNombre").focus();
}
//
/*Botones para configurar los menus de navegación en abstractpage*/
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
//