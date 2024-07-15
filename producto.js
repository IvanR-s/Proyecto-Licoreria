let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
//botones paginacion
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.pagination .page');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    pages.forEach(page => {
        page.addEventListener('click', function(e) {
            e.preventDefault();
            removeActiveClass();
            this.classList.add('active');
        });
    });

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        const activePage = document.querySelector('.pagination .page.active');
        if (activePage.previousElementSibling && activePage.previousElementSibling.classList.contains('page')) {
            removeActiveClass();
            activePage.previousElementSibling.classList.add('active');
        }
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        const activePage = document.querySelector('.pagination .page.active');
        if (activePage.nextElementSibling && activePage.nextElementSibling.classList.contains('page')) {
            removeActiveClass();
            activePage.nextElementSibling.classList.add('active');
        }
    });

    function removeActiveClass() {
        pages.forEach(page => {
            page.classList.remove('active');
        });
    }
});
