/* 1.Demoing var variable 

function checkName(){
	var myName ="joanna";
	console.log(myName);
}


var myName = "another name";

console.log(myName);

*/

// 2.Demoing let variable
/*
function checkName(){
	let myName = "Blue and Zorro";
	console.log(myName);	// this works because it's within scope or inside the same function it was defined
}

// this will cause an error because myName is out of scope. it is defined within the checkName() function
console.log(myName);

*/

// 3.Demoing constant
/*
const myName = "Lizzie";

function checkName(){
	console.log(myName);
}

console.log('here\'s my name again'+' '+myName );

 var myName = "gato"; // this is an error because constant variables cannot be changed
 */


//EXAMPLE 1 of Event
// Create a square when you click
/*
 function createPurpleCircle(){
 	const purpleCircle = document.createElement('div');
 	purpleCircle.className="purpleCircle";
 	document.body.appendChild(purpleCircle);
 }

 document.body.addEventListener('click', createPurpleCircle);


//EXAMPLE 2 of Event
 function changetoYellow(){
 	const updateSquares = document.querySelectorAll('div.purpleCircle');
 	for( const square of updateSquares ){
 		square.className="yellowSquare";
 	}

 	console.log(updateSquares);
 }

var yellowButton = document.querySelector('button');

yellowButton.addEventListener('click',changetoYellow);

*/


/*
//EXAMPLE 3A Toggle class using if/else
var paragraph = document.querySelector('p.paragraph');
let rainbow = document.querySelector('div#rainbow');
let dark = document.querySelector('div#dark');


function toogleClass(){

	let myBody = document.querySelector('body');

	if (paragraph.className === 'paragraph'){
		paragraph.className = 'rainbowClass';
	}else if(paragraph.className === 'rainbowClass'){
		paragraph.className ="dark";
	}else if(paragraph.className ==="dark"){
		paragraph.className = 'rainbowClass';
	}

	console.log(paragraph.className);
}

rainbow.addEventListener('click', toogleClass);
dark.addEventListener('click', toogleClass);
*/

/*
//EXAMPLE 3B Toggle between 3 classes
const modes = document.querySelectorAll('div.mode');

let rainbow = document.querySelector('div#rainbow');
let dark = document.querySelector('div#dark');
let regular = document.querySelector('div#regular');


dark.addEventListener('click', toggleClassDark);
rainbow.addEventListener('click', toggleClassRainbow);
regular.addEventListener('click', toggleClassRegular);

function toggleClassRainbow(){
	let myBody = document.querySelector('body');
	let value = rainbow.getAttribute('id');
	myBody.className = value;
}

function toggleClassDark(){
	let myBody = document.querySelector('body');
	let value = dark.getAttribute('id');
	myBody.className = value;
}

function toggleClassRegular(){
	let myBody = document.querySelector('body');
	let value = regular.getAttribute('id');
	myBody.className = value;
}
*/


//EXAMPLE 5 class attribute & Global Event Handler
/*
let catImage2 = document.querySelector('img');

catImage2.onclick= function(){
	let catSrc2 = catImage2.getAttribute('src');

	if(catSrc2==='assets/cat.jpg'){
		catImage2.setAttribute('src','assets/maru.jpg');
	}else{
		catImage2.setAttribute('src','assets/cat.jpg');
	}
}
*/

let catImage = document.querySelector('img');

catImage.onmouseenter = function(){

	catImage.setAttribute('src', 'assets/cat.jpg');
}

catImage.onmouseleave = function(){
	catImage.setAttribute('src', 'assets/maru.jpg');
}

