var socket = io();

var username = document.getElementById('username');
var message = document.getElementById('message');
var chatArea = document.querySelector('ul')
var button = document.getElementById('submit-btn');

socket.on('add-message', function(data) {
    addMessage(data);
})

button.addEventListener('click', function() {
    socket.emit('add-message', {
        username: username.value,
        message: message.value
    });
    message.value = '';
});

function addMessage({username, message}) {
    var el = document.createElement('li');
    el.innerHTML = `${username}: ${message}`;
    console.log(el);
    chatArea.appendChild(el);
}



