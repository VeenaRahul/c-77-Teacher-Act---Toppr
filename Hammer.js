class Hammer{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w;
        this.h = h;
        this.image = loadImage('sprites/hammer.png');
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        // pos.x = mouseX;
        // pos.y = mouseY;

        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop ();
    }
}