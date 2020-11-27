class Paper {
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
           this.paper =Matter.Bodies.circle(200,200,30,options)
           
    }
    display() {
        ellipseMode(RADIUS)
        ellipse(this.paper.position.x,this.paper.position.y,20,20)
        
    }
}