var image, drawButton, showButton;
var myJson = {id:1,distance:150,start:{x:245,y:100},finish:{x:301,y:34},img_url:"images/img_01.jpg"};

function draw() {
    drawButton.innerHTML = "xD";
    showButton.style.visibility = "hidden";
	var path = [];
	path.push(myJson.start);
	var paper = Raphael('paper', 8, 8, image.width, image.height);
	paper.line(250, 50, 50, 1500).attr({stroke:'red'});
	image.addEventListener("click", function(evt){
		x = evt.clientX;
		y = evt.clientY;
		paper.line(x,y,path[path.length -1].x, path[path.length -1].y)
		path.push({x:x,y:y});
		console.log(path);
		
		//window.alert(x + " " + y);
	
	}, false)
    
}
function show() {
    showButton.innerHTML = "xDD";  
    drawButton.style.visibility = "hidden";
}
function init(){
    image = document.getElementById("map-image");
    drawButton = document.getElementById("button-draw");
    showButton = document.getElementById("button-show");
	image.src = myJson.img_url;
	
	
}

Raphael.fn.line = function(startX, startY, endX, endY){
    return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY);
};