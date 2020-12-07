var wall ,thickness;
  var bullet,speed,weight,l;


function setup() {
  var canvas =  createCanvas(800,400);
  //canvas.shapeColor = color(80,80,80);
   
   speed=random(55,90);
   weight=random(400,1500);
   thickness=random(22,83);
 
  bullet =  createSprite(50,200,50,5);
  bullet.velocityX = speed ; 
  bullet.shapeColor=color(255);
 
  
  wall = createSprite(400,200,thickness,height/2);
  wall.shapeColor = color (80,80,80);
 }
 
 
 function draw() {
   background("black");  
   
   
   if(collided(bullet,wall)) {
       bullet.velocityX = 0 ;
       var damage = 0.5*weight*speed*speed /(thickness*thickness*thickness) ; 
       if(damage > 10 )
       {
         wall.shapeColor = color(255,0,0);
       }
       
       if(damage < 10 ) 
       {
         wall.shapeColor = color(0,255,0);
       }
     } 
   drawSprites();
 }

 function collided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}





