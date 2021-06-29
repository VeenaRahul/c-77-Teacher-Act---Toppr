class Chain{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.01,
            length: 50
        }
        this.body = Constraint.create(options);
        Composite.add(world, this.body);
    }

    fly(){
        this.body.bodyB = null
    }

    display(){
        if(this.body.bodyB){
            var pointA = this.body.pointA;
            var pointB = this.body.bodyB.position;

            stroke ('yellow');
            strokeWeight(5);
            line (pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}