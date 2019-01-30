function solve() {
    let content = document.getElementById('content');
    let buttons = document.getElementById('buttons')
    let agree = buttons.firstElementChild;
    let disagree = buttons.lastElementChild;


    agree.addEventListener('click', next)


    function next() {
        let wtf = document.getElementById('firstStep')
        wtf.id = 'firstStepp'
        
    }
    console.log(agree);
    

}