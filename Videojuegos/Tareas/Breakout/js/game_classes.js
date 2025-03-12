/*
    Collection of clasees that will be used in the games 

    Julio César Rodríguez Figueroa
    25/02/2025
*/

class Vec
{
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
    }

    plus(other)
    {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other)
    {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    times(escalar)
    {
        return new Vec(this.x * escalar, this.y * escalar)
    }

    magnitude()
    {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

}

class GameObject
{
    constructor(position, width, height, color, type)
    {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.type = type;
    }

    draw(ctx)
    {  
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    // Template para que los objetos de clases que ereden esta clase puedan tener update
    update()
    {

    }
}

function boxOverlap(obj1, obj2)
{
    return obj1.position.x + obj1.width > obj2.position.x && 
    obj1.position.x < obj2.position.x + obj2.width && 
    obj1.position.y + obj1.height > obj2.position.y && 
    obj1.position.y < obj2.position.y + obj2. height;
}