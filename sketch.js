let canvas;
let next;

let p;
let img;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.position(windowWidth / 2, 5);
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	p = select('#text');
	p.position(windowWidth / 6, windowHeight / 5);
	p.style('color','white');
	p.style('font-family','courier');
	p.style('font-size','2em');

	img = select('#img');
	img.position(windowWidth / 3, windowHeight / 2);
	img.style('max-width', '100%');
	img.style('max-height', '100%');
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);
}