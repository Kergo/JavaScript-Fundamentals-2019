function solve() {
	let questions = document.querySelectorAll('section');
	let count = 0;
	let correctAnswers = 0;
	document.querySelectorAll('button')
			.forEach(x => x.addEventListener('click', next));

	function next() {
		if (count === 0) {
			if (document.getElementsByName('softUniYear')[1].checked) {
				correctAnswers++;
			}
			questions[0].setAttribute('class', 'hidden')
			questions[1].setAttribute('class', '')
		} else if (count === 1) {
			if (document.getElementsByName('popularName')[2].checked) {
				correctAnswers++;
			}
			questions[1].setAttribute('class', 'hidden')
			questions[2].setAttribute('class', '')
		} else {
			let result = document.getElementById('result');
			if (document.getElementsByName('softUniFounder')[3].checked) {
				correctAnswers++;
			}
			if (correctAnswers === 3) {
				result.textContent = "You are recognized as top SoftUni fan!";
			}
			else {
				result.textContent = `You have ${correctAnswers} right answers`
			}
		}
		count++;
	}
}