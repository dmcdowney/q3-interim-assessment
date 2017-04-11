var newWidth = 70;
var newHeight = 170;

function setup(){
    createCanvas(600,400);
    background(66, 241, 244);
}

function draw(){
    strokeWeight(6);
    stroke(300);
    
    var x = 0;
    while(x<700){
        fill(104, 244, 66);
        rect(x, 300, 40, 40);
        x = x + 150
    }  
    
    for(var x = 0; x < 700; x = x + 150){
        fill(238, 66, 244);
    ellipse(x, 230, 40, 40);
    }
   
   var x = 0;
   while(x<500){
       fill(255,105,180);
       rect(x, 100, 50, 46);
       x = x + 150
   }
   
   for(var x = 0; x < 700; x = x + 150){
       fill(192,192,192);
       ellipse(x, 50, 50, 46);
       }
       
       if(mouseIsPressed){
           noStroke()
           fill(255,255,255);
           rect(mouseX,mouseY,newWidth,newHeight);
       }
}