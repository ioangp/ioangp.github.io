const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var G = 0.1;

// sun
var s_mass = 100;
var s_radius = 40;
var s_pos = [canvas.width/2, canvas.height/2];

// earth
var e_mass = 1;
var e_radius = 15;
var e_pos = [canvas.width/2 - 200, canvas.height/2 + 3];
var e_velocity = [0, -3];

var motionTrailLength = 200;
var positions = [];

setInterval(Step, 10);

var points = []

function Start(){
	s_mass = document.getElementById('sm').value;
	e_mass = document.getElementById('em').value;
	e_velocity[0] = Number(document.getElementById('ex').value);
	e_velocity[1] = Number(document.getElementById('ey').value);
	
	G = Number(document.getElementById('g').value);
	e_radius = Number(document.getElementById('es').value);
	s_radius = Number(document.getElementById('ss').value);
	
	motionTrailLength = Number(document.getElementById('tl').value) * 10;
	
	s_pos = [canvas.width/2, canvas.height/2];
	e_pos = [canvas.width/2 - 200, canvas.height/2 + 3];
}

function storeLastPosition(xPos, yPos) {
	positions.push({
		x: xPos,
		y: yPos
	});

	if (positions.length > motionTrailLength) {
		positions.shift();
	}
}

function Step(e, s) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	var e_force = [0, 0]
	const r = Math.sqrt(Math.pow(s_pos[0] - e_pos[0], 2) + Math.pow(s_pos[1] - e_pos[1], 2));
	const x = (s_pos[0] - e_pos[0]) / r;
	const y = (s_pos[1] - e_pos[1]) / r;
	
	e_force[0] = G * ((e_mass * s_mass) / r) * x;
	e_force[1] = G * ((e_mass * s_mass) / r) * y;
	
	var e_acc = [0, 0]
	e_acc[0] = e_force[0] / e_mass;
	e_acc[1] = e_force[1] / e_mass;
	
	e_velocity[0] += e_acc[0];
	e_velocity[1] += e_acc[1];
	
	var speed = Math.sqrt(Math.pow(e_velocity[0], 2) + Math.pow(e_velocity[1], 2));
	document.getElementById('speed').innerText = "Speed = " + speed.toFixed(2);
	
	// move
	e_pos[0] += e_velocity[0];
	e_pos[1] += e_velocity[1];
	
	storeLastPosition(e_pos[0], e_pos[1]);
	for (var i = 0; i < positions.length; i++) {
		if(motionTrailLength == 0){
			break;
		}
		
		ctx.beginPath();
		ctx.arc(positions[i].x, positions[i].y, e_radius / 30, 0, 2 * Math.PI, true);
		ctx.fillStyle = "black";
		ctx.fill();
	}
	
	// sun
	ctx.beginPath();
	ctx.arc(s_pos[0], s_pos[1], s_radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	ctx.closePath();
	
	// earth
	ctx.beginPath();
	ctx.arc(e_pos[0], e_pos[1], e_radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'blue';
	ctx.fill();
	ctx.closePath();

	// arrows
	ctx.beginPath();
	ctx.strokeStyle = 'orange';
	ctx.moveTo(e_pos[0], e_pos[1]);
	ctx.lineTo(e_pos[0] + (e_force[0]*1000), e_pos[1] + (e_force[1]*1000));
	ctx.stroke();
	ctx.fillStyle = 'orange';
	ctx.font = "18px Times New Roman";
	ctx.fillText("F", e_pos[0] + (e_force[0]*1000) + 5, e_pos[1] + (e_force[1]*1000) + 5);
	ctx.closePath();

	ctx.beginPath();
	ctx.strokeStyle = 'cyan';
	ctx.moveTo(e_pos[0], e_pos[1]);
	ctx.lineTo(e_pos[0] + (e_velocity[0]*10), e_pos[1] + (e_velocity[1]*10));
	console.log(e_velocity)
	ctx.stroke();
	ctx.fillStyle = 'cyan';
	ctx.fillText("v", e_pos[0] + (e_velocity[0]*10) + 5, e_pos[1] + (e_velocity[1]*10) + 5);
	ctx.closePath();
}
