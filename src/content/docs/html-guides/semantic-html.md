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
```

## `<nav>`

Defines a section of navigation links. Use this element to group and mark up your site's primary navigation.
### Example
```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```
## `<main>`
Specifies the main content of the document. It should be unique to the document and exclude repeated elements like headers, footers, and navigation.

### Example
```html
<main>
  <section>
    <h2>About Us</h2>
    <p>Our company specializes in...</p>
  </section>
  <section>
    <h2>Our Services</h2>
    <p>We offer...</p>
  </section>
</main>
```
## `<article>`
Represents a self-contained piece of content that could be distributed independently. It is commonly used for blog posts, news articles, or forum posts.

### Example
```html

<article>
  <h2>How to Use Semantic HTML</h2>
  <p>Semantic HTML elements help structure your content...</p>
</article>
```

## `<section>`
Defines a section in a document, typically with a heading. It groups related content together and is used to organize content into logical sections.

### Example
```html
<section>
  <h2>Our History</h2>
  <p>We have been in business since...</p>
</section>
```

## `<aside>`
Represents content indirectly related to the main content, such as sidebars, pull quotes, or advertisements.

### Example
```html
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#link1">Link 1</a></li>
    <li><a href="#link2">Link 2</a></li>
  </ul>
</aside>
```

## `<footer>`
Defines the footer for a document or section. It typically contains information about the author, copyright details, or contact information.

### Example
```html

<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```
