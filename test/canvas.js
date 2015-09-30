canvas = document.getElementById('a');
context = canvas.getContext('2d');

var linearGradient = context.createLinearGradient(0, 0, 300, 0);
linearGradient.addColorStop(0, 'black');
linearGradient.addColorStop(1, 'white');

context.fillStyle = linearGradient;
context.fillRect(0, 0, 300, 225);
