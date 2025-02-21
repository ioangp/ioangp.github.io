const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var G = 0.1;

// sun
var s_mass = 100;
var s_radius = 40;
var s_pos = [canvas.width/2, canvas.height/2];

// earth
var e_mass = 1;
var e_radius = 25;
var e_pos = [canvas.width/2 - 200, canvas.height/2 + 3];
var e_velocity = [0, -3];

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
	
	s_pos = [canvas.width/2, canvas.height/2];
	e_pos = [canvas.width/2 - 200, canvas.height/2 + 3];
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
	
	// move
	e_pos[0] += e_velocity[0];
	e_pos[1] += e_velocity[1];
	
	// sun
	ctx.beginPath();
	ctx.arc(s_pos[0], s_pos[1], s_radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'yellow';
	ctx.fill();
	
	// earth
	ctx.beginPath();
	ctx.arc(e_pos[0], e_pos[1], e_radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'green';
	ctx.fill();
}