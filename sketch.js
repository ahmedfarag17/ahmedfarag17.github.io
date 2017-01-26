var cell = [];

function setup(){
  createCanvas(windowWidth-50, windowHeight);
  for(var i = 0; i<1000; i++){
    cell.push(new Cell());
  }
}

function draw(){
  clear();
  for(var i = 0; i<1000; i++){
    cell[i].move();
    cell[i].show();
    if(cell[i].pos.y >= windowHeight){
      cell[i].pos.y = -10;
    }
  }
}
