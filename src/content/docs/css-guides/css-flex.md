---
title: CSS Flexbox
description: Introduction to CSS Flexbox
---

# CSS Flexbox

CSS Flexbox (Flexible Box Layout) is a layout module that makes it easier to design flexible and responsive layout structures without using float or positioning.

## Flex Container and Flex Items

A flex container is an element with `display: flex`. Inside this flex container, the child elements become flex items.

### Flex Container

To create a flex container, you use the `display` property:

```css
.container {
    display: flex;
}
```

## Flex Items
All direct children of the flex container automatically become flex items. Here is an example of HTML with a flex container and flex items:

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```
## Flexbox Properties
Container Properties
### flex-direction: Defines the direction of the flex items in the flex container.

```css
.container {
flex-direction: row; /* row | row-reverse | column | column-reverse */
}
```
### justify-content: Aligns the flex items along the main axis.

```css
.container {
justify-content: flex-start; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
}
```

### align-items: Aligns the flex items along the cross axis.

```css
.container {
align-items: stretch; /* stretch | flex-start | flex-end | center | baseline */
}
```
### flex-wrap: Specifies whether the flex items should wrap or not.

```css
.container {
flex-wrap: nowrap; /* nowrap | wrap | wrap-reverse */
}
```

### align-content: Aligns the flex lines when there is extra space in the cross axis.

```css
.container {
align-content: stretch; /* stretch | flex-start | flex-end | center | space-between | space-around */
}
```
## Item Properties
### order: Specifies the order of the flex items.

```css
.item {
order: 1; /* Default is 0 */
}
```
### flex-grow: Defines the ability of a flex item to grow if necessary.

```css
.item {
flex-grow: 1; /* Default is 0 */
}
```

### flex-shrink: Defines the ability of a flex item to shrink if necessary.

```css
.item {
flex-shrink: 1; /* Default is 1 */
}
```
### flex-basis: Defines the default size of an element before the remaining space is distributed.

```css
.item {
flex-basis: auto; /* Default is auto */
}
```
### align-self: Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

```css
.item {
align-self: auto; /* auto | flex-start | flex-end | center | baseline | stretch */
}
```

### Example
Here is a complete example demonstrating the use of CSS Flexbox:

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    background-color: lightgray;
}

.item {
background-color: cornflowerblue;
color: white;
padding: 20px;
font-size: 20px;
text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>

</body>
</html>
```
In this example, the container is a flex container with three flex items. The flex items are distributed evenly along the main axis, centered along the cross axis, and have padding and background color for visual clarity.

Conclusion
CSS Flexbox is a powerful tool for creating flexible and responsive layouts. By understanding the properties and how they interact, you can create complex layouts with ease.