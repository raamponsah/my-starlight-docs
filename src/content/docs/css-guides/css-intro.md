---
title: Introduction to CSS
description: Introduction to CSS
---

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or
XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Why Use CSS?

CSS is used to separate the content of a web page from its design and layout. This separation improves content
accessibility, provides more flexibility and control in the specification of presentation characteristics, enables
multiple pages to share formatting, and reduces complexity and repetition in the structural content.

## Basic Syntax

A CSS rule consists of a selector and a declaration block:

```css
selector {
    property: value;
}
```

#### Selector: Specifies the HTML element you want to style.
#### Property: Specifies the style property you want to change.
Value: Specifies the value of the property.
Example:

```css
body {
background-color: lightblue;
}

h1 {
color: navy;
text-align: center;
}

p {
font-family: verdana;
font-size: 20px;
}
```
In this example, the body element has a light blue background, the h1 elements are navy and centered, and the p elements
use the Verdana font and have a font size of 20px.

## How to Add CSS
There are three ways to apply CSS to HTML:

### Inline CSS: 
Using the style attribute inside HTML elements.

```html
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```
### Internal CSS: 
Using the <style> element inside the <head> section of the HTML document.

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: linen;
}

h1 {
color: maroon;
margin-left: 40px;
}
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```
### External CSS: 
Using an external stylesheet, which is linked to the HTML document.

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```
And in styles.css:

```css
body {
background-color: linen;
}

h1 {
color: maroon;
margin-left: 40px;
}
```
## CSS Selectors
Selectors are used to select the HTML elements you want to style. Here are some common selectors:

### Element Selector: 
Selects all elements of the given type.

```css
p {
text-align: center;
color: red;
}
```
### ID Selector: 
Selects a single element with the specified ID. IDs are unique within a page, so the ID selector is used to select one unique element.

```css
#unique {
color: blue;
}
```

### Class Selector: 
Selects all elements with the specified class. Classes are not unique, so multiple elements can share the same class.

```css
.center {
text-align: center;
}
```
### Universal Selector
Selects all elements.

```css

* {
  color: green;
  }
```
Descendant Selector: Selects all elements that are descendants of a specified element.

```css
div p {
color: purple;
}
```
## Conclusion
CSS is a powerful tool for controlling the presentation of web pages. By understanding the basics of CSS syntax, how to add CSS to HTML, and how to use selectors, you can start creating beautifully styled web pages.