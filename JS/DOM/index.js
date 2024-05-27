//------------------------------------------------------------------------------------
// DOM = DOCUIMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and stryle of a web image.
//------------------------------------------------------------------------------------

//<h1 id="welcome-msg">Welcome</h1>
// const username = "Daniel";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? ` Guest` : ` ${username}`;

//------------------------------------------------------------------------------------
// element selectors = Methods used to target and manipulate HTML elements
//       They allow you to select one or multiple HTML elements from the DOM.

// 1. document.getElementById()           // ELEMENT OR NULL
// 2. document.getElementClassName()      // HTML COLLECTION
// 3. document.getElementsByTagName()     // HTML COLLECTION
// 4. document.quetySelector()            // ELEMENT OR NULL
// 5. document.querySelectorAll()         // NODELIST
//------------------------------------------------------------------------------------

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}
const element1 = document.getElementsByTagName("h1");
const element2 = document.querySelector("div"); //".my-heading" for a class the "." //
const element3 = document.querySelectorAll("div");
console.log(element1);
console.log(element2);
console.log(element3);
