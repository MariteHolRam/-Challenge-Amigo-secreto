let amigos = [];

function agregarAmigo() {
    const inputField = document.getElementById('amigo');
    const friendName = inputField.value.trim();

    if (friendName === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(friendName);
    inputField.value = '';

    console.log('Lista de amigos actualizada:', amigos);
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
