function solve(firstMatrix, secondMatrix) {

    //   [1, 2, 3] 
    //   [4, 5, 6]

    //   [7, 9, 11] 
    //   [8, 10, 12]


    //let firstMatrix = JSON.parse(document.querySelector('#mat1').value)
    //let secondMatrix = JSON.parse(document.querySelector('#mat2').value)
    //let result = document.querySelector('#result')
    console.log(firstMatrix);
    console.log(secondMatrix);

    //console.log(secondMatrix = transpose(secondMatrix))

    let len = firstMatrix.length;

    let product1 = 0;
    let product2 = 0;
    let product3 = 0;
    let product4 = 0;
    for (let o = 0; o < firstMatrix.length; o++) {
        for (let i = 0; i < secondMatrix[o].length; i++) {
            //console.log(firstMatrix[o][i] * secondMatrix[o][i])
            //console.log(firstMatrix[i][o] * secondMatrix[o][i])
            //console.log(firstMatrix[i][i] * secondMatrix[i][i])
            //console.log(firstMatrix[o][o] * secondMatrix[o][o])
            //console.log(firstMatrix[i][o] * secondMatrix[i][o])
            if (o === 0) {
                product1 += firstMatrix[o][i] * secondMatrix[o][i];
                product2 += firstMatrix[o][i] * secondMatrix[o + 1][i];
                
                //console.log(`${firstMatrix[o][i]} --- ${secondMatrix[o][i]}`);
                //console.log(`${firstMatrix[o][i]} --- ${secondMatrix[o + 1][i]}`);                
            } else if(o === 1) {
                product3 += firstMatrix[o][i] * secondMatrix[o - 1][i];
                product4 += firstMatrix[o][i] * secondMatrix[o][i];
                //console.log(`${firstMatrix[o][i]} --- ${secondMatrix[o - 1][i]}`);
                //console.log(`${firstMatrix[o][i]} --- ${secondMatrix[o][i]}`);    
            } 
        }
    }
    console.log(product1);
    console.log(product2);
    console.log(product3);
    console.log(product4);
}

solve([
    [1, 2, 3],
    [4, 5, 6]],
   [[7, 9, 11],
    [8, 10, 12]
    ]);


function transpose(a) {

    // Calculate the width and height of the Array
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;
  
    // In case it is a zero matrix, no transpose routine needed.
    if(h === 0 || w === 0) { return []; }
  
    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];
  
    // Loop through every item in the outer array (height)
    for(i=0; i<h; i++) {
  
      // Insert a new row (array)
      t[i] = [];
  
      // Loop through every item per item in outer array (width)
      for(j=0; j<w; j++) {
  
        // Save transposed data.
        t[i][j] = a[j][i];
      }
    }
  
    return t;
  }
  
  //console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));

  console.log();
  
