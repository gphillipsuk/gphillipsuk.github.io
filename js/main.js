function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult.');	
	} else if (age >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() != "assembly") {
		console.log("Hello General!");
	}

	var faveColour = prompt('What\'s your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h2').css('color',faveColour);
	}

}

//When the page has loaded
$(function() {

	//When user clicks on h2 ask questions
	$('h2').on('click',askQuestions);

	//Find all content and hide it
	$('h3').next().hide();

	//When the user clicks on an h3
	$('h3').on('click', function() {

		//Find the next element and slide toggle it
		$(this).next().slideToggle(1000);

	});

});