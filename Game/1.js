let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let snake = [];
let snakeSize = 6;
let foodX;
let foodY;
let toMove;
let timeAdd = 150;

function drawTable() {

    for (let i = 0; i < 60; i++) {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(15 * i, 0);
        ctx.lineTo(15 * i, 600);
        ctx.stroke();
    }

    for (let j = 0; j < 40; j++) {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, 15 * j);
        ctx.lineTo(900, 15 * j);
        ctx.stroke();
    }


    for (let k = 0; k < snakeSize; k++) {
        ctx.fillStyle = "black";
        if (k === snakeSize - 1) {
            ctx.fillStyle = "red";
        }
        ctx.fillRect(snake[k].x, snake[k].y, 15, 15);

    }

    ctx.fillStyle = "green";
    ctx.fillRect(foodX, foodY, 15, 15);
}


function start() {

    for (let k = 0; k < snakeSize; k++) {
        snake[k] = {x: 0, y: 0};
    }

    drawTable();
    addFood();

}

function addFood() {

    foodX = Math.floor(Math.random() * 60) * 15;
    foodY = Math.floor(Math.random() * 40) * 15;

    for (let k = 0; k < snake.length; k++) {
        if (foodX === snake[k].x && foodY === snake[k].y) {
            addFood();
        }
    }
}

function move() {

    document.onkeydown = function (el) {
        switch (el.keyCode) {
            case 37:
                toMove = 1;
                break;
            case 38:
                toMove = 2;
                break;
            case 39:
                toMove = 3;
                break;
            case 40:
                toMove = 4;
                break;
        }
    }

    switch (toMove) {
        case 1:
            snake.push({x: snake[snakeSize - 1].x - 15, y: snake[snakeSize - 1].y});
            break;
        case 2:
            snake.push({x: snake[snakeSize - 1].x, y: snake[snakeSize - 1].y - 15});
            break;
        case 3:
            snake.push({x: snake[snakeSize - 1].x + 15, y: snake[snakeSize - 1].y});
            break;
        case 4:
            snake.push({x: snake[snakeSize - 1].x, y: snake[snakeSize - 1].y + 15});
            break;
        default:
            snake.push({x: snake[snakeSize - 1].x + 15, y: snake[snakeSize - 1].y});
    }
    snake.shift();
    ctx.clearRect(0, 0, 900, 600);
    isEat();
    isDead();
    drawTable();
}


function isEat() {
    if (snake[snakeSize - 1].x === foodX && snake[snakeSize - 1].y === foodY) {
        addFood();
        snakeSize++;
        snake.unshift({x: -15, y: -15});
        timeAdd -= 20;
        Speed();
    }

}

function isDead() {
    if (snake[snakeSize - 1].x > 885 || snake[snakeSize - 1].y > 585 || snake[snakeSize - 1].x < 0 || snake[snakeSize - 1].y < 0) {
        location.reload();
    }
    for (let i = 0; i < snakeSize - 2; i++) {
        if (snake[snakeSize - 1].x === snake[i].x && snake[snakeSize - 1].y === snake[i].y) {
            location.reload();
        }
    }
}

function Speed() {
    setInterval(move, timeAdd);
}


window.onload = function () {
    start();
    Speed();
    drawTable();
}



