
// create const for each input
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const body = document.querySelector('body');
// create function to get rgb values and change the background
getRGB = function () {
    body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
} 
// add Event Listener and run function
addEventListener('change', getRGB);

