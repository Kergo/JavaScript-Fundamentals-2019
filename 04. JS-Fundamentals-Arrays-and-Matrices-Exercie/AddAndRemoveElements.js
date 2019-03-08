function solve(commands) { 
    let arr = [];
    for (let i = 0; i < commands.length; i++) {   
        commands[i] === 'add'
            ? arr.push(i+1)
            : arr.pop()
    }

    arr.length === 0
        ? console.log("Empty")
        : arr.forEach(el => console.log(el))
}

solve(['add', 
'add', 
'remove', 
'add', 
'add'])