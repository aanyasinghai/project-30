class Box{
  constructor(x,y,width,height){
      var opttions = {
          'isStatic':false,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world,this.body);
  }

  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("pink");
      if(this.body.speed < 3){
        rect(0,0,this.width,this.height);
      }
      else{
        World.remove(world,this.body);
        this.visibility = this.visibility - 5;
        //rect(0,0,this.width,this.height);
      }
      pop();
  
    }
};