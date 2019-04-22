var count = 1;
var images = ["images/HTML5a.jpg", 
              "images/HTML5b.jpg", 
              "images/HTML5c.jpg", 
              "images/HTML5d.jpg"];

function codigo(){
    document.getElementById("baseImg").src=images[count];
    count = (count+1)%4;
}
