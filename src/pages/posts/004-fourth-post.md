---
title: 'Fourth Post - The JavaScript'
date: 2020-08-28 05:00:00
author: 'Swapnil Sagar'
images: ../../images/JavaScript.jpg
tags:
    - JS
    - FRONTEND
    - BASICS
---

##JavaScript 

is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

####What can it really do?

The core client-side JavaScript language consists of some common programming features that allow you to do things like:

    Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called name.
    Operations on pieces of text (known as "strings" in programming). In the above example we take the string "Player 1: " and join it to the name variable to create the complete text label, e.g. ''Player 1: Chris".
    Running code in response to certain events occurring on a web page. We used a click event in our example above to detect when the button is clicked and then run the code that updates the text label.
    And much more!

Example

`const para = document.querySelector('p');`

`para.addEventListener('click', updateName);`

`function updateName() {`
`  let name = prompt('Enter a new name');`
`  para.textContent = 'Player 1: ' + name;`
`}`

 To know more visit: [https://en.wikipedia.org/wiki/HTML](url)