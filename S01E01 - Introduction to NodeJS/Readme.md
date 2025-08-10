# S01E01 - Introduction to NodeJS

```txt
"Any application that can be written in JavaScript, will eventually be written in JavaScript." - Jeff Atwood, 2007, Founder of Stack Overflow
```

## What is exactly NodeJS?

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code server-side, enabling the creation of scalable network applications.
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### JS runtime

- A JavaScript runtime is an environment in which JavaScript code can be executed. It includes the JavaScript engine, which interprets and executes the code, as well as other components such as APIs and libraries that provide additional functionality.
- Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of a web browser. This enables the creation of server-side applications using JavaScript, which was traditionally only used for client-side scripting in web browsers.

### NodeJS is Cross-Platform

- Node.js is cross-platform, meaning it can run on various operating systems such as Windows, macOS, and Linux. This allows developers to write code once and run it anywhere, making it a versatile choice for building applications that need to operate across different environments.

### Community which manage nodejs

- The Node.js Foundation, now part of the OpenJS Foundation, is responsible for managing the development and maintenance of Node.js. It is a collaborative effort involving contributors from around the world, including individual developers, companies, and organizations that use Node.js in their projects.

## Event-Driven Architecture

- Node.js uses an event-driven architecture, which means that it operates on an event loop that listens for events and executes callbacks when those events occur. This allows Node.js to handle multiple operations concurrently without blocking the execution of other code, making it highly efficient for I/O-bound tasks.

## Asynchronous I/O (Non-Blocking I/O)

- Asynchronous I/O is a key feature of Node.js that allows it to perform non-blocking operations. Instead of waiting for an I/O operation (such as reading a file or making a network request) to complete before moving on to the next task, Node.js initiates the operation and continues executing other code. When the I/O operation is complete, a callback function is invoked to handle the result. This approach improves the overall performance and responsiveness of applications, especially those that rely heavily on I/O operations.

## Development History

- **2009**  
  - Ryan Dahl developed Node.js in 2009.
  - To run JavaScript code, you need a JavaScript engine, whether it's in a browser like Chrome or a server environment.
  - Initially, Ryan worked with Spider Monkey (Firefox), a JavaScript engine, but switched to the V8 engine from Google Chrome due to its performance.
  - Ryan developed Node.js independently, but Joyent, a company interested in similar technologies, supported him. Originally called `web.js`, it was later renamed to `Node.js` when its full potential became clear.

- **2009–2010**  
  - `Node.js` is released as an open-source project, gaining traction among developers for its ability to build scalable network applications using JavaScript on the server side.

- **2010**  
  - The **Node Package Manager (npm)** is introduced, enabling developers to share and manage JavaScript packages more easily.

- **2011**
  - `Node.js` introduces support for the **Windows** operating system. before that it was only available for Linux and MacOS.

- **2012**
  - Ryan Dahl steps away from the project, passing leadership to Isaac Schlueter which was also creator of npm.

- **2014**  
  - Fedor created a fork of Node.js called `io.js` to address concerns about the pace of development and governance issues within the Node.js project. this created more confusion b/w the two projects.

- **2015**  
  - The **Node.js Foundation** is formed. `io.js` and `Node.js` merge with the release of **Node.js v4.0.0**, reuniting the ecosystem.

- **2019**
  - JS Foundation and Node.js Foundation merge to form the **OpenJS Foundation**, which aims to support the growth and adoption of JavaScript and its related technologies.

- **Present**
  - Node.js continues to evolve with regular updates, new features, and improvements. It has a vibrant ecosystem of libraries and frameworks, making it a popular choice for building modern web applications and services.

---

Today, Node.js is a core part of modern web development stacks such as **MERN** and **MEAN**, and is used by companies worldwide for backend services, APIs, real-time apps, and more.
