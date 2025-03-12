/*
    Implementación del juego pong

    Julio César Rodríguez Figueroa
    25/05/2025
*/

"use strict";

// Global variables
const canvasWidth = 750;
const canvasHeight = 600;

let oldTime;
let vidas = 3; // Contador de vidads inciando en 3
let puntuacion = 0; // Ladrillos rotos
let initialSpeed = 0.5;
const paddleVelocity = 1; // Velocidad que tendrá la paleta del jugador
let powerUp = null; // Para el power-up de vida extra

// Context of the Canvas
let ctx;

// Classes del juego de breakout
class Ball extends GameObject
{
    constructor(position, width, height, color, type, velocity)
    {
        super(position, width, height, color, "ball");
        this.reset();
    }

    update(deltaTime)
    {
        this.position = this.position.plus(this.velocity.times(deltaTime));
    }
    
    initVelocity()
    {
        this.inPlay = true;
        let angle = Math.random() * (Math.PI / 2) - (Math.PI / 4);
        this.velocity = new Vec(Math.cos(angle), Math.sin(angle)).times(initialSpeed);
        this.velocity.y *= (Math.random() < 0.5) ? 1 : -1;
    }

    reset() {
        this.inPlay = false;
        this.position = new Vec(canvasWidth / 2, canvasHeight / 2);
        this.velocity = new Vec(0, 0);
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
        if (this.position.x < 0) // Limitar la posición de izquierda a derecha 
        {
            this.position.x = 0;
        }
        else if (this.position.x + this.width > canvasWidth)
        {
            this.position.x = canvasWidth - this.width;
        }
    }
}

class Ladrillo extends GameObject
{
    constructor(position, width, height, color) 
    {
        super(position, width, height, color, "ladrillo");
        this.status = 1; // 1 = activo, 0 = destruido
    }
}

// Clase de obejtos Power-Up
class PowerUp extends GameObject {
    constructor(position, width, height, color, type, velocity) {
        super(position, width, height, color, "powerup");
        this.type = type; // En caso de que haya más tipos de power up en un futuro.
        this.velocity = velocity; // Velocidad a la que cae
        this.active = true;
    }

    update(deltaTime) {
        this.position = this.position.plus(this.velocity.times(deltaTime)); // Para el movimiento de caida.
    }
}

// Varables para la creación de los cuadros de breakout
const ladrillosFilas = 5; // Varible que cuenta cuantas filas habrá de ladrillos
const ladrillosColumnas = 10; // Varaible que cuenta cuantas columnas habrá de la ladrillos

let ladrillos = []; // Arreglo que contendrá los ladrilos a romper

function crearLadrillos() // Función que creará los ladrillos a romper
{ 
    ladrillos = []; // Limpia el arreglo para tener un arreglo vacío
    for (let i = 0; i < ladrillosColumnas; i++) 
    {
        ladrillos[i] = []; // Crea un arreglo para cada columna que hayamos indicado en la variable 
        for (let j = 0; j < ladrillosFilas; j++) 
        {
            let ladrilloX = (i * (60 + 10)) + 30; // Da la coordenada X de cada ladrillo en ca´da fila correspondiente
            let ladrilloY = (j * (20 + 10)) + 30;
            // Creación de los objetos con la clase de GameObject
            ladrillos[i][j] = new Ladrillo(new Vec(ladrilloX, ladrilloY),  60, 20, "white");
        }
    }
}

// Creación de power-ups

// Creación de los objetos para Breakout
const box = new Ball(new Vec(canvasWidth / 2, canvasHeight / 2), 20, 20, "#78dfff");
const playerPaddle = new Paddle(new Vec(canvasWidth / 2, canvasHeight * (3/4)), 100, 20, "white");
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
    crearLadrillos();
    drawScene(0);
}

