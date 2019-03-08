function leapYear() {
    document.querySelector('button').addEventListener('click', () => {
        let year = document.querySelector('#exercise input').value;
        document.querySelector('#year h2').textContent =
            ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
                ? 'Leap Year' : 'Not Leap Year';
        document.querySelector('#year div').textContent = year;
        document.querySelector('#exercise input').value = '';
    });
}