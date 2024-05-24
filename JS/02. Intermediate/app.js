

function user (name, age, favBand){
    return {
        name,
        age,
        favBand,
        intro() {
            console.log(`My name is ${name} and I am ${age} years old and my favorite band is ${favBand}`);
        }
    }
}



var daniel = user("daniel", "21", "Slipknot");

console.log(daniel.intro());

