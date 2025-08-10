
# S01E02 - JS on Server

## 1. What is a Server?

- A server is a computer or system that provides resources, data, services, or programs to other computers (clients) over a network.
- Common server purposes:
  - Hosting websites
  - Managing emails
  - Storing files

---

## 2. Node.js & V8 Engine

- **Node.js** is written in C++.
- **V8 Engine** (used in Node.js and Google Chrome) is also written in C++.
- V8 compiles JavaScript to native machine code for better performance.
- Uses just-in-time (JIT) compilation to optimize code execution.

---

## 3. ECMAScript

- ECMAScript is the specification that forms the basis for JavaScript.
- It standardizes core language features for consistency across implementations.
- Popular versions:
  - ES5 (ECMAScript 5)
  - ES6 (ECMAScript 2015) — introduced major improvements

## V8 C++ mein kyu likha gaya hai?

Computer ko samajh aata hai sirf binary code. Lekin hum log high-level language (jaise C++ ya JavaScript) mein likhte hain. C++ ek powerful language hai jo hardware ke bohot kareeb hai, isliye V8 engine ko C++ mein banaya gaya hai taaki performance fast ho aur direct hardware access mil sake.

Ek simple flow:
`High-level language (C++) → Machine Code → Assembly Language → Binary Code → Computer samajhta hai`
