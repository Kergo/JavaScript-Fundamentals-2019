function solve(keyword, message) {


    let pattern = new RegExp(keyword, 'g');


    console.log(message.search(pattern))


    console.log(message.match(pattern));
    

    
    
}

solve('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532')