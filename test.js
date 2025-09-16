

const button = document.getElementById('button');
const message = document.getElementById('main-heading');

let clickCounter = 0;
const baseText = "The button has been clicked";

button.addEventListener('click', function() {
clickCounter++;
message.textContent = `${baseText} ${clickCounter} times.`;
button.style.backgroundColor = '#90EE90';

});