function createEventListeners()
{
    window.addEventListener('keydown', (event) =>
    {
        if (event.key == 'a' || event.key == 'A' || event.key == 'ArrowLeft')
        {
            playerPaddle.velocity = new Vec(-paddleVelocity, 0);
        }
        else if (event.key == 'd'|| event.key == 'D' || event.key == 'ArrowRight')
        {
            playerPaddle.velocity = new Vec(paddleVelocity, 0);
        }
    });


    window.addEventListener('keyup', (event) =>
    {
        if (event.key == 'a' || event.key == 'A' || event.key == 'ArrowLeft')
        {
            playerPaddle.velocity = new Vec(0, 0);
        }
        else if (event.key == 'd' || event.key == 'D' || event.key == 'ArrowRight')
        {
            playerPaddle.velocity  = new Vec(0, 0);
        }
        if (event.key == ' ' && !box.inPlay) {
            box.initVelocity();
        }
        if (event.key == 'r' || event.key == 'R')
        {
            document.location.reload(); // Comando usado para refrescar la página web 
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

    // Dibujar los ladrillos en el canvas
    for (let i = 0; i < ladrillosColumnas; i++) 
    {
        for (let j = 0; j < ladrillosFilas; j++) 
        {
            let ladrillo = ladrillos[i][j]; // Variable que guarda cada ladrillo que se dibuja
            if (ladrillo.status == 1) {
                ladrillo.draw(ctx);
                if (boxOverlap(box, ladrillo)) // Si la bola colisiona con los ladrillos.
                {
                    box.velocity.y *= -1; // Invertir la dirección vertical de la bola
                    puntuacion += 1; // Aumenta la puntuación del jugador
                    ladrillo.status = 0; // El ladrillo se destruye
                    if (!powerUp && Math.random() < 0.2) // El power-up tiene 20% de chance de aparecer al romper un ladrillo
                    {
                        let puX = ladrillo.position.x + ladrillo.width / 2 - 10;
                        let puY = ladrillo.position.y + ladrillo.height / 2 - 10;
                        powerUp = new PowerUp(new Vec(puX, puY), 20, 20, "#8eec3b", "extraLife", new Vec(0, 0.1));
                    }
                }
            }
        }
    }

    // Actualizar y dibujar el power-up, si existe
    if (powerUp) {
        powerUp.update(deltaTime);
        powerUp.draw(ctx);
        if (boxOverlap(powerUp, playerPaddle)) // Si el jugador toca el power-up con la paleta
        {
            vidas++;
            powerUp = null;
        } 
        else if (boxOverlap(powerUp, botBarrier)) // Si el power-up toca el borde de abajo
        {
            powerUp = null;
        }
    }

    box.draw(ctx);
    playerPaddle.draw(ctx);
    leftBarrier.draw(ctx);
    rightBarrier.draw(ctx);
    upBarrier.draw(ctx);
    botBarrier.draw(ctx);

    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + puntuacion, canvasWidth - 72, 20);
    ctx.fillText("Vidas: " + vidas, 12, 20);

    // Update the properties of the object
    if (box.inPlay == true)
    {
        box.update(deltaTime);  
    }
    playerPaddle.update(deltaTime);
    
    if (boxOverlap(box, playerPaddle))
    {
        box.velocity.y *= -1;
    }
    if (boxOverlap(box, botBarrier))
    {
        vidas --;
        if (vidas > 0) 
        {
            box.inPlay = false;
            box.reset();
            playerPaddle.position = new Vec(canvasWidth / 2, canvasHeight * (3/4));
        } 
        else 
        {
            ctx.font = "24px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Game Over!", canvasWidth / 2 - 70, canvasHeight / 2);
            ctx.fillText("Oprima 'R' para jugar de nuevo", canvasWidth / 2 - 160, canvasHeight / 2 + 30);
            return;
        }
    }
    if (boxOverlap(box, upBarrier))
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

    // Verificar si ya no quedan ladrillos activos
    let todosRotos = true;
    for (let i = 0; i < ladrillosColumnas; i++) 
    {
        for (let j = 0; j < ladrillosFilas; j++) 
        {
            if (ladrillos[i][j].status == 1) // Si hay algún ladrillo activo en pantalla
            {
                todosRotos = false; 
                break;
            }
        }
    }

    if (todosRotos) // Detiene el juego, indicando que el jugador ganó
    {
        ctx.font = "24px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Has ganado!", canvasWidth / 2 - 70, canvasHeight / 2);
        ctx.fillText("Oprima 'R' para jugar de nuevo", canvasWidth / 2 - 160, canvasHeight / 2 + 30);
        return; 
    }


    oldTime = newTime;

    requestAnimationFrame(drawScene);
}