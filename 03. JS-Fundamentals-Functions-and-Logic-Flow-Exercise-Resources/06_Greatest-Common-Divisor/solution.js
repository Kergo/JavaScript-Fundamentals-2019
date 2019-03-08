function greatestCD() {
    let a = +document.getElementById('num1').value
    let b = +document.getElementById('num2').value
    let result = document.getElementById('result');
    //var gcd = function(a,b) { return (!b)?a:gcd(b,a%b); };
    let gcd = function (a, b) {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    };
    result.textContent = gcd(a, b);
}