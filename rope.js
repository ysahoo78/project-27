class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

   
    display(){
    strokeWeight(4);
    stroke("white")
    line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);    
        
    }
    
}