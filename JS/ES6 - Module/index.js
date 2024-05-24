//---------------------------------------------------------------------------
// ES6 - Module = An external file that contains reusable code
//                that can be imported into other Javascript Files.
//                Write reusable code for many different apps.
//                An contain variables, classes, functions ... and more
//                Introduced as part of ECMAScript 2015 update
// <script type="module" src="index.js"></script> NEED TO INCLUDE TYPE MODULE
//---------------------------------------------------------------------------

// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

//---------------------------------------------------------------------------
//   **HOW TO HANDLE ERRORS**
// try {...} = encloses code that might potentially cause an error
// catch {...} = catch and handle any thrown errors from try {...}
// finally {...} = (optional) Always executes. Used mostly for clean up
//                 ex. close files, close connections, release resources.
//---------------------------------------------------------------------------

// try {
//   console.log("Hello world!");
//   // NETWORK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.log(error);
// } finally {
//   // CLOSE FILES
//   // CLOSE CONNECTIONS
//   // RELEASE RESOURCES
//   console.log("This always executes");
// }

// console.log("You have reached the end!");

//---------------------------------------------------------------------------

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (divisor == 0) {
    throw new Error("YOU CAN'T DIVIDE BY 0");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.lag(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end!");
