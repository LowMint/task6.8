const textField = document.querySelector('#link')
textField.onclick = function(event) {
    var promptText = prompt();
    textField.textContent = promptText;
    event.preventDefault();
}
