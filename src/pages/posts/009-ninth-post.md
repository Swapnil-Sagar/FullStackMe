---
title: "Ninth Post - SASS"
date: 2020-09-20 21:00:00
author: "Swapnil Sagar"
images: ../../images/sass.png
tags:
  - CSS
  - FRONTEND
  - BASICS
---

#

##SASS - "CSS on Steroids"

#

####What is SAAS
Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself which is an extension to CSS.

Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.[2] It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS" (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.

CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them. Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file. The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .css file whenever the .sass or .scss file is saved.

SASS Example

Let's say we have a website with three main colors:

![](https://i.ibb.co/J266H5G/sasseg.jpg)

In normal CSS you can directly use the HEX code but in SASS you can store the color values in a variable and use that variable everywhere instread

```
/* define variables for the primary colors */
$primary_1: #a2b9bc;
$primary_2: #b2ad7f;
$primary_3: #878f99;

/* use the variables */
.main-header {
  background-color: $primary_1;
}

.menu-left {
  background-color: $primary_2;
}

.menu-right {
  background-color: $primary_3;
}
```

####Why use SASS over standard CSS

1. Sass facilitates you to write clean, easy and less CSS in a programming construct.
2. It contains fewer codes so you can write CSS quicker.
3. It is more stable, powerful, and elegant because it is an extension of CSS. So, it is easy for designers and developers to work more efficiently and quickly.
4. It is compatible with all versions of CSS. So, you can use any available CSS libraries.
5. It provides nesting so you can use nested syntax and useful functions like color manipulation, math functions and other values.

**BUT** using SASS has a major drawbacks which is it may cause of losing benefits of browser's built-in element inspector.

-> Data structures: at least hashmap (every JS object is really just a hashmap), arrays/lists.

#

-> Common algorithms for sorting/searching and their tradeoffs: this is important for writing efficient JS. Say if you have a large data set in memory, whats the best way of displaying it to the user is sorted order? You may not always need to write this yourself, but it's very important to understand how it works.

#

-> Memory use and efficiency: you may not need to know exactly how memory is allocated in the browser, but you should definitely know the most efficient ways to store data in memory and how that may trade off with performance.

#

For any web development

- HTTP/Network communication - this is really important for debugging issues (things like Chrome's inspect element). Know how each tab works and what it's for.

####But....What you should know?

Apart from our beloved array what other Data structurs should be known :

- **Maps/Dictionaries** are useful when you want to store and access items in a key-value way. Some people try to achieve this in an inefficient and cumbersome way with arrays and indexOf. **JavaScript** objects behave like dictionaries and you should use them instead.
- #
- **Trees** are used to implement the DOM structure, knowing how trees work will help you structure and navigate in your DOM. Such knowledge is also fundamental to have something like Facebook's React diff algorithm that minimizes the changes in the DOM tree to improve rendering performance. And in case you also happen to write server-side code, it will help you understand how database indices work and why they are important.
- #
- If you want to have quick access to the maximum or minimum value in a collection, like a **priority queue** for example, you should probably be using a **Heap.**
- #
- Talking about **Queues**, they actually model the way events are processed.
- #
- And **Stacks** will probably make it easier for you to understand how to handle the states in your single page app. It will also help you grasp recursion.
- #

![](https://i.ibb.co/X8pstj3/progdesk.png)

#

#####_If you start working on the front-end of web applications or web sites as a front-end engineer, you will inevitably run into issues or interactions with backend systems. In these cases it's very advantageous to be able to know a thing or two about the backend systems, how parts (or all!) of it works and the data structures and algorithmic techniques used._

#

#
