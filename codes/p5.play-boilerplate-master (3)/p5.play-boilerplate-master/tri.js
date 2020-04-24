class TRI {
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          isStatic :true
      }
      this.body = Bodies.circle(x, y,25, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var posk =this.body.position;
      fill(255);
      rectMode(CENTER);
      circle(posk.x, posk.y,25);
    }
  }