function main(){
	let canvas = document.getElementById("canvas"); 
	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 
	canvas.style.background = "#fff"; 
	let ctx = canvas.getContext("2d"); 

	let running = true; 
	let score = 0; 

	const SNAKE_PART_SIZE = 40; 
	const SNAKE_SPEED = 40;  
	let snake = [[75, 75]]; 

	const FRUIT_SIZE = 40; 
	let fruitX = Math.random() * (canvas.width - FRUIT_SIZE); 
	let fruitY = Math.random() * (canvas.height - FRUIT_SIZE); 

	window.requestAnimationFrame(function loop(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawSnake(snake, SNAKE_PART_SIZE, ctx);
		drawFruit(fruitX, fruitY, FRUIT_SIZE, ctx); 
		snake[0][0] += 1; 
		if(running === true){
			window.requestAnimationFrame(loop);
		}
		else {
			console.log("bruh");
		}
	}); 
}

function drawSnake(snake, snakePartSize, ctx){
	snake.forEach(part => {
		ctx.fillStyle = "#FFF000"; 
		ctx.fillRect(part[0], part[1], snakePartSize, snakePartSize);  
	}); 
}

function drawFruit(fruitX, fruitY, fruitSize, ctx){
	ctx.fillStyle = "#FF0000"; 
	ctx.fillRect(fruitX, fruitY, fruitSize, fruitSize);  
}

main(); 
//ctx.fillStyle = "#FFF000"; 
//ctx.fillRect(0, 0, 5, 5);  
