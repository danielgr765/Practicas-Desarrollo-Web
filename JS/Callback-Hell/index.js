//-------------------------------------------------------------------------------------------
//Promise = An Object that manages asynchronous operations.
//          Wrap a Promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})
//-------------------------------------------------------------------------------------------

//Do thtis chores in order

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = false;
//       if (dogWalked) {
//         resolve("You walk the dog 🐕");
//       } else {
//         reject("You didn't walk the dog 😡");
//       }
//     }, 3000);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kithchenCleaned = true;
//       if (kithchenCleaned) {
//         resolve("You cleaned the kitchen 🧽");
//       } else {
//         reject("You didn't clean the kitchen 😡");
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = true;
//       if (trashTakenOut) {
//         resolve("You take out the trash ♻");
//       } else {
//         reject("You didn't take out the trash 😡");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the chores 🎉");
//   })
//   .catch((error) => console.error(error));

//-------------------------------------------------------------------------------------------
// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue
//-------------------------------------------------------------------------------------------

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;
      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't walk the dog 😡");
      }
    }, 3000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kithchenCleaned = true;
      if (kithchenCleaned) {
        resolve("You cleaned the kitchen 🧽");
      } else {
        reject("You didn't clean the kitchen 😡");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You take out the trash ♻");
      } else {
        reject("You didn't take out the trash 😡");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!!! 🎉");
  } catch (error) {
    console.error(error);
  }
}
doChores();
