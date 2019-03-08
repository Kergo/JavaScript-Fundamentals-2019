function solve(binIn) {
    let sum = 0;
    for (let i = 0; i < binIn.length; i++) {
            sum += +binIn[i]    
    }
    
    sum = sum.toString();
    let cut = 0;
    for (let i = 0; i < sum.length; i++) {
        cut += +sum[i];
    }

    let binary = binIn.substring(cut, binIn.length - cut);
    let binaryArray = [];
    for (let i = 0; i < binary.length; i+=8) {
        binaryArray.push(binary.substring(i, i + 8)) 
    }

    let stringOutput = '';
    for (let segment of binaryArray) {
        let ch = String.fromCharCode(parseInt(segment, 2))
        stringOutput += ch;
    }

    console.log(stringOutput);
}


solve('0100011011010111100100100000011011100110000101101101011001010010000001101001011100110010');