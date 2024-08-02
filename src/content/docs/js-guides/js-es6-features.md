---
title: JavaScript ES6 Features
description: Introduction to JavaScript ES6 Features
---


ES6, also known as ECMAScript 2015, introduced significant improvements and new features to JavaScript, making it more powerful and easier to write. Here are some of the most important ES6 features you should know.

## let and const

Before ES6, `var` was used to declare variables. ES6 introduced `let` and `const` for variable declaration.

- `let`: Block-scoped variable declaration.
- `const`: Block-scoped constant declaration (cannot be reassigned).

```javascript
let name = 'John';
const age = 30;

name = 'Doe'; // Allowed
// age = 31; // Error: Assignment to constant variable
```

## Arrow Functions
Arrow functions provide a shorter syntax for writing functions and automatically bind this.

```javascript
// Traditional function
function greet(name) {
return 'Hello, ' + name;
}

// Arrow function
const greet = (name) => 'Hello, ' + name;

console.log(greet('Alice'));
```
## Template Literals
Template literals allow you to embed expressions in strings using backticks (`) and ${}.

```javascript

const name = 'Alice';
const message = `Hello, ${name}!`;

console.log(message); // Output: Hello, Alice!
```
## Default Parameters
Default parameters allow you to set default values for function parameters.

```javascript
function greet(name = 'Guest') {
return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!
```
## Destructuring Assignment
Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.

### Array Destructuring
```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a, b, c); // Output: 1 2 3
```
### Object Destructuring
```javascript
const person = {
name: 'John',
age: 30,
city: 'New York'
};
const { name, age, city } = person;
console.log(name, age, city); // Output: John 30 New York
```
## Rest and Spread Operators
### Rest Operator
The rest operator (...) allows you to represent an indefinite number of arguments as an array.

```javascript

function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```
### Spread Operator
The spread operator (...) allows you to expand an array or object.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```
## Classes
ES6 introduced classes, which provide a cleaner syntax for creating objects and working with inheritance.

```javascript
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person('John', 30);
console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.
```
## Modules
ES6 introduced a module system to import and export code between files.

## Export
In math.js:

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
## Import
In main.js:

```javascript
import { add, subtract } from './math';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```
## Promises
Promises provide a way to handle asynchronous operations.

```javascript
const fetchData = () => {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Data fetched');
}, 2000);
});
};

fetchData()
.then((data) => console.log(data)) // Output: Data fetched (after 2 seconds)
.catch((error) => console.error(error));
```
# Conclusion
ES6 introduced many new features that make JavaScript more powerful and easier to work with. By understanding and using these features, you can write cleaner and more efficient code.