
# S01E04 - module.export & require

## Common JS Module (cjs)

### Import kaise karte hain ?

Kisi dusre file se function ya variable use karna hai? Bas `require` ka use karo:

```javascript
// app.js
const greet = require('./greet');
console.log(greet('World')); // Output: Hello, World!
```

### Export kaise karte hain?

Agar tumhare file mein multiple functions/variables hain, toh sabko `module.exports` mein daal do:

```javascript
// utils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { 
    add, 
    subtract 
};
```

### Multiple Export ka import

Destructuring se import karo, easy hai:

```javascript
// app.js
const { add, subtract } = require('./utils');
console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### require ka asli kaam

Jab bhi `require` use karte ho, Node.js poora file execute karta hai. Lekin sirf `module.exports` wali cheezein bahar aati hain.

```javascript
// data.js
const secret = 'hidden';
const publicData = 'visible';
module.exports = publicData;
```

```javascript
// app.js
const data = require('./data');
console.log(data); // Output: visible
console.log(secret); // Error: secret is not defined
```

## ES Modules (mjs)

### Import kaise karte hain?

- `import` keyword ka use karo
- File extension `.mjs` hona chahiye

```javascript
// module.mjs
export function greet(name) {
  return `Hello, ${name}!`;
}

// app.mjs
import { greet } from './module.mjs';
console.log(greet('World')); // Output: Hello, World!
```

### Export kaise karte hain ?

- `export` keyword ka use karo
- Ek file mein multiple cheezein export kar sakte ho

```javascript
// module.mjs
export function greet(name) {
  return `Hello, ${name}!`;
}
export const pi = 3.14;
```

```javascript
// app.mjs
import { greet, pi } from './module.mjs';
console.log(greet('World')); // Output: Hello, World!
console.log(pi); // Output: 3.14
```

**`In this course we are using CJS`**

## How to export module aa a folder

Agar tumhe poore folder ko module banana hai, toh us folder mein ek `index.js` file banao. Is file mein sabhi functions/variables ko export karo.

```javascript
// calculate/index.js
const { calculateMultiply } = require('./multiply');
const { calculateDivide } = require('./divide');
module.exports = {
    calculateMultiply,
    calculateDivide
};
```

```javascript
// app.js
const { calculateMultiply, calculateDivide } = require('./calculate');
console.log(calculateMultiply(5, 3)); // Output: 15
console.log(calculateDivide(5, 3));   // Output: 1.6666666666666667
```

- `calculate/index.js` file mein sabhi functions ko import karke export kiya gaya hai.
- `app.js` file mein in functions ko destructuring se import kiya gaya hai.
- `index.js` file ki wajah se hume individual files ko import karne ki zarurat nahi hai.
- `index.js` file ko import karte waqt, hume folder ka naam dena hota hai, jaise `require('./calculate')`.
- Is tarike se hum poore folder ko ek module ki tarah use kar sakte hain.
