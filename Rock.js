class ROCK{
  constructor(x, y, r) {
      var options = {
          'friction':1.0,
          'density':10.0,
          isStatic: false
      }
     
      this.r = r;
      this.x = x;
      this.y = y;
      this.image = loadImage("stone.png");
      this.body = Bodies.circle(this.x, this.y,this.r, options);
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image, 0, 0,this.r,this.r);
      pop();
    }
}