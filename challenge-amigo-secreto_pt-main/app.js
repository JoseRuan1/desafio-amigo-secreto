const inputNome = document.getElementById('amigo');
const botaoAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const botaoSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

let amigos = [];

function adicionarNome(event) {
    event.preventDefault(); 
    const nome = inputNome.value.trim(); 
    if (nome === "") {
        alert("Erro, insira um nome válido!");
    } else {
        amigos.push(nome); 
        atualizarLista();
        inputNome.value = ""; 
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = ""; 
    amigos.forEach(nome => {
        const li = document.createElement('li'); 
        li.textContent = nome; 
        listaAmigos.appendChild(li); 
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceSorteado]; 
    
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

botaoAdicionar.addEventListener('click', adicionarNome); 
botaoSortear.addEventListener('click', sortearAmigo);


