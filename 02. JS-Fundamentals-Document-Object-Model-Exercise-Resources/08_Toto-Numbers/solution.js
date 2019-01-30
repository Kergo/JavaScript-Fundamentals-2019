function solve() {
	document.querySelector('#myNumbers button').addEventListener('click', checkNumbers);

	function checkNumbers() {
		let myNumbers = document.querySelector('#myNumbers input').value
		.split(' ')
		.map(n => Number(n));

		if (myNumbers.length === 6 && myNumbers.every(x => x >= 1 && x <= 49)) {
			let divAll = document.getElementById('allNumbers')
			for (let i = 1; i <= 49; i++) {
				let divElements = document.createElement(`div`);
				divElements.innerText = i;
				if(myNumbers.includes(i)) {
					divElements.setAttribute('style', 'background-color:orange');
				}

				divElements.setAttribute('class', 'numbers');
				divAll.appendChild(divElements);
			}
			document.querySelector('#myNumbers input').setAttribute('disabled', '');
			document.querySelector('#myNumbers button').setAttribute('disabled', '');
		}
	}
}