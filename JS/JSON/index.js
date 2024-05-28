// JSON = (Javascript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [{}, {}, {}]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, hobbies: ["Jellyfishing", "karate", "cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
//                      {"name": "Patrick", "age": 34, "isEmployed": false},
//                      {"name": "Squidward", "age": 50, "isEmployed": true},
//                      {"name": "Sandy", "age": 27, "isEmployed": false}]`;

// const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);

//---------------------------------------------------------------------------------------------

fetch("names.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value)))
  .catch((error) => console.error(error));
