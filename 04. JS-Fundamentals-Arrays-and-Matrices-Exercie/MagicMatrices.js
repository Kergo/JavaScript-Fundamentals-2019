function solve(mat) {
    let reducer = (acc, curVal) => acc + curVal;
    let sum = mat[0].reduce(reducer);
    let equal = true;
    for (let i = 1; i < mat.length; i++) {
        let currRowSum = mat[i].reduce(reducer);
        if (currRowSum !== sum) {
            equal = false;
            break;
        }
    }
    
    console.log(equal);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

   solve([[11, 32, 45],
   [21, 0, 1],
   [21, 1, 1]])