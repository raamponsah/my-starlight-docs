---
title: CSS Grid Layout
description: Introduction to CSS Grid Layout
---

# CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system for the web. It allows you to layout items in rows and columns, making it easier to design complex web pages.

## Grid Container and Grid Items

A grid layout starts with a grid container, which contains grid items. The grid container is an element with `display: grid`.

### Grid Container

To create a grid container, you use the `display` property:

```css
.container {
    display: grid;
}
```
## Grid Items
All direct children of the grid container automatically become grid items. Here is an example of HTML with a grid container and grid items:

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
</div>
```
## Defining Rows and Columns
You can define the rows and columns of the grid using the grid-template-rows and grid-template-columns properties.

```css
.container {
display: grid;
grid-template-columns: 1fr 1fr 1fr; /* Three equal columns */
grid-template-rows: auto; /* Rows adjust to the content */
}
```

1fr means one fraction of the available space.
### Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px; /* Adds space between grid items */
}

.item {
background-color: lightblue;
border: 1px solid blue;
padding: 20px;
text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
</div>

</body>
</html>
```
In this example, the container has three columns, and the grid items are placed into these columns.

### Placing Items in the Grid
You can place items in specific grid areas using the grid-column and grid-row properties.

### Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}

.item1 {
grid-column: 1 / 3; /* Item spans from column 1 to 3 */
grid-row: 1 / 2; /* Item spans from row 1 to 2 */
}

.item2 {
grid-column: 2 / 4; /* Item spans from column 2 to 4 */
grid-row: 2 / 3; /* Item spans from row 2 to 3 */
}

.item {
background-color: lightblue;
border: 1px solid blue;
padding: 20px;
text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item item1">Item 1</div>
    <div class="item item2">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
</div>

</body>
</html>
```

In this example, Item 1 spans two columns and one row, and Item 2 spans two columns and one row as well.

### Grid Template Areas
You can also define grid areas using the grid-template-areas property.

### Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px;
    grid-template-areas:
        'header header header'
        'main main sidebar'
        'footer footer footer';
    grid-gap: 10px;
}

.header {
grid-area: header;
}

.main {
grid-area: main;
}

.sidebar {
grid-area: sidebar;
}

.footer {
grid-area: footer;
}

.item {
background-color: lightblue;
border: 1px solid blue;
padding: 20px;
text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item header">Header</div>
    <div class="item main">Main</div>
    <div class="item sidebar">Sidebar</div>
    <div class="item footer">Footer</div>
</div>

</body>
</html>
```
In this example, the grid areas are defined using names, making the layout more readable.

## Conclusion
CSS Grid Layout is a powerful tool for creating complex web layouts. By understanding the properties and how they interact, you can design intricate and flexible web page layouts with ease.