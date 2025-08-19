let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    amigoInput.value = '';
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
