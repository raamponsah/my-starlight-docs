---
title: HTML List
description: Notes for the HTML Introduction page in the workshop documentation site.
---

## Overview

HTML lists are used to group a set of related items together. There are three types of lists in HTML:

1. **Ordered Lists** (`<ol>`)
2. **Unordered Lists** (`<ul>`)
3. **Description Lists** (`<dl>`)

## Ordered Lists

An ordered list is used when the sequence of items is important. Items are numbered automatically.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

## Example
```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>
```

## Unordered List

```html
<ul>
    <li>Car</li>
    <li>Mango</li>
    <li>House</li>
</ul>

```

## Description Lists

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description of Term 1</dd>
  <dt>Term 2</dt>
  <dd>Description of Term 2</dd>
</dl>
```
### Example
```html
<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
    <dt>JavaScript</dt>
    <dd>Programming language for web development</dd>
</dl>

```