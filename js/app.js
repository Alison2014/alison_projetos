const texto = document.querySelector('.textoAnimado');
const letras = texto.textContent.split('');

texto.innerHTML = '';

letras.forEach((letra) => {
    const span = document.createElement('span');
    span.textContent = letra;
    texto.appendChild(span);
});