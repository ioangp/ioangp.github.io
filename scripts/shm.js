const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

setInterval(Step, 10);

function Start(){
	angle = 0;
	A = document.getElementById("a").value;
	omega = document.getElementById("omega").value;
}

var angle = 0; // radians
var A = 100;
var omega = 5;

function Step(e, s) {
	angle += Math.PI / 240
	if(angle > 2 * Math.PI){
		angle = 0
	}
	
	var y = A * Math.sin(omega * angle)
	
	// display
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2 + y, 20, 0, 2 * Math.PI);
	ctx.fillStyle = 'red';
	ctx.fill();
}