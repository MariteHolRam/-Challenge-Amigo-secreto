let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(amigo.value);
    amigo.value = '';
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        //Crea un elemento de lista para cada amigo
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
