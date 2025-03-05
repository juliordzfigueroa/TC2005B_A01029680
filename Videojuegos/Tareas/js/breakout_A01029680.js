/*
    Implementación del juego pong

    Julio César Rodríguez Figueroa
    25/05/2025
*/

"use strict";

// Global variables
const canvasWidth = 800;
const canvasHeight = 600;

let oldTime;
let vidas = 3; // Contador de vidads inciando en 3
// let ballSpeedIncrease = 1.2;
let initialSpeed = 0.5;
let inPlay = false;
const paddleVelocity = 1;

// Context of the Canvas
let ctx;

// Classes del juego de pong
class Ball extends GameObject
{
    constructor(position, width, height, color, type, velocity)
    {
        super(position, width, height, color, "ball");
        this.velocity = new Vec(0, 0.5);
    }

    update(deltaTime)
    {
        this.position = this.position.plus(this.velocity.times(deltaTime));
    }
    
    initVelocity()
    {
        this.position = new Vec(canvasWidth / 2, canvasHeight / 2);
        let angle = Math.random() * Math.PI/2 - (Math.PI/4);
        let direction = Math.random() < 0.5 ? -1 : 1;
        box.velocity = new Vec(Math.cos(angle) * direction, Math.sin(angle)).times(initialSpeed);
    }

}

class Paddle extends GameObject
{
    constructor(position, width, height, color, velocity)
    {
        super(position, width, height, color, "paddle");
        this.velocity = new Vec (0, 0);
    }

    update(deltaTime)
    {
        this.position = this.position.plus(this.velocity.times(deltaTime));
        if (this.position.y < 0)
        {
            this.position.y = 0;
        }
        else if (this.position.y + this.height > canvasHeight)
        {
            this.position.y = canvasHeight - this.height;
        }
    }
}

// Creación de los objetos para pong
const box = new Ball(new Vec(canvasWidth / 2, canvasHeight / 2), 20, 20, "red");
const playerPaddle = new Paddle(new Vec(canvasWidth / 2, canvasHeight * (3/4)), 100, 20, "blue");
const leftBarrier = new Paddle(new Vec(0, 0), 10, canvasHeight, "black");
const rightBarrier = new Paddle(new Vec(canvasWidth - 10, 0), 10, canvasHeight, "black");
const upBarrier = new Paddle(new Vec(0, 0), canvasWidth, 10, "black");
const botBarrier = new Paddle(new Vec(0, canvasHeight - 10), canvasWidth, 10, "black");


function main() {
    // Get a reference to the object with id 'canvas' in the page
    const canvas = document.getElementById('canvas');
    // Resize the element
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // Get the context for drawing in 2D
    ctx = canvas.getContext('2d');

    createEventListeners();

    drawScene(0);
}

function createEventListeners()
{
    window.addEventListener('keydown', (event) =>
    {
        if (event.key == ' ' && !box.inPlay)
        {
            inPlay = true;
        }
        else if (event.key == 'a')
        {
            playerPaddle.velocity = new Vec(-paddleVelocity, 0);
        }
        else if (event.key == 'd')
        {
            playerPaddle.velocity = new Vec(paddleVelocity, 0);
        }
    });


    window.addEventListener('keyup', (event) =>
    {
        if (event.key == 'a')
        {
            playerPaddle.velocity = new Vec(0, 0);
        }
        else if (event.key == 'd')
        {
            playerPaddle.velocity  = new Vec(0, 0);
        }
    });
}

function drawScene(newTime) {
    if (oldTime == undefined)
    {
        oldTime = newTime;
    }
    let deltaTime = newTime - oldTime;
    // Clean the canvas so we can draw everything again
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    box.draw(ctx);
    playerPaddle.draw(ctx);
    leftBarrier.draw(ctx);
    rightBarrier.draw(ctx);
    upBarrier.draw(ctx);
    botBarrier.draw(ctx);

    // Update the properties of the object
    if (inPlay == true)
    {
        box.update(deltaTime);  
    }
    playerPaddle.update(deltaTime);
    
    if (boxOverlap(box, playerPaddle))
    {
        box.velocity.y *= -1;
    }
    if (boxOverlap(box, botBarrier) || boxOverlap(box, upBarrier))
    {
        box.velocity.y *= -1;
    }
    if (boxOverlap(box, leftBarrier))
    {
        box.velocity.x *= -1;
    }
    if (boxOverlap(box, rightBarrier))
    { 
        box.velocity.x *= -1;
    }

    oldTime = newTime;

    requestAnimationFrame(drawScene);
}