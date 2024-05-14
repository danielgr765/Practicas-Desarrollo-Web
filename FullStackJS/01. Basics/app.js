let num1 = 10;
let num2 = 11;

function showCallFunc (x, y, fn){
    
    let pom = x * (fn(x, y));

    return pom;
}

function prueba1 (x, y, fn){
    return x / (fn(x, y));
}

function fn (x,y) {
    let sum = x + y;
    return sum;
}

console.log(showCallFunc(num1, num2, fn));
console.log(prueba1(num1, num2, fn));