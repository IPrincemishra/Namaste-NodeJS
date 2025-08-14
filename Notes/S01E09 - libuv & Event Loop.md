# Episode-09 | libuv & Event Loop

---

## 1. Introduction to libuv & Event Loop

- libuv is the core of Node.js's asynchronous handling.
- Manages event loop, callback queues, and thread pools for non-blocking I/O.
- Allows Node.js to perform non-blocking I/O even though JS is single-threaded.
- Tasks offloaded to libuv: file system ops, DNS lookups, network requests, etc.

---

## 2. Callback Queue & Thread Pool

- Callback queue: Stores callbacks after async ops complete; event loop executes them when call stack is empty.
- Thread pool: Handles time-consuming tasks (file system, crypto) that would block the event loop.
- Example: File read operation is offloaded to libuv, callback is queued and executed when V8 is free.

---

## 3. Multiple Async Tasks & Separate Queues

- libuv maintains separate callback queues for timers, API calls, file reads, etc.
- Event loop monitors call stack; when empty, it pushes tasks from callback queues to call stack for execution.
- Ensures non-blocking nature and correct order of execution.

---

## 4. Event Loop Phases in libuv

### 4.1 Timers Phase

- Executes callbacks set by setTimeout/setInterval if their time has expired.

### 4.2 Poll Phase

- Handles I/O callbacks (e.g., fs.readFile), executes I/O-related tasks.

### 4.3 Check Phase

- Executes callbacks scheduled by setImmediate.

### 4.4 Close Callbacks Phase

- Handles callbacks for closing operations (e.g., socket closures, cleanup).

---

## 5. Microtasks: process.nextTick() & Promises

- Before each main phase, event loop processes pending microtasks.
- Microtasks: process.nextTick() and Promise callbacks.
- Ensures microtasks are handled before moving to next phase.

---

## 6. Event Loop Execution Flow (Code Output Examples)

### Q1: Output Order Example

**Code:**

```js
const a = 100;
setImmediate(() => console.log("setImmediate"));
fs.readFile(..., () => console.log("File Reading CB"));
setTimeout(() => console.log("Timer expired"), 0);
function printA() { console.log("a=", a); }
printA();
console.log("Last line of the file.");
```

**Output:**

```js
a = 100
Last line of the file.
Timer expired
setImmediate
File Reading CB
```

### Q2: Output Order with Microtasks

**Code:**

```js
const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmediate"));
Promise.resolve("promise").then(console.log);
fs.readFile(..., () => console.log("File Reading CB"));
setTimeout(() => console.log("Timer expired"), 0);
process.nextTick(() => console.log("Process.nextTick"));
function printA() { console.log("a=", a); }
printA();
console.log("Last line of the file.");
```

**Output:**

```js
a = 100
Last line of the file.
Process.nextTick
promise
Timer expired
setImmediate
File Reading CB
```

---

## 7. Event Loop Waiting State

- When event loop is empty, it enters poll phase and waits for incoming events.

---

## 8. Advanced Output Example (Nested Microtasks)

**Code:**

```js
const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve("promise").then(console.log);
fs.readFile(..., () => {
  setTimeout(() => console.log("2nd timer"), 0);
  process.nextTick(() => console.log("2nd nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("File reading CB");
  process.nextTick(() => console.log("Porcess.nextTick"));
});
console.log("Last line of the file.");
```

**Output:**

```text
Last line of the file.
Process.nextTick
promise
Timer expired
setImmediate
2nd setImmediate
2nd timer
File reading CB
```

---

## 9. Microtask Priority

- process.nextTick callbacks have higher priority than other async ops.
- Nested process.nextTick callbacks execute inner before outer.

---

## 10. Final Output Example (Nested nextTick)

**Code:**

```js
const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve("promise").then(console.log);
fs.readFile(..., () => console.log("File reading CB"));
process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("Process.nextTick");
});
console.log("Last line of the file.");
```

**Output:**

```text
Last line of the file.
Process.nextTick
inner nextTick
promise
Timer expired
setImmediate
File reading CB
```

---
