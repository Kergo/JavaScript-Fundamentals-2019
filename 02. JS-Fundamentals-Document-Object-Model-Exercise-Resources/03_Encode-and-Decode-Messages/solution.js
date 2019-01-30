function solve() {
	let buttons = Array.from(document.getElementsByTagName('button'));
	let inputFields = Array.from(document.getElementsByTagName('textarea'));
	inputFields[1].value = '';
	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);
	let msgDecoded;

	function encode() {
		let message = inputFields[0].value;
		inputFields[0].value = ''
		let encodedMsg = '';
		for (let i = 0; i < message.length; i++) {
			encodedMsg += String.fromCharCode(message[i].charCodeAt() + 1)
		}
		inputFields[1].value = encodedMsg;
		msgDecoded = false;
	}

	function decode() {
		let encodedMsg = inputFields[1].value;
		let decodedMsg = '';
		if(!msgDecoded){
			for (let i = 0; i < encodedMsg.length; i++) {
				decodedMsg += String.fromCharCode(encodedMsg[i].charCodeAt() - 1)
			}
			inputFields[1].value = decodedMsg;
			msgDecoded = true;
		}
	}
}