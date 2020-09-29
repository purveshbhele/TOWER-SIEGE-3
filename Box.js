class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.visiblity=105;
    this.image = loadImage("sprites/b.jpg");
  }
  display(){
    if(this.body.speed<3){
super.display();

    }
    else{
World.remove(world,this.body)
push();

this.visiblity=this.visiblity-5;
tint(1055,this.visiblity);

 image(this.image,this.body.position.x,this.body.position.y,50,50)
 pop();
    }

  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }

};
