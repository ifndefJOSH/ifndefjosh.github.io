
var i = 0;
var helloWorld = 'Hello World!';
var speed = 200;

function typeWriter() {
	if (i < helloWorld.length) {
		document.getElementById("hello-world").innerHTML += helloWorld.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

/**
* This script lets us monitor the window size and reset the navbar if it's larger than 800px
* */
window.addEventListener('resize', function(event) {
	console.log(screen.width);
	if (screen.width > 850) {
		console.log("Setting navbar to normal full-width");
		let elements = document.getElementsByClassName("navbutton");
		console.log(elements);
		Array.prototype.forEach.call(elements, e => e.style.display = "block");
		document.getElementById("navbar").style.display = "block";
		document.getElementById("openbutton").style.display = "none";
		document.getElementById("closebutton").style.display = "none";
	}
	else {
		closeNav();
	}
}, true);
window.onload = function () {
	const toShowBtt = 50;
	const backToTopButton = document.getElementById("to-top");

	const scrollContainer = () => {
		return document.documentElement || document.body;
	};

	window.onscroll = function doScrollButton() {
		if (document.body.scrollTop > toShowBtt) {
			console.log("Btt Button is shown");
			backToTopButton.style.display = "block";
		}
		else {
			console.log("Btt Button is hidden");
			backToTopButton.style.display = "none";
		}
	}
	// Disable the no-js message if JS is enabled
	console.log("JavaScript appears to be enabled. Hiding the js-disabled div");
	document.getElementById('js-disabled').display = "none";
	document.getElementById('js-disabled').innerHTML = "";
	typeWriter();
}
/**
 * This function opens the navbar when the screen is less than 800px
 * */
function openNav() {
	console.log("Opening navbar");
	let elements = document.getElementsByClassName("navbutton");
	console.log(elements);
	// This little "=>" operator is the coolest JavaScript thing ever
	Array.prototype.forEach.call(elements, e => e.style.display = "block");
	document.getElementById("closebutton").style.display = "block";
	document.getElementById("openbutton").style.display = "none";
	document.getElementById("navbar").style.display = "block";
}
/**
 * This function closes the navbar when the screen is less than 800px
 * */
function closeNav() {
	console.log("Closing navbar");
	let elements = document.getElementsByClassName("navbutton");
	console.log(elements);
	Array.prototype.forEach.call(elements, e => e.style.display = "none");
	document.getElementById("closebutton").style.display = "none";
	document.getElementById("openbutton").style.display = "block";
// 	document.getElementById("navbar").style.display = "none";
}

function closeNavIfNarrow() {
	if (screen.width < 850) {
		closeNav();
	}
}

function copyIeee() {
	copyCitation('ieee');
}

function copyMla() {
	copyCitation('mla');
}

function copyCitation(id) {
	console.log("Copying citation " + id);
	var citation = document.getElementById(id);

	// Select and copy

	navigator.clipboard.writeText(citation.innerHTML);

	// Alert that we have copied text
	alert("Citation copied!");
}
