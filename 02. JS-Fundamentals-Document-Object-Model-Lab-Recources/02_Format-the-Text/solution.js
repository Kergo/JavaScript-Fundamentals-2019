function solve(){
  let inputText = document.getElementById('input').innerText;

  let paragraphs = inputText.split('.');
  paragraphs = paragraphs
                    .map(s => s.trim())
                    .filter(s => s.length > 0)
  let outputDivElement = document.getElementById('output');

  while (paragraphs.length > 0) {
    let text = '';
    for (let i = 0; i < paragraphs.length; i++) {
        text += paragraphs.shift() + '. ';
        if (i === 3) {
          break;
        }
    }

    let pararaphElement = document.createElement('p');
    pararaphElement.innerText = text;
    outputDivElement.appendChild(pararaphElement);
  }
}