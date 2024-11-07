document.addEventListener("DOMContentLoaded", function() {
    const imagenes = [
        'img/alfajorinit.jpg',  // Asegúrate de que estas rutas sean correctas
        'img/alfajorinit2.jpg',
    ];

    let indice = 0;
    const imgElement = document.getElementById('imagen');

    function cambiarImagen() {
        indice = (indice + 1) % imagenes.length;
        imgElement.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = imagenes[indice];
            imgElement.style.opacity = 1;
        }, 500);
    }

    setInterval(cambiarImagen, 3000);
});

const imagen = ['img/alfajor1.jpg', 'img/alfajor2.jpg', 'img/alfajor3.jpg','img/alfajor4.jpg','img/alfajor5.jpg','img/alfajor6.jpg','img/alfajorinit.jpg'];
let indice = 0;

function cambiarImagen(direccion) {
    indice += direccion;
    if (indice >= imagen.length) {
        indice = 0;
    }
    if (indice < 0) {
        indice = imagen.length - 1;
    }
    document.getElementById('imagenPrincipal').src = imagen[indice];
}