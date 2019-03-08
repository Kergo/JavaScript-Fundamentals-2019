function solve(arr) {

    let sorted = arr.sort(sorting);

    function sorting(a, b) {
        
        let aLength = a.length;
        let bLength = b.length;
        let result = aLength - bLength;

        //Alphabetical sort
        if (result === 0) {
            return a.localeCompare(b);
        }

        return result;
    }
    console.log(sorted);
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])