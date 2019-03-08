function solve(rows, cols) {
    //Create Blue Print and Filling in with 0;
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }    
    }    

    let counter = 1;
    let currRow = 0;
    let currCol = 0;
    let direction = 'r';

    for (let i = 0; i < rows * cols; i++) {
        matrix[currRow][currCol] = counter;
        counter++;
        if (direction === 'r') {
           if (currCol + 1 >= cols || matrix[currRow][currCol + 1] !== 0) {
               direction = 'd';
               currRow++;
           }  else {
               currCol++;
           }
        } else if (direction === 'd') {
            if (currRow + 1 >= rows || matrix[currRow + 1][currCol] !== 0) {
                direction = 'l';
                currCol--;
            } else {
                currRow++;
            }
        } else if (direction === 'l') {
            if (currCol - 1 < 0 || matrix[currRow][currCol - 1] !== 0) {
                direction = 'u';
                currRow--;
            } else {
                currCol--;
            }
        } else if (direction === 'u') {
            if (currRow - 1 < 0 || matrix[currRow - 1][currCol] !== 0) {
                direction = 'r';
                currCol++;
            } else {
                currRow--;
            }
        }    
    }

    for (let row of matrix) {
        console.log(row.join(' '));
        
    }
}


solve(4, 4)