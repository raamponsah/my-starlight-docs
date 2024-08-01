---
title: HTML Images
description: Notes for the HTML Images page in the workshop documentation site.
---

## Overview

HTML images are used to embed visual content in a webpage. Images are created using the `<img>` element.

## Adding an Image

To add an image to a webpage, use the `<img>` element with the `src` attribute specifying the URL of the image file. You should also include the `alt` attribute to provide alternative text for accessibility.

```html
<img src="https://www.example.com/image.jpg" alt="Description of the image">
```

- src: Specifies the path to the image file. This can be a relative or absolute URL.
- alt: Provides alternative text for the image if it cannot be displayed. This text is crucial for accessibility and SEO.
- 
### Example
```html
<img src="https://www.example.com/image.jpg" alt="A description of the image">
```

### Setting Image Dimensions
You can control the size of the image using the width and height attributes. These values are specified in pixels.

#### Example
``` html
<img src="https://www.example.com/image.jpg" alt="Description of the image" width="300" height="200">
```

### Responsive Images
To ensure that images are responsive and adapt to different screen sizes, you can use CSS. A common approach is to set the image's max-width to 100% and the height to auto.

#### Example
```html
<img src="https://www.example.com/image.jpg" alt="Description of the image" style="max-width: 100%; height: auto;">
```

### Image as a Link
You can use an image as a clickable link by wrapping the <img> element with an <a> (anchor) element.

#### Example
```html
<a href="https://www.example.com">
<img src="https://www.example.com/image.jpg" alt="Description of the image">
</a>
```

### Images with Titles
To provide additional information about an image, use the title attribute. This text appears as a tooltip when users hover over the image.

#### Example
```html
<img src="https://www.example.com/image.jpg" alt="Description of the image" title="Additional information about the image">
```

## Alt Attribute Best Practices
- Descriptive Text: The alt attribute should convey the meaning or purpose of the image.
- Contextual Relevance: Ensure the text is relevant to the surrounding content.
- Avoid Redundancy: If an image is purely decorative, use an empty alt attribute (alt="") to indicate that it should be ignored by screen readers.

## Conclusion
Using images effectively enhances the visual appeal and usability of your web pages. By properly utilizing the `<img>` element and its attributes, you can create responsive, accessible, and informative images that improve the overall user experience.

