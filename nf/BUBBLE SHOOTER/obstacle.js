function Obstacle(pos,r){
  if(pos){
      this.pis = pos.copy();
  }else{
    this.pos = createVector(random(width),random(height));
  }

      this.vel = p5.Vector.random2D();
    this.r = 50;
      this.update = function(){
          this.pos.add(this.vel);
      }
     this.render = function(){
       push();
       stroke(255);
       noFill();
        translate(this.pos.x,this.pos.y);
        ellipse(0,0,random(15,30));
        
        pop();
     }
      this.breakup = function(){
          var newOb = [];
          newOb[0] = new Obstacle(this.pos);
          newOb[1] = new Obstacle(this.pos);
          return newOb;
      }

     this.edges = function(){
        if(this.pos.x>width + this.r){
          this.pos.x = - this.r;
        }
        else if(this.pos.x<-this.r){
           this.pos.x=width+this.r;
        }
    
        if(this.pos.y>height + this.r){
          this.pos.y = - this.r;
        }
        else if(this.pos.y<-this.r){
           this.pos.y=height+this.r;
        }
      }
      
}