---
title: Semantic HTML
description: Notes for the HTML Introduction page in the workshop documentation site.
---
# Understanding Semantic HTML

Semantic HTML refers to the use of HTML tags that convey the meaning of the content contained within them. Unlike generic tags like `<div>` and `<span>`, semantic tags provide information about the type of content and its role on the page, which improves both accessibility and search engine optimization (SEO).

## What is Semantic HTML?

Semantic HTML uses HTML5 elements that are meaningful and describe the type of content they enclose. These elements make it easier for browsers and search engines to understand the structure and purpose of a webpage. They also help developers write cleaner, more maintainable code.

## Benefits of Semantic HTML

- **Improved Accessibility**: Screen readers and other assistive technologies can better interpret the content, making it more accessible to users with disabilities.
- **Better SEO**: Search engines use semantic elements to better understand and index the content, potentially improving search engine rankings.
- **Enhanced Readability**: Semantic tags make the code more readable and understandable for developers, improving maintainability and collaboration.

## Common Semantic HTML Elements

Here are some commonly used semantic HTML elements and their purposes:

### `<header>`

Defines the introductory content or a group of navigational links for a section of a page.

```html
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
