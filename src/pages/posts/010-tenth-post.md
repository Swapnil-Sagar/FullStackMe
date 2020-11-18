---
title: "Tenth Post - PWA / SPA / AMP"
date: 2020-10-1 12:30:00
author: "Swapnil Sagar"
images: ../../images/PWA.png
tags:
  - App
  - WEB
  - Info
---

#

If you are into Web Development in 2020 and working in latest technologies like React, Gatsby, Etc. then you must be familiar with SPA, PWA and AMP. These are some new abbreviations which every dev should be familiar with. These technologies gave a step-up to the community in terms of Web functionalities. Lets have a look in them one-by-one.

#

##**PWA**

#

_**PWA**_ stands for PROGRESSIVE WEB APP. This is an app built from the web technologies we all know and love, like HTML, CSS, and JavaScript, but with a feel and functionality that rivals an actual native app. Thanks to a couple of smart additions, you can turn almost any website into a progressive web app. This means that you can build a PWA rather quickly, in regards to a native app that’s pretty difficult to develop. Plus, you can offer all the features of native apps, like push notifications, offline support, and much more.

Progressive Web Apps are web apps that use emerging web browser APIs and features along with traditional progressive enhancement strategy to bring a native app-like user experience to cross-platform web applications.

#

Many sites you find online are actually a progressive web app. Take twitter.com, for instance. If you visit that site on your smartphone, you can install it to your home screen. Now, on opening the saved Twitter site, you’ll notice that it looks and performs just like a native app. There’s no browser window or nothing. There’s no difference in running it from an iPhone or an Android smartphone. Simply log in and you’re good to go. That’s a major benefit of building your web app with a PWA in mind.

#

<p align="center">
  <img src="https://i.ibb.co/swQ5x2J/pwa-app.jpg" style="margin:50px 0px">
</p>

#

In order to call a Web App a PWA, technically speaking it should have the following features: **Secure contexts (HTTPS), one or more Service Workers, and a manifest file**.

-> Secure contexts (HTTPS)
The web application must be served over a secure network. Being a secure site is not only a best practice, but it also establishes your web application as a trusted site especially if users need to make secure transactions. Most of the features related to a PWA such as geolocation and even service workers are available only once the app has been loaded using HTTPS.

#

-> Service workers
A service worker is a script that allows intercepting and control of how a web browser handles its network requests and asset caching. With service workers, web developers can create reliably fast web pages and offline experiences.
Manifest file

#

-> A JSON file that controls how your app appears to the user and ensures that progressive web apps are discoverable. It describes the name of the app, the start URL, icons, and all of the other details necessary to transform the website into an app-like format.

#

You can check PWA availablity on a site by accessing **lighout** through inspect element.

For Example:

#

<p align="center">
  <img src="https://i.ibb.co/yWVptWc/pwa-web.jpg" style="margin:50px 0px">
</p>

#

#

#

_*PWAs are gaining popularity. Many big sites are PWAs, like Starbucks.com, Pinterest.com, Washingtonpost.com and Uber.com are actually installable on your home screen and offer a comparable experience to their native apps.*_

---

##**SPA**

A **single-page application (SPA)** is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

#

A (SPA) is a web app or site that fits into one single page. SPA provides a more flexible, desktop-like user-experience and gives better performance.

It allows the development of a smoother and more controlled UX, hiding web complexity (requests, responses, etc.) SPA swaps only the content that is requested by the user, loading HTML data in chunks.

There are two types of SPA: one embeds the content of multiple pages into one ‘shell’ page; with the other, one single app uses Ajax to retrieve content whenever a user clicks a link, so only the content that changes will be updated on the page, while the rest of the page remains with no reloads.

<p align="center">
  <img width="80%" src="https://www.aalpha.net/wp-content/uploads/2019/11/single-page-app-india.gif" style="margin:50px 0px">
</p>

#

---

####Why You Need a Single Page Web App

#

1. It’s perfect if you have a large-scale app with a complex user interface and hundreds of content pages, and you need to satisfy a large and diverse audience (thousands of users) that uses multiple devices

#

2. If you need a super rapid site with dynamic data loading and improved UX

#

---

#

####Advantages of Single Page Apps

➤ Faster and snappier user experience

➤ Decrease in page-load time

➤ No reload or execution with each new page request

➤ Dynamic loading of page or part of page’s content

➤ Simpler interaction for end-user with a single page

---

#

####WHEN TO USE A SPA

You might be asking, “When should I use a single page application?” When you have a business or a personal website that needs a dynamic platform and small data volume, the single-page application is a good idea. It is also a great option if you are planning to develop a mobile app in the future, since, as we mentioned above, the backend API can be used for both the web and mobile apps.

The main drawback is the SEO, but the architecture is suitable for Software-as-a-Service (SaaS) platforms, closed communities, and social networks (which is why Facebook uses it). The reason for this is that these sites don’t need optimization for search on Google.

---

##**AMP**

_**AMP**_ (originally an acronym for **Accelerated Mobile Pages**) is an open source HTML framework developed by the AMP Open Source Project It was originally created by Google as a competitor to Facebook Instant Articles and Apple News.

AMP provides a straightforward way to create web pages that are fast, smooth-loading and prioritize the user-experience above all else.
AMP is a simple and robust format to ensure your website is fast, user-first, and makes money. AMP provides long-term success for your web strategy with distribution across popular platforms and reduced operating and development costs.

---

####In Simpler Words

Technically speaking, AMP removes cumbersome HTML, CSS and JavaScript elements, resulting in a stripped-down page that only includes the most vital content (text, images, videos, and of course, site ads). This makes AMP lightning speed.

**To experience AMP Webiste yourself [Click Here](https://amp-article.herokuapp.com/)**

#

---

#

#####**What makes AMP pages load so quickly?**

Google has a strict set of optimisations that significantly improve page loading times:

➥ Allow only asynchronous scripts

➥ Size all resources statically

➥ Don’t let extension mechanisms block rendering

➥ Keep all third-party JavaScript out of the critical path

➥ All CSS must be inline and size-bound

➥ Font triggering must be efficient

➥ Minimise style recalculations

➥ Only run GPU-accelerated animations

➥ Prioritise resource loading

➥ Load pages in an instant

---

#

Example:

```
<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    <link rel="canonical" href="https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
  <body>
    <h1>Welcome to the mobile web</h1>
  </body>
</html>
```

---

Read the official AMP Documentation [HERE](https://amp.dev/documentation/?format=websites)
