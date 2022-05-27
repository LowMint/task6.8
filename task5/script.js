let input = document.querySelector('input')
let button = document.querySelector('button')
let duplicateField = document.querySelector('#duplicateField')


button.onclick = function(event) {
    console.log(input.value);
    input.value = ('');
    duplicateField.textContent = ('')
    event.preventDefault();
}


input.oninput = function() {
    duplicateField.textContent = input.value
}

