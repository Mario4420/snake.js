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
	const SNAKE_DIRS = {
  		UP: 0,
  		DOWN: 1,
  		LEFT: 2,
  		RIGHT: 3
	}; 
	let snakeCurDir = undefined; 

	const FRUIT_SIZE = 40; 
	let fruitX = Math.random() * (canvas.width - FRUIT_SIZE); 
	let fruitY = Math.random() * (canvas.height - FRUIT_SIZE); 

	document.addEventListener('keydown', event => {
		if(event.keyCode == 87){ 
			snakeCurDir = snakeDirs.UP
		}
		if(event.keyCode == 83){ 
			snakeCurDir = snakeDirs.DOWN
		}
		if(event.keyCode == 65){ 
			snakeCurDir = snakeDirs.LEFT 
		}
		if(event.keyCode == 68){
			snakeCurDir = snakeDirs.RIGHT
		}
	});

	window.requestAnimationFrame(function loop(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawSnake(snake, SNAKE_PART_SIZE, ctx);
		drawFruit(fruitX, fruitY, FRUIT_SIZE, ctx); 
		console.log(snakeCurDir); 
		if(running === true){
			window.requestAnimationFrame(loop);
		}
		else {
			console.log("stop");
		}
	}); 
}

function drawSnake(snake, snakePartSize, ctx){
	snake.forEach(part => {
		ctx.fillStyle = "#FFF000"; 
		ctx.fillRect(part[0], part[1], snakePartSize, snakePartSize);  
	}); 
}

function snakeMovement(snake, snakeDirs, snakeCurDir, snakeSpeed){
	if(snakeCurDir == snakeDirs.UP){
			
	}
	if(snakeCurDir == snakeDirs.DOWN){
				
	}
	if(snakeCurDir == snakeDirs.LEFT){
					
	}
	if(snakeCurDir == snakeDirs.RIGHT){
				
	}
	return snake
}

function drawFruit(fruitX, fruitY, fruitSize, ctx){
	ctx.fillStyle = "#FF0000"; 
	ctx.fillRect(fruitX, fruitY, fruitSize, fruitSize);  
}

main(); 
//ctx.fillStyle = "#FFF000"; 
//ctx.fillRect(0, 0, 5, 5);  
