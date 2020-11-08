---
title: "Eighth Post - Data Structure && Web Development"
date: 2020-09-9 21:00:00
author: "Swapnil Sagar"
images: ../../images/dsa+web.png
tags:
  - DSA
  - WEB
  - Info
  - BASICS
---

#

##DATA STRUCTURE AND WEB DEVELOPMENT

#

As a CS student and also a web development enthusiast I can say that there are two parts to this answer one pertains to what you have to know and the second what you should know. Both were asked and I see those as quite different. The former being the minimum to get by and the later being what sets you up for future success.

First of all, it's important to define "Web Developer" to understand what have to know. If we are talking about a front-end engineer, I see the following common languages to be required:

1. HTML
2. CSS
3. JavaScript (including a couple frameworks)

####Where does Data structure comes in the role for web development?

For HTML and CSS, there is a minimal amount of data structure and algorithmic knowledge required or actually none.

But in order to write effective JavaScript or even use common JS frameworks it's very important to have a good understanding of:

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
