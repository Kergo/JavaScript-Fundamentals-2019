function solve() {
    
    let convertToDropBox = document.getElementById('selectMenuTo');
    let hexElement = document.createElement('option');
    convertToDropBox.firstElementChild.value = 'binary'
    convertToDropBox.firstElementChild.textContent = 'Binary'
    hexElement.textContent = 'Hex';
    hexElement.value = 'hex';
    convertToDropBox.appendChild(hexElement);
    
    console.log(convertToDropBox.childNodes);
    
}