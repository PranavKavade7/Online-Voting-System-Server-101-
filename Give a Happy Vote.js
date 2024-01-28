var dudes = document.querySelectorAll('.btn');
dudes = Array.prototype.slice.call( dudes );

dudes.forEach(function (dude) {

	updateDude( dude );

	// on click, increase score
	dude.addEventListener('click', function () {

		increaseScore(dude);

	});

});

// first -> scoreFirst
function getKeyFrom( dude ) {
	return 'score' + _.capitalize( dude.getAttribute('rel') );
}

// get scoreFirst from localStorage
function getScore( dude ) {
	return +localStorage.getItem( getKeyFrom(dude) ) || 0;
}

// set scoreFirst in localStorage
function setScore( dude, score ) {
	localStorage.setItem( getKeyFrom(dude), score );
}

// update scoreFirst in localStorage
function updateDude( dude ) {
	var score   = getScore(dude),
	    element = document.querySelector('#' + dude.getAttribute('rel'));
	element.textContent = score;
}

// increase scoreFirst in localStorage
function increaseScore(dude) {
	var score = getScore(dude);
	score++;

	setScore(dude, score);

	updateDude(dude);
}