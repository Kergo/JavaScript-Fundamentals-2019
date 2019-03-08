function solve(arr) {
    let gr = arr[0]
    arr.filter((el) => {
        if(el > gr)gr=el
        return el >= gr;
    }).forEach(el => {
        console.log(el); 
    });  
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])