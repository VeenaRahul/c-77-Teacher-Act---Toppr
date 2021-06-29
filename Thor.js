class Thor{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        this.w = w;
        this.h = h;
        this.image = loadImage('sprites/thor.png');
        Composite.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        // pos.x = mouseX;
        // pos.y = mouseY;

        push ();
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.w, this.h);
        pop ();
    }
}