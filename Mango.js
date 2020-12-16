
class MANGO{
  constructor(x, y, r) {
      var options = {
          'friction':100.0,
         //'density':0.5,
          isStatic: true
      }
     
      this.r = r;
      this.x = x;
      this.y = y;
      this.image = loadImage("mango.png");
     this.body = Bodies.circle(this.x, this.y,this.r, options);
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle)

      //ellipseMode(RADIUS);
      imageMode(CENTER);
      ellipseMode(CENTER);

      image(this.image, 0, 0,this.r,this.r);
      pop();
    }
}