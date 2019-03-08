function validate() {
    let inputString = document.querySelector('#exercise input').value
    let wieghts = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    document.querySelector('#exercise button').addEventListener('click', () => {
        let lastDigit = inputString[inputString.length - 1];
        let sum = 0;
        for (let i = 0; i < inputString.length - 1; i++) {
            sum += inputString[i] * wieghts[i];
        }
        let reminder = sum % 11;
        if (reminder === 10) reminder = 0;
        let response = document.getElementById('response');

        +lastDigit === reminder 
            ? response.textContent = 'This number is Valid!'
            : response.textContent = 'This number is NOT Valid'
    });
}