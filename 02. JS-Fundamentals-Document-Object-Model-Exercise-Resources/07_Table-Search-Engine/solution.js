function solve() {
    document.getElementById('searchBtn').addEventListener('click', search)

    function search() {
        let tableRows = document.querySelectorAll('tbody tr');
        let pattern = new RegExp(document.getElementById('searchField').value.toLowerCase());
        tableRows.forEach(row => row.setAttribute('class', ''))

        if (document.getElementById('searchField').value.length > 0) {
            //tableRows.forEach(row => row.textContent.includes(pattern) ? row.setAttribute('class', 'select') : console.log('Kur'))
            tableRows.forEach(row => pattern.test(row.textContent.toLowerCase()) ? row.setAttribute('class', 'select') : console.log('Kur!'))         
        }
        document.getElementById('searchField').value = '';
    }
}