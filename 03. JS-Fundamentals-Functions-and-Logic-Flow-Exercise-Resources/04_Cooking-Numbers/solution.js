function solve() {

    function chop(num) {
        result.textContent = num / 2;
        operation;
    }
    function dice(num) {
        result.textContent = Math.sqrt(num);
        operation;
    }
    function spice(num) {
        result.textContent = +num + 1;
        operation;
    }
    function bake(num) {
        result.textContent = num * 3;
        operation;
    }
    function fillet(num) {
        result.textContent = num * 0.8;
        operation;
    }

    function operation(btn) {
        switch (btn.target.innerText) {
            case "Chop":
                chop(number);
                break;
            case "Dice":
                dice(number);
                break;
            case "Spice":
                spice(number);
                break;
            case "Bake":
                bake(number);
                break;
            case "Fillet":
                fillet(number);
                break;
            default:
                break;
        }
        number = result.textContent;
        buttons.forEach(btn => btn.addEventListener('click', operation))
    }

    let number = document.querySelector('input').value;
    if (number.length === 0) {
        number = 0;
    }

    let buttons = document.querySelectorAll('#operations button')
    buttons.forEach(btn => btn.addEventListener('click', operation))
    let result = document.getElementById('output');
}