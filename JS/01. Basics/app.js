const currentDate = new Date(2024, 2, 24, 12, 30, 0, 0);

console.log(`Hola buenas:

${currentDate}`);

let hola = () => console.log(`Hola buenas: ${currentDate}`);

hola();

setTimeout (() => {console.log("hola"), 2000});