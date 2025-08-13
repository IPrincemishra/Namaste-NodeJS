# S01E06 - libuv & async IO

## event-driven architecture capable of asynchronous I/O

### V8 JS architecture

- Single-threaded event loop
- Non-blocking I/O operations
- Callbacks, Promises, and async/await for handling asynchronous code

### NodeJS architecture

- Built on top of the V8 JavaScript engine
- Uses libuv for handling asynchronous I/O
- Event-driven, non-blocking I/O model
- Supports a wide range of I/O operations (file system, network, etc.)

## synchronous vs asynchronous

### synchronous I/O

- In this code is executed in a synchronous manner, the event loop is blocked until the file is read.
- This can lead to performance issues, especially for I/O-bound operations.
- Synchronous I/O can be simpler to reason about, as it follows a linear execution model.

### example of synchronous I/O

- Reading a file synchronously
- Blocking the event loop until the file is read
- Example code:

```js
    const fs = require('fs');
    const data = fs.readFileSync('/path/to/file', 'utf8');
    console.log(data);
```

### asynchronous I/O

- In this code is executed in an asynchronous manner, the event loop is not blocked while waiting for the file to be read.
- This allows other operations to be processed concurrently, improving overall performance.
- Asynchronous I/O can be more complex to reason about, as it involves callbacks, Promises, or async/await.

### example of asynchronous I/O

```js
    const fs = require('fs');
    fs.readFile('/path/to/file', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
```

- `fs.readFile` uses a callback to handle the result once the file is read, allowing the event loop to continue processing other events in the meantime.
- This non-blocking behavior is a key feature of Node.js and is made possible by the underlying libuv library, which provides the asynchronous I/O capabilities.
- `fs.readFile` is just one example of how Node.js handles asynchronous I/O; many other modules and APIs in Node.js follow a similar pattern.

## V8 JS Engine

### Call Stack

- The call stack is a data structure that keeps track of function calls in a program.
- When a function is called, a new frame is added to the top of the stack.
- When the function returns, its frame is removed from the stack.
- The call stack is used to manage the execution context of functions, including local variables and the current position in the code.

### Memory heap

- The memory heap is a region of memory used for dynamic memory allocation.
- Objects and data structures are allocated on the heap at runtime.
- The heap is managed by the V8 garbage collector, which automatically reclaims memory that is no longer in use.

### Garbage Collector

- The garbage collector is a component of the V8 engine responsible for automatic memory management.
- It identifies and reclaims memory occupied by objects that are no longer reachable or in use by the program.
- This process helps prevent memory leaks and optimizes the use of available memory.
- The garbage collector uses various algorithms, such as mark-and-sweep and generational garbage collection, to efficiently manage memory.

## libuv

- Provides an abstraction layer for asynchronous I/O operations
- Handles file system, network, and other I/O tasks
- Uses a thread pool for blocking operations
- Integrates with the Node.js event loop
- Provides a consistent API for asynchronous I/O across different platforms
