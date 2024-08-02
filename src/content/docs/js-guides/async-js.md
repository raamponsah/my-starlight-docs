---
title: Asynchronous JavaScript
description: Understanding Callbacks, Promises, and Async/Await
---

# Asynchronous JavaScript

Asynchronous JavaScript allows you to perform long network requests without blocking the main thread, enabling a smooth and responsive user experience. Understanding how to handle asynchronous operations is crucial for modern web development.

## Callbacks

A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

### Example

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Output: Data fetched (after 2 seconds)
```

## Promises
Promises provide a cleaner and more powerful way to handle asynchronous operations. A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Creating a Promise
```javascript
const fetchData = new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Data fetched');
}, 2000);
});

fetchData
.then((data) => console.log(data)) // Output: Data fetched (after 2 seconds)
.catch((error) => console.error(error));
```
### Chaining Promises
```javascript

const fetchData = new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Data fetched');
}, 2000);
});

fetchData
.then((data) => {
console.log(data); // Output: Data fetched
return 'Processing data';
})
.then((data) => console.log(data)) // Output: Processing data
.catch((error) => console.error(error));
```
## Async/Await
Async/await is a syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

## Async Function
An async function returns a promise. The await keyword can be used inside an async function to wait for a promise to resolve.

```javascript

async function fetchData() {
const data = await new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Data fetched');
}, 2000);
});
console.log(data);
}

fetchData(); // Output: Data fetched (after 2 seconds)
```
## Error Handling
You can use try...catch blocks to handle errors in async functions.

```javascript
async function fetchData() {
try {
const data = await new Promise((resolve, reject) => {
setTimeout(() => {
resolve('Data fetched');
}, 2000);
});
console.log(data);
} catch (error) {
console.error(error);
}
}

fetchData();
```
### Example: Fetch API
The Fetch API provides a way to make network requests and handle responses.

## Using Fetch with Promises
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Error:', error));
```

## Using Fetch with Async/Await
```javascript
async function fetchPost() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();
console.log(data);
} catch (error) {
console.error('Error:', error);
}
}

fetchPost();
```
# Conclusion
Asynchronous JavaScript is a fundamental aspect of modern web development, enabling smooth and responsive user experiences. By mastering callbacks, promises, and async/await, you can handle asynchronous operations efficiently and write cleaner, more maintainable code.