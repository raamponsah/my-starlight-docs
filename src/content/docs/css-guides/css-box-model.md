---
title: CSS Box Model
description: Introduction to CSS Box Model
---

# CSS Box Model

The CSS Box Model is a fundamental concept that describes how elements are structured and rendered in a web page. Every element in HTML is considered a rectangular box, and the Box Model defines the space taken up by these boxes.

## Box Model Components

The Box Model consists of the following components, from the inside out:

1. **Content**: The actual content of the box, where text and images appear.
2. **Padding**: The space between the content and the border. Padding is transparent and can be set on all four sides (top, right, bottom, left).
3. **Border**: The border that wraps around the padding (if any) and content. Borders can have different styles, widths, and colors.
4. **Margin**: The space outside the border. Margins are transparent and can be set on all four sides. Margins can also be used to create space between elements.

## Visual Representation

Here is a visual representation of the Box Model:

![CSS Box Model Diagram](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

The total width of an element is calculated by adding the left and right borders, left and right padding, and the width of the content. The total height is calculated similarly, using the top and bottom borders, padding, and content height.

## Box-Sizing Property

The `box-sizing` property allows you to control how the width and height of an element are calculated. There are two main values:

- **content-box**: This is the default value. The width and height properties include only the content, and padding and border are added outside of this.
- **border-box**: The width and height properties include padding and border, making it easier to size elements without worrying about additional space.

### Example of box-sizing

```css
.box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
}
```