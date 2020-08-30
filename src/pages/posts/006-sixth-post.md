---
title: 'Sixth Post - NodeJS'
date: 2020-08-30 21:00:00
author: 'Swapnil Sagar'
images: ../../images/nodejs.jpg
tags:
    - NODEJS
    - JS
    - BACKEND
    - INTERMEDIATE
---

##Node.js 

 As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.


```
    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
    });

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });
    
```


####So what is it used for?

 Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.

####Is Node.js a framework?

 No, it's an environment, and back-end frameworks run within it. Popular ones include Express.js (or simply Express) for HTTP servers and Socket.IO for WebSocket servers.

To know more and download yourself visit: [Node.JS](https://nodejs.org/en/about/)

