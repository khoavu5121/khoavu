let button = document.getElementById('.btn');
console.log(button);
let body = document.querySelector('body');
// console.log(body);

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color1 = 'rgb(' + x + ',' + y + ',' + z + ')';
    let color2 = 'rgb(' + y + ',' + z + ',' + x + ')';

    body.style.background = color1;
    button.style.background = color2
}

button.addEventListener('click', randomColor)