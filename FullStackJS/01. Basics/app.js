const person = {
    "name": "John Doe",
    "age": 21,
    "email": "john.doe@gmail.com",
    "hobbies": ["Reading", "Cooking", "Running"],
    "address": {
        "city": "Mountain View",
        "idk": true
    }
};

//JSON.stringify()

const jsonString = JSON.stringify(person);
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);