function Cat(name,weight,speed)  {
    this.name= name;
    this.weight =weight;
    this.speed = speed<50?speed:50;;
    this.call =function() {
        console.log("meo,meo");
    }

    this.catchMouse = function(mouse) {
        if (this.speed >= mouse.getSpeedMouse())  {
          
        }
    } 
}