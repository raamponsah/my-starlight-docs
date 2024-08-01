---
title: HTML Introduction
description: Notes for the HTML Introduction page in the workshop documentation site.
---

# Introduction to HTML

HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the basic structure for web documents by using various elements and tags. HTML elements are the building blocks of a webpage and can include text, images, links, forms, and other content.

## Basic HTML Structure

A basic HTML document consists of the following main parts:
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: The root element that contains the entire HTML document.
- `<head>`: Contains metadata and links to external resources like CSS stylesheets.
- `<body>`: Contains the content of the webpage, such as text, images, and links.

## Common HTML Elements

- **Headings**: Defined with `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`.
- **Paragraphs**: Defined with `<p>`.
- **Links**: Defined with `<a href="URL">`.
- **Images**: Defined with `<img src="URL" alt="description">`.
- **Lists**: Defined with `<ul>` for unordered lists and `<ol>` for ordered lists.

## Practice Instructions

1. Create a simple HTML document with the basic structure.
2. Add a heading, a paragraph, a link, and an image to the document.
3. Save the document with a `.html` extension and open it in a web browser to view the result.

## Example HTML Document

Here is a basic example of an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My First HTML Page</h1>
    <p>This is a paragraph of text. HTML is used to structure content on the web.</p>
    
    <a href="https://www.example.com">Visit Example.com</a>
    
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
    
    <h2>My Favorite Fruits</h2>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
</body>
</html>
