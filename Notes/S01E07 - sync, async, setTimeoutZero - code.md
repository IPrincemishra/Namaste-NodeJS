# Episode-07 | sync, async, setTimeoutZero - code

---

## 1. Synchronous vs Asynchronous Code in Node.js

### 1.1 Synchronous Code

- Synchronous functions (like `fs.readFileSync()`) block the main thread.
- V8 engine executes JS code, but synchronous I/O cannot be offloaded to Libuv.
- **Analogy:** Ice cream shop owner serves one customer at a time, next customer waits until previous is done.

### 1.2 Why is Synchronous Code Important?

- Node.js allows blocking the main thread, but it's not recommended.
- Synchronous methods can cause performance issues by halting code execution until the operation completes.

### 1.3 Best Practice

- Avoid synchronous methods in production, especially for performance-critical apps.
- Prefer asynchronous methods (like `fs.readFile()`) to keep the app responsive.

---

## 2. Blocking Code Example: crypto Module

### 2.1 What is the crypto Module?

- Core Node.js module for cryptography (secure keys, hashing, etc.)
- Imported via `require('crypto')` or `require('node:crypto')` (optional)

### 2.2 pbkdf2Sync vs pbkdf2

- `pbkdf2Sync`: Synchronous, blocks main thread
- `pbkdf2`: Asynchronous, uses Libuv, does not block event loop

### 2.3 How pbkdf2Sync Works

- Takes password and salt to generate a key
- Iterations: More iterations = more secure
- Digest Algorithm: e.g., `sha512`
- Key Length: e.g., 50 bytes
- Callback: Only in async version (`pbkdf2`)

### 2.4 Why Does This Matter?

- Synchronous functions block event loop, can make app unresponsive
- Use async alternatives for better performance

---

## 3. setTimeout(0) and Event Loop

### 3.1 How setTimeout(0) Works

- `setTimeout` is asynchronous, does not block code execution
- Callback is passed to Libuv, added to event queue
- Even with 0ms delay, callback runs only after call stack is empty

### 3.2 Interview Tip

- Output of setTimeout(0) can be tricky: callback runs after global execution context is done, not immediately
- Actual timing depends on call stack state

---
