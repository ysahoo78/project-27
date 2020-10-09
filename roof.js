class Roof{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(375, 200, 300, 10 , options);
        this.width = 550;
        this.height = 10;
        World.add(world, this.body); 

    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }

}

