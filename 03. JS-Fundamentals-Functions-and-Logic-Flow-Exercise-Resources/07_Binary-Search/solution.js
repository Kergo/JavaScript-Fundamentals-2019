function binarySearch() {
    let arr = JSON.parse(document.querySelector('#arr').value)
    let num = +document.querySelector('#num').value
    let result = document.querySelector('#result')
    let index = arr.indexOf(num);

    index >= 0
        ? result.textContent = `Found ${num} at index ${index}`
        : result.textContent = `The number ${num} is not in the array.`
}