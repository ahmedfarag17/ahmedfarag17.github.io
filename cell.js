function Cell(){
  this.pos = createVector(random(1,windowWidth*2),random(-windowHeight,windowHeight));
  this.r = random(1,3);
  this.c = color(255,255,255);
  this.vel = 0.5;

  this.move = function(){
    this.pos.y += this.vel;
  }

  this.show = function(){
    noStroke();
    fill(this.c);
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }

}
