var socket = io();

var username = document.getElementById('username');
var message = document.getElementById('message');
var chatArea = document.querySelector('ul')
var button = document.getElementById('submit-btn');

button.addEventListener('click', function() {
    var el = document.createElement('li');
    el.innerHTML = `${username.value}: ${message.value}`;
    console.log(el);
    chatArea.appendChild(el);
    message.value = '';
});






