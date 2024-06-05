const abrirEnlaceExterno = (event) => {
    event.preventDefault();
    const enlace = event.target.getAttribute('href');
    window.open(enlace, '_blank');
};

const enlaces = document.querySelectorAll('.title__network__item a');

enlaces.forEach((enlace) => {
    enlace.addEventListener('click', abrirEnlaceExterno);
});