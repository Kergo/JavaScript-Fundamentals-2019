function validate() {

    // NAI-TUPATA GRESHNo OPISANA ZADACHA
    // USLOVIETO I PRIMERITE NE SAOTVETSVAT
    document.querySelector('div > button')
        .addEventListener('click', (function generateEgn() {
            let year = document.getElementById('year').value;
            let month = document.getElementById('month').options[document.getElementById('month').selectedIndex].index
            let date = document.getElementById('date').value
            let region = document.getElementById('region').value
            let gender = 0;
            if (document.getElementById('male').checked) gender = 2;
            else gender = 1;

            if ((year >= 1900 && year <= 2100) && month >= 1 && gender > 0 && (region >= 43 && region <= 999)) {
                console.log("ggrrrr");
                
                let egnString =
                    year.charAt(2) +
                    year[3] +
                    String(month).padStart(2, 0) +
                    String(date).padStart(2, 0) +
                    String(region).padStart(3, 0) +
                    gender;
                validateEgn(egnString);
            }
            function validateEgn(egn) {
                console.log("gj");
                let inputString = egn
                let wieghts = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                let lastDigit = inputString[inputString.length - 1];
                let sum = 0;
                for (let i = 0; i < inputString.length - 1; i++) {
                    sum += inputString[i] * wieghts[i];
                }
                let reminder = sum % 11;
                if (reminder === 10) reminder = 0;
                let response = document.getElementById('egn');
        
                +lastDigit === reminder
                    ? response.textContent = inputString
                    : response.textContent = inputString
                
        
            };

            document.getElementById('year').value = ''
            document.getElementById('date').value = ''
            document.getElementById('month').getElementsByTagName('option')[0].selected = 'selected'
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
            document.getElementById('region').value = ''
        }))
}