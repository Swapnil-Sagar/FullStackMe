---
title: 'Seventh Post - NodeJS'
date: 2020-08-30 22:00:00
author: 'Viral Sangani'
images: ../../images/typescript.jpeg
tags:
    - TYPESCRIPT
    - JS
    - BACKEND
    - INTERMEDIATE
---

##Typescript

 Typescript essentially is a strict, typed language unlike javascript. Typescript was created and maintained by Microsoft. Typescript compiles code to readable, standard bases javascript code. The important thing about typescript is that it allows to add static types to javascript code and doing so helps us to catch the error way earlier and helps in debugging process.

 TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). There are multiple options available for transcompilation. Either the default TypeScript Checker can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.


####Setup

```
    npx create-react-app my-app-name --template typescript
    
```

Next we will setup the linters for typescript because who doesn't want cleaner and standard code. In this, I'll be using the legend ESLint and Prettier combo.

```
    npm install --save-dev eslint@6.8.x @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier --dev
```


Find out all the steps in the author's blog : [Typescript for Noobs](https://blog.viralsangani.me/posts/typescript-for-noobs/)

To know more visit: [Typescript](https://en.wikipedia.org/wiki/TypeScript#:~:text=TypeScript%20is%20an%20open%2Dsource,applications%20and%20transcompiles%20to%20JavaScript.)

