const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = { x: 100, y: 100 };

document.addEventListener('keydown', changeDirection);

function gameLoop() {
    update();
    draw();
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    } else {
        snake.pop();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, 20, 20));
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

function changeDirection(event) {
    const { key } = event;
    if (key === 'ArrowUp' && direction.y === 0) {
        direction = { x: 0, y: -20 };
    } else if (key === 'ArrowDown' && direction.y === 0) {
        direction = { x: 0, y: 20 };
    } else if (key === 'ArrowLeft' && direction.x === 0) {
        direction = { x: -20, y: 0 };
    } else if (key === 'ArrowRight' && direction.x === 0) {
        direction = { x: 20, y: 0 };
    }
}

setInterval(gameLoop, 100);
