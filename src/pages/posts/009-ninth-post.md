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

---

Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.[2] It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS" (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively.

CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them. Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file. The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .css file whenever the .sass or .scss file is saved.

---

####SASS Example

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

So, when using Sass, and you need to change the primary color, you only need to change it in one place.

---

####How Does Sass Work?

- A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS.

- This process is called transpiling. So, you need to give a transpiler (some kind of program) some Sass code and then get some CSS code back.

#

- Sass keeps the CSS code **DRY (Don't Repeat Yourself)**. One way to write DRY code is to keep related code in separate files.

- You can create small files with CSS snippets to include in other Sass files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc.

---

####Sass Importing Files
Just like CSS, Sass also supports the `@import` directive.

The `@import` directive allows you to include the content of one file in another.

The CSS `@import` directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it. However, the Sass `@import` directive includes the file in the CSS; so no extra HTTP call is required at runtime!

---

####Sass Import Syntax:

```
@import filename;

/*Example*/

@import "variables";
@import "colors";
@import "reset";
```

---

####Why use SASS over standard CSS

1. Sass facilitates you to write clean, easy and less CSS in a programming construct.
2. It contains fewer codes so you can write CSS quicker.
3. It is more stable, powerful, and elegant because it is an extension of CSS. So, it is easy for designers and developers to work more efficiently and quickly.
4. It is compatible with all versions of CSS. So, you can use any available CSS libraries.
5. It provides nesting so you can use nested syntax and useful functions like color manipulation, math functions and other values.

**BUT** using SASS has a major drawbacks which is it may cause of losing benefits of browser's built-in element inspector.
