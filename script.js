
// #1
const nomeInput = document.getElementById('nome-input');
const cartaoNome = document.getElementById('cartao-nome');

nomeInput.addEventListener('input', () => {
    cartaoNome.textContent = nomeInput.value || 'Seu Nome';
});

// #2
const cartao = document.getElementById('cartao');
const botaoAzul = document.getElementById('btn-azul');
const botaoVerde = document.getElementById('btn-verde');

botaoAzul.addEventListener('click', () => {
    cartao.classList.remove('fundo-verde');
    cartao.classList.add('fundo-azul');
});

botaoVerde.addEventListener('click', () => {
    cartao.classList.remove('fundo-azul');
    cartao.classList.add('fundo-verde');
})


