// EXAMPLE 1 - Check if a Variable is of type Error in JavaScript

const err = new Error('💣️ Something went wrong');
console.log(err instanceof Error); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using instanceof with custom Errors

// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);

//     this.name = 'NotFoundError';
//     this.status = 404;
//   }
// }

// const err = new NotFoundError('product not found');

// console.log(err instanceof Error); // 👉️ true
// console.log(err instanceof NotFoundError); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using duck-typing

// function isError(error) {
//   if (error && error.stack && error.message) {
//     return true;
//   }

//   return false;
// }

// const err = new Error('💣️ Something went wrong');
// console.log(isError(err)); // 👉️ true

// console.log(isError('test')); // 👉️ false
// console.log(isError({})); // 👉️ false
