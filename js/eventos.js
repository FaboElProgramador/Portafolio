const abrirEnlaceExterno = (event) => {
    event.preventDefault();
    const enlace = event.currentTarget.getAttribute('href');
    window.open(enlace, '_blank');
};

const enlaces = document.querySelectorAll('.title__network__item a');

enlaces.forEach((enlace) => {
    enlace.addEventListener('click', abrirEnlaceExterno);
});

const elementosAnimados = document.querySelectorAll(
    'section:not(.menu), .skills__box, .hobbies__box, .academic__courses__box, .certificate__card, .experiencie__box'
);

document.documentElement.classList.add('js');

const observadorEntrada = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            observer.unobserve(entrada.target);
        }
    });
}, { threshold: 0.12 });

elementosAnimados.forEach((elemento) => {
    elemento.classList.add('reveal');
    observadorEntrada.observe(elemento);
});

const enlacesMenu = [...document.querySelectorAll('.menu__list__item a')];
const secciones = [...document.querySelectorAll('section[id]')];

const observadorMenu = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) {
            return;
        }

        enlacesMenu.forEach((enlace) => {
            enlace.classList.toggle('is-active', enlace.getAttribute('href') === `#${entrada.target.id}`);
        });
    });
}, { rootMargin: '-28% 0px -62% 0px' });

secciones.forEach((seccion) => observadorMenu.observe(seccion));