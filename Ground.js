class Ground{
    constructor(){
      //Create a Ground
	this.ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

    }
   display(){
       
   }
}