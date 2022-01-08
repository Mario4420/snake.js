function main(){
	let canvas = document.getElementById("canvas"); 
	canvas.width = window.innerWidth * 0.75; 
	canvas.height = window.innerHeight * 0.75; 
	canvas.style.background = "#000"; 
	let ctx = canvas.getContext("2d"); 

	let running = true; 
	let score = 0; 

	const SNAKE_PART_SIZE = 40; 
	let snakeSpeed = 5;  
	let snake = [[75, 75]]; 
	const SNAKE_DIRS = {
  		UP: 0,
  		DOWN: 1,
  		LEFT: 2,
  		RIGHT: 3
	}; 
	let snakeCurDir = undefined; 

	const FRUIT_SIZE = 40; 
	[fruitX, fruitY] = generateFruitPos(FRUIT_SIZE); 

	document.addEventListener('keydown', event => {
		if(event.keyCode == 87){ 
			snakeCurDir = SNAKE_DIRS.UP;
		}
		if(event.keyCode == 83){ 
			snakeCurDir = SNAKE_DIRS.DOWN;
		}
		if(event.keyCode == 65){ 
			snakeCurDir = SNAKE_DIRS.LEFT;
		}
		if(event.keyCode == 68){
			snakeCurDir = SNAKE_DIRS.RIGHT;
		}
	});

	window.requestAnimationFrame(function loop(){
		running = screenCollisions(snake, SNAKE_PART_SIZE, canvas); 
		snakeMovement(snake, SNAKE_DIRS, snakeCurDir, snakeSpeed); 
		if(snakeFruitCollision(snake, SNAKE_PART_SIZE, fruitX, fruitY, FRUIT_SIZE)){
			score++; 
			// array destructuring
			[fruitX, fruitY] = generateFruitPos(FRUIT_SIZE); 
			snakeSpeed++; 
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawSnake(snake, SNAKE_PART_SIZE, ctx); 
		drawFruit(fruitX, fruitY, FRUIT_SIZE, ctx); 
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
		return snake[0][1] -= snakeSpeed; 
	}
	if(snakeCurDir == snakeDirs.DOWN){
		return snake[0][1] += snakeSpeed; 
	}
	if(snakeCurDir == snakeDirs.LEFT){
		return snake[0][0] -= snakeSpeed; 
	}
	if(snakeCurDir == snakeDirs.RIGHT){
		return snake[0][0] += snakeSpeed; 
	}
	return snake
}

function drawFruit(fruitX, fruitY, fruitSize, ctx){
	ctx.fillStyle = "#FF0000"; 
	ctx.fillRect(fruitX, fruitY, fruitSize, fruitSize);  
}

function generateFruitPos(fruitSize){
	return [
		Math.random() * (canvas.width - fruitSize), 
		Math.random() * (canvas.height - fruitSize)
	]; 
}

function screenCollisions(snake, snakePartSize, canvas){		
	if(snake[0][0] >= canvas.width-snakePartSize || snake[0][0] <= 0){
		return false; 
	}
	if(snake[0][1] >= canvas.height-snakePartSize || snake[0][1] <= 0){
		return false; 
	}
	return true; 
}

function snakeFruitCollision(snake, snakeHeadSize, fruitX, fruitY, fruitSize){
	let snakeX = snake[0][0]; 
	let snakeY = snake[0][1]; 
	if(snakeX + snakeHeadSize >= fruitX &&
	   snakeX <= fruitX + fruitSize &&
	   snakeY + snakeHeadSize >= fruitY &&
	   snakeY <= fruitY + fruitSize){ 
		return true;
	}
	return false; 
}

main(); 
//ctx.fillStyle = "#FFF000"; 
//ctx.fillRect(0, 0, 5, 5);  
