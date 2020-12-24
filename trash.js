class Trash{
    constructor(x, y, height, width){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        
        World.add(world,this.body);
    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill(255,0,255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
    