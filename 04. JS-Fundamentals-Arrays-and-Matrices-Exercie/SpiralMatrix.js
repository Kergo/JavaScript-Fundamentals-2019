function solve(rows, cols) {
    



                                            //FUCK
    let matrix = [];
    //Create Matrix Blue Print
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    //Filling in First Row
    for (let r = 0; r < 1; r++) {
        for (let c = 0; c < matrix.length; c++) {
            matrix[r][c] = c+1
        }
    }
    //Filling in Last Column
    for (let r = 1; r < rows; r++) {
        let lastNum = matrix[r - 1][matrix.length - 1]
        matrix[r][rows - 1] = lastNum + 1;  
    }

    for (let r = rows; r < array.length; r++) {
        const element = array[r];
        
    }

    console.log(matrix);
    console.log();
    
    
}


solve(3, 3)