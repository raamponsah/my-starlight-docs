---
title: Introduction to JavaScript
description: A Beginner's Guide to JavaScript
---

JavaScript is a versatile and powerful programming language commonly used in web development. It allows you to create interactive and dynamic web pages.

## What is JavaScript?

JavaScript is a scripting language that enables you to implement complex features on web pages. It is one of the core technologies of the web, alongside HTML and CSS.

## Adding JavaScript to Your Web Page

You can add JavaScript to your HTML document in three ways:

1. **Inline JavaScript**: Using the `onclick` attribute or other event attributes.

    ```html
    <button onclick="alert('Hello, World!')">Click me</button>
    ```

2. **Internal JavaScript**: Using the `<script>` tag within the HTML document.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Internal JavaScript</title>
        <script>
            function showAlert() {
                alert('Hello, World!');
            }
        </script>
    </head>
    <body>
        <button onclick="showAlert()">Click me</button>
    </body>
    </html>
    ```

3. **External JavaScript**: Linking an external JavaScript file.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>External JavaScript</title>
        <script src="script.js"></script>
    </head>
    <body>
        <button onclick="showAlert()">Click me</button>
    </body>
    </html>
    ```

   In the `script.js` file:

    ```javascript
    function showAlert() {
        alert('Hello, World!');
    }
    ```

## Basic Syntax

### Variables
Variables are used to store data. You can declare variables using `var`, `let`, or `const`.

```javascript
var name = 'John'; // using var
let age = 25; // using let
const isStudent = true; // using const
```

## Data Types
JavaScript supports various data types including:
- String
- Number
- Boolean
- Array
- Object
- Null
- Undefined

## Operators
JavaScript supports arithmetic, comparison, logical, and assignment operators.

```javascript
let x = 10;
let y = 5;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus

console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x == y); // Equal to
console.log(x != y); // Not equal to
```

## Functions
Functions are blocks of code designed to perform a particular task.

```javascript
function greet(name) {
return 'Hello, ' + name;
}

console.log(greet('Alice'));
```
## Events
JavaScript can react to events like clicks, hover, and form submission.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Example</title>
    <script>
        function changeText() {
            document.getElementById('text').innerHTML = 'Text changed!';
        }
    </script>
</head>
<body>
    <p id="text">Original text.</p>
    <button onclick="changeText()">Change Text</button>
</body>
</html>
```
## DOM Manipulation
The Document Object Model (DOM) represents the structure of a web page. JavaScript can be used to manipulate the DOM to change the content and style of a web page.

### Selecting Elements
You can select elements using various methods like getElementById, getElementsByClassName, and querySelector.

```javascript
let element = document.getElementById('myElement');
let elements = document.getElementsByClassName('myClass');
let element = document.querySelector('.myClass');
```
### Changing Content
You can change the content of elements using the innerHTML or textContent properties.

```javascript
document.getElementById('myElement').innerHTML = 'New Content';
document.getElementById('myElement').textContent = 'New Text Content';
````
### Changing Styles
You can change the style of elements using the style property.

```javascript
document.getElementById('myElement').style.color = 'red';
document.getElementById('myElement').style.backgroundColor = 'yellow';
```
### Example: Interactive Web Page
Here is an example of an interactive web page using JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Web Page</title>
    <script>
        function changeContent() {
            document.getElementById('content').innerHTML = 'Content changed!';
        }

        function changeStyle() {
            document.getElementById('content').style.color = 'blue';
            document.getElementById('content').style.fontSize = '20px';
        }
    </script>
</head>
<body>

<h1 id="content">Hello, World!</h1>
<button onclick="changeContent()">Change Content</button>
<button onclick="changeStyle()">Change Style</button>

</body>
</html>
```
# Conclusion
JavaScript is a fundamental language for web development, enabling dynamic and interactive web pages. By mastering the basics of JavaScript, you can create engaging and responsive web applications.