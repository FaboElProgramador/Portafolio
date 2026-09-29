const formulario = document.querySelector(".formcontato__form");
const inputs = document.querySelectorAll('.formcontato__input, textarea[name="mensaje"]');
const errorContainer = document.createElement('div');

errorContainer.classList.add('formcontato__error-container');
errorContainer.setAttribute('aria-live', 'polite');

if (!formulario) {
    throw new Error('No se encontró el formulario de contacto.');
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    errorContainer.replaceChildren();

    let tieneError = false;

    for (const input of inputs) {
        input.removeAttribute('aria-invalid');

        if (input.value.trim() === '') {
            const error = document.createElement('p');
            error.classList.add('formcontato__error');
            error.textContent = `El campo ${input.name} es obligatorio.`;
            errorContainer.appendChild(error);
            input.setAttribute('aria-invalid', 'true');
            tieneError = true;
        } else if (input.name === 'email' && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value)) {
            const error = document.createElement('p');
            error.classList.add('formcontato__error');
            error.textContent = 'El formato del correo electronico no es valido';
            errorContainer.appendChild(error);
            input.setAttribute('aria-invalid', 'true');
            tieneError = true;
        }
    }

    if (tieneError) {
        formulario.appendChild(errorContainer);
    } else {
        const confirmation = document.createElement('p');
        confirmation.classList.add('formcontato__success');
        confirmation.textContent = 'Datos válidos. El formulario está listo para conectarse con un servicio de envío.';
        errorContainer.appendChild(confirmation);
        formulario.appendChild(errorContainer);
    }
});