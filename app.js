// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
document.getElementById('addFriendButton').addEventListener('click', function() {
    const inputField = document.getElementById('friendInput');
    const friendName = inputField.value.trim();

    if (friendName === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(friendName);
    inputField.value = '';

    console.log('Lista de amigos actualizada:', amigos);
});
