---
title: JavaScript DOM Manipulation
description: Understanding how to manipulate the DOM using JavaScript
---


The Document Object Model (DOM) represents the structure of a web page. JavaScript can be used to manipulate the DOM to change the content, structure, and style of web pages dynamically.

## What is the DOM?

The DOM is a tree-like structure representing the elements of a web page. Each element is an object that can be manipulated using JavaScript.

## Selecting Elements

### getElementById

Selects a single element by its ID.

```javascript
const element = document.getElementById('myElement');
```

### getElementsByClassName
Selects all elements with a specified class name.

```javascript
const elements = document.getElementsByClassName('myClass');
```
### getElementsByTagName
Selects all elements with a specified tag name.

```javascript

const elements = document.getElementsByTagName('div');
```

### querySelector
Selects the first element that matches a specified CSS selector.

```javascript
const element = document.querySelector('.myClass');
```

### querySelectorAll
Selects all elements that match a specified CSS selector.

```javascript
const elements = document.querySelectorAll('.myClass');
```
## Changing Content
You can change the content of an element using the innerHTML, textContent, or innerText properties.

### innerHTML
```javascript
document.getElementById('myElement').innerHTML = '<p>New content</p>';
```
### textContent
```javascript
document.getElementById('myElement').textContent = 'New content';
```
### innerText
```javascript
document.getElementById('myElement').innerText = 'New content';
```

## Changing Attributes
You can change the attributes of an element using the setAttribute method or directly accessing the attribute properties.

### setAttribute
```javascript

document.getElementById('myElement').setAttribute('src', 'image.jpg');
```
## Directly Accessing Properties
```javascript
document.getElementById('myElement').src = 'image.jpg';
```
### Changing Styles
You can change the style of an element using the style property.

```javascript
document.getElementById('myElement').style.color = 'red';
document.getElementById('myElement').style.backgroundColor = 'yellow';
```
## Adding and Removing Classes
You can add, remove, or toggle classes using the classList property.

### add
```javascript
document.getElementById('myElement').classList.add('newClass');
remove
```javascript
document.getElementById('myElement').classList.remove('oldClass');
```
### toggle
```javascript

document.getElementById('myElement').classList.toggle('active');
```
## Creating and Removing Elements
You can create new elements and remove existing ones using the createElement and removeChild methods.

### createElement
```javascript
const newElement = document.createElement('div');
newElement.textContent = 'New element';
document.body.appendChild(newElement);
```
### removeChild

```javascript

const parentElement = document.getElementById('parentElement');
const childElement = document.getElementById('childElement');
parentElement.removeChild(childElement);
```
## Event Handling
You can handle events like clicks, form submissions, and keyboard input using event listeners.

### addEventListener
```javascript

document.getElementById('myButton').addEventListener('click', function() {
alert('Button clicked!');
});
```
## Example: Interactive Web Page
Here is an example of an interactive web page using DOM manipulation:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Web Page</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
    <script>
        function changeContent() {
            document.getElementById('content').innerHTML = 'Content changed!';
        }

        function changeStyle() {
            document.getElementById('content').style.color = 'blue';
            document.getElementById('content').style.fontSize = '20px';
        }

        function toggleHighlight() {
            document.getElementById('content').classList.toggle('highlight');
        }

        function addElement() {
            const newElement = document.createElement('p');
            newElement.textContent = 'New paragraph';
            document.body.appendChild(newElement);
        }

        function removeElement() {
            const element = document.getElementById('content');
            element.parentNode.removeChild(element);
        }
    </script>
</head>
<body>

<h1 id="content">Hello, World!</h1>
<button onclick="changeContent()">Change Content</button>
<button onclick="changeStyle()">Change Style</button>
<button onclick="toggleHighlight()">Toggle Highlight</button>
<button onclick="addElement()">Add Element</button>
<button onclick="removeElement()">Remove Element</button>

</body>
</html>
```
# Conclusion
JavaScript DOM manipulation is a powerful way to dynamically change the content, structure, and style of your web pages. By mastering these techniques, you can create highly interactive and responsive web applications.