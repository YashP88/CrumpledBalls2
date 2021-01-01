class Dustbin {
constructor(x,y,width,height){
   var options={
       restitution:0.8,
       friction:1,
       density:1.0,
       isStatic:true
   }
   this.body=Bodies.rectangle(x,y,width,height,options);
   this.width=width;
   this.height=height;
  this.image=loadImage("dustbingreen.png")
  
   World.add(world,this.body);
}
display(){
   push();
   var pos=this.body.position;
   imageMode(CENTER);
   
   image(this.image,pos.x,pos.y,this.width,this.height);
   
   pop();
}
}