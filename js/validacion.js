const formulario = document.querySelector(".formcontato__form");
const inputs = document.querySelectorAll('.formcontato__input, textarea[name="mensaje"]');
const errorContainer = document.createElement('div');

errorContainer.classList.add('formcontato__error-container');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const existingErrors = errorContainer.querySelectorAll('.formcontato__error');
    existingErrors.forEach(error => error.remove());

    let tieneError = false;

    for (const input of inputs) {
        if (input.value === ''){
            const error = document.createElement('p');
            error.classList.add('formcontato__error');
            error.textContent = `El campo ${input.name} es obligatorio.`;
            errorContainer.appendChild(error);
            tieneError = true;
        } else if (input.name === 'email' && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value)) {
            const error = document.createElement('p');
            error.classList.add('formcontato__error');
            error.textContent = 'El formato del correo electronico no es valido';
            errorContainer.appendChild(error);
            tieneError = true;
        }
    }

    if (tieneError){
        formulario.appendChild(errorContainer);
        return;
    } 
});