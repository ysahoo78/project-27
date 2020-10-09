class Bob{
    constructor(x,y, r){
        var options = {
            
            restitution : 1.2,
            
            density : 0.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        
        this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
	    World.add(world, this.body);

    }
    display() {
        var paperpos = this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();

    }
        

    

}

