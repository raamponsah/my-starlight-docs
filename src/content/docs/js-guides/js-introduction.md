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

