class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,30,
      30);
      this.image = loadImage("sprites/r.jpg");
  }
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    fill("black");
    super.display();
    text("plz. press space to second change",290,370);
    textSize(20);
    
  }
}