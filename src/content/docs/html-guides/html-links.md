---
title: HTML Links
description: Notes for the HTML Links page in the workshop documentation site.
---

## Overview

HTML links allow users to navigate from one page to another or to a specific location within a page. Links are created using the `<a>` (anchor) element.

## Creating a Link

To create a basic link, use the `<a>` element with the `href` attribute specifying the URL of the page you want to link to.

```html
<a href="https://www.example.com">Visit Example.com</a>
```
## Linking to a Specific Section
You can link to a specific section within a page using an anchor (id) attribute. First, add an id to the target element, then create a link to that id.

#### Target Section
```html
<h2 id="section1">Section 1</h2>
<p>This is the content of Section 1.</p>

```
#### Link to Section
```html
<a href="#section1">Go to Section 1</a>
```

## Linking to Email Addresses
To create a link that opens an email client, use the mailto: scheme in the href attribute.
```html
<a href="mailto:example@example.com">Send Email</a>

```

## Opening Links in a new tab
To open a link in a new tab, add the target="_blank" attribute to the <a> element.
```html

<a href="https://www.example.com" target="_blank">Open Example.com in a New Tab</a>

```

## Links with Titles
You can provide additional information about a link using the title attribute. This text is displayed as a tooltip when the user hovers over the link.
```html
<a href="https://www.example.com" title="Visit Example.com for more information">Visit Example.com</a>

```