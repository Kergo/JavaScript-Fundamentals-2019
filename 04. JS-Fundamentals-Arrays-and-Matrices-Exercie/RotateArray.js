function solve(arr) {
    let rotations = arr.pop();
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));  
}

solve(['1', 
'2', 
'3', 
'4', 
'2'])


solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15'])