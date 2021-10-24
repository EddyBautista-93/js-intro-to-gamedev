let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

// clear a screen every frame
ctx.clearRect(0, 0, 800, 600);


// drawing out a object
ctx.fillStyle = '#f00'
ctx.fillRect(20, 20, 100, 100);


