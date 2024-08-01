---
title: Project
description: Milestone Project
---

# HTML Project: Build Your Personal Web Page

## Objective

Create a personal web page that showcases your profile. This project will help you apply your knowledge of HTML to build a well-structured and informative web page.

## Project Requirements

Your personal web page should include the following elements:

1. **Header Section**
    - Your name as a heading.
    - A navigation menu with links to different sections of the page (e.g., About, Projects, Contact).

2. **About Section**
    - A brief biography or introduction about yourself.
    - An image of yourself or a relevant graphic with an appropriate `alt` attribute.

3. **Projects Section**
    - A list of projects or achievements. Each project should be described with a heading and a short paragraph.
    - Include a link to a relevant external page or a detailed description.

4. **Contact Section**
    - A contact form with fields for name, email, and message.
    - A submit button.

5. **Footer Section**
    - Your contact information (email address).
    - Links to your social media profiles (if applicable).

## Instructions

1. **Create the HTML Structure**
    - Start with a basic HTML5 template.
    - Use semantic HTML elements such as `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>` to structure your page.

2. **Header Section**
    - Add a heading (`<h1>`) with your name.
    - Create a navigation menu using an unordered list (`<ul>`) with list items (`<li>`) and links (`<a>`).

3. **About Section**
    - Add a section with a heading (`<h2>`) and a paragraph (`<p>`) describing yourself.
    - Include an image using the `<img>` tag with appropriate `src` and `alt` attributes.

4. **Projects Section**
    - Create a section with a heading (`<h2>`) and use an ordered list (`<ol>`) or unordered list (`<ul>`) to list your projects.
    - Each project should have a heading (`<h3>`) and a paragraph (`<p>`). Optionally, add a link to more details.

5. **Contact Section**
    - Add a section with a heading (`<h2>`) and create a form using the `<form>` element.
    - Include input fields for name, email, and message, as well as a submit button.

6. **Footer Section**
    - Add a footer with your contact information and any relevant social media links.

## Example Code

Here’s a basic structure to help you get started:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Web Page</title>
    <link rel="stylesheet" href="styles.css"> <!-- Optional CSS link -->
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <img src="your-image.jpg" alt="A description of the image">
        <p>Write a brief biography or introduction about yourself here.</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li>
                <h3>Project 1</h3>
                <p>Describe your first project here. Include a <a href="https://example.com">link</a> if applicable.</p>
            </li>
            <li>
                <h3>Project 2</h3>
                <p>Describe your second project here. Include a <a href="https://example.com">link</a> if applicable.</p>
            </li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <form action="submit_form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <br>
            <button type="submit">Send</button>
        </form>
    </section>

    <footer>
        <p>Contact me at <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>Follow me on <a href="https://twitter.com/yourprofile">Twitter</a> | <a href="https://linkedin.com/in/yourprofile">LinkedIn</a></p>
    </footer>
</body>
</html>
```