const inUseMutex = new Map([
	[ "command-one", false]
	, [ "command-two", false]
	, [ "command-three", false]
	, [ "command-four", false]
	, [ "command-five", false]
	, [ "command-six", false]
	, [ "command-seven", false]
	, [ "command-eight", false]
	, [ "command-nine", false]
	, [ "command-ten", false]
]);

function showCommand(commandId) {
	let cmdAndPrompt = document.getElementById(commandId);
	cmdAndPrompt.style.display = "block";
	let prompt = document.getElementById(commandId + "-prompt");
	// Should only have one element
	console.log("Displaying prompt " + prompt);
	let command = document.getElementById(commandId + "-command");
	var cmdText = command.innerHTML;

	// Don't re-start the animation if already started
	if (inUseMutex.get(commandId)) {
		// Show a command result if we need to
		let cmdResult = document.getElementById(commandId + "-result");
		if (cmdResult != null) {
			cmdResult.style.display = "block";
		}
		return;
	}
	inUseMutex.set(commandId, true);
	command.innerHTML = "";
	var i = 0;
	var speed = 100;

	function typeWriter() {
		if (i < cmdText.length) {
			command.innerHTML += cmdText.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
		else {
			inUseMutex.set(commandId, false);
		}
	}
	typeWriter();

	setTimeout(
		function() {
			// Show a command result if we need to
			let cmdResult = document.getElementById(commandId + "-result");
			if (cmdResult != null) {
				cmdResult.style.display = "block";
			}
		}
		, cmdText.length * speed + 20 // 20ms before show
	)
}

function hideCommand(commandId) {
	document.getElementById(commandId).style.display = "none";
	// Hide result if exists
	let cmdResult = document.getElementById(commandId + "-result");
	if (cmdResult != null) {
		cmdResult.style.display = "none";
	}
}

function showAbout() {
	hideAll()
	showCommand("command-one");
}

function showSkills() {
	hideAll()
	showCommand("command-two");
	showCommand("command-three");
}

function showHobbies() {
	hideAll()
	showCommand("command-four");
	showCommand("command-five");
	showCommand("command-six");
	showCommand("command-seven");
}

function showContact() {
	hideAll()
	showCommand("command-eight");
	showCommand("command-nine");
	showCommand("command-ten");
}

function hideAll() {
	hideCommand("command-one");
	hideCommand("command-two");
	hideCommand("command-three");
	hideCommand("command-four");
	hideCommand("command-five");
	hideCommand("command-six");
	hideCommand("command-seven");
	hideCommand("command-eight");
	hideCommand("command-nine");
	hideCommand("command-ten");
}

function showAll() {
	showCommand("command-one");
	showCommand("command-two");
	showCommand("command-three");
	showCommand("command-four");
	showCommand("command-five");
	showCommand("command-six");
	showCommand("command-seven");
	showCommand("command-eight");
	showCommand("command-nine");
	showCommand("command-ten");
}
