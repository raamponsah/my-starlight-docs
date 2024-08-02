---
title: HTML Forms
description: Introduction to HTML Forms
---

HTML forms are used to collect user input and send it to a server for processing. Forms can contain various types of input elements like text fields, checkboxes, radio buttons, and submit buttons.

## Basic Form Structure

A basic HTML form includes a `<form>` element that contains form elements. The `<form>` element should have the `action` and `method` attributes.

```html
<form action="/submit" method="post">
    <!-- form elements go here -->
</form>
```

#### action: Specifies the URL where the form data should be sent.
#### method: Specifies the HTTP method to use when sending the form data (GET or POST).
## Input Elements
#### Text Input
The <input type="text"> element creates a single-line text input field.

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
</form>
```
#### Password Input
The <input type="password"> element creates a single-line text input field that obscures the entered text.

```html
<form action="/submit" method="post">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
</form>
```
### Radio Buttons
The <input type="radio"> element creates a radio button. Radio buttons with the same name attribute are grouped together, allowing only one to be selected.

```html
<form action="/submit" method="post">
    <label for="gender-male">Male</label>
    <input type="radio" id="gender-male" name="gender" value="male">

    <label for="gender-female">Female</label>
    <input type="radio" id="gender-female" name="gender" value="female">
</form>
```
### Checkboxes
The <input type="checkbox"> element creates a checkbox that allows multiple selections.

```html
<form action="/submit" method="post">
    <label for="subscribe">Subscribe to newsletter</label>
    <input type="checkbox" id="subscribe" name="subscribe">
</form>
```
### Submit Button
The <input type="submit"> element creates a button that submits the form.

```html
<form action="/submit" method="post">
    <input type="submit" value="Submit">
</form>
```
### Select Dropdown
The <select> element creates a dropdown list.

```html
<form action="/submit" method="post">
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select>
</form>
```
### Textarea
The <textarea> element creates a multi-line text input field.

```html
<form action="/submit" method="post">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" cols="50"></textarea>
</form>
```
### Example Form
Here is an example of a complete form with various input elements:

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Form Example</title>
</head>
<body>

<h2>Contact Form</h2>

<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    
    <label for="gender">Gender:</label><br>
    <input type="radio" id="gender-male" name="gender" value="male">
    <label for="gender-male">Male</label><br>
    <input type="radio" id="gender-female" name="gender" value="female">
    <label for="gender-female">Female</label><br><br>
    
    <label for="hobbies">Hobbies:</label><br>
    <input type="checkbox" id="hobbies-reading" name="hobbies" value="reading">
    <label for="hobbies-reading">Reading</label><br>
    <input type="checkbox" id="hobbies-traveling" name="hobbies" value="traveling">
    <label for="hobbies-traveling">Traveling</label><br><br>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select><br><br>
    
    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
    
    <input type="submit" value="Submit">
</form>

</body>
</html>
```
Conclusion
HTML forms are a fundamental part of web development, enabling user interaction and data collection. By understanding the various form elements and their attributes, you can create comprehensive and functional forms for your web applications.