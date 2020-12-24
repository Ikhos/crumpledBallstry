class Paper{
    constructor(x, y, r){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world,this.body);
    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4);
        fill(255,0,255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
    