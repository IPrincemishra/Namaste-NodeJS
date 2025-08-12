
# S01E05 - Diving into the NodeJS github repo

---

## 1. IIFE (Immediately Invoked Function Expression)

### 1.1 Kya hai IIFE?

IIFE ek aisa function hai jo turant execute ho jata hai, bina kisi naam ke. Iska main use hai private scope banana, taaki global variables pollute na ho.

#### 1.2 Syntax

```javascript
(function() {
    // yahan ka code bahar se access nahi hoga
})();
```

#### 1.3 Parameters bhi pass kar sakte ho

```javascript
(function(num) {
    console.log(num);
})(5); // Output: 5
```

#### 1.4 Node.js mein IIFE ka use

- Encapsulation: Private variables/functions bana sakte ho
- Global pollution se bachav
- Module ke andar self-contained logic

#### 1.5 Example

```javascript
const myModule = (function() {
    const privateVar = 'Secret';
    function privateFunc() { console.log('Private!'); }
    return {
        publicFunc: function() {
            console.log('Public!');
            privateFunc();
        }
    };
})();
module.exports = myModule;
```

---

## 2. Node.js Module Privacy

### 2.1 Module Scope

Node.js mein har file ek module hai, aur uska apna scope hota hai. Jo cheezein `module.exports` mein nahi daali, wo bahar se access nahi ho sakti.

#### 2.2 Example

```javascript
const secret = 'hidden';
function privateFn() { console.log('Private fn'); }
module.exports = {
    publicFn: function() { console.log('Public fn'); }
};
```

---

## 3. exports vs module.exports

### 3.1 Difference

- `exports` ek shortcut hai, lekin agar tum `module.exports = ...` likh doge toh `exports` ka reference toot jata hai.
- Hamesha ek hi cheez export karni ho toh `module.exports` use karo.

---

## 4. Node.js Module Wrapper

### 4.1 Wrapper Function

Node.js har module ko ek function mein wrap karta hai:

```javascript
(function (exports, require, module, __filename, __dirname) {
    // tumhara code
});
```

### 4.2 Special Variables

- `__filename`: current file ka path
- `__dirname`: current directory ka path

---

## 5. require ka Mechanism (Step by Step)

### 5.1 Steps

1. Resolving the path to xyz .
2. Loading the content of xyz .
3. Wrapping the code in an IIFE.
4. Evaluating the code and setting module.exports .
5. Caching is the result.

---

## 6. Module Caching

Ek baar module require ho gaya toh Node.js usko cache kar leta hai. Dobara require karne par same instance milta hai, file dobara execute nahi hoti.

---

## 7. Core vs Local Modules

### 7.1 Core Modules

- Node.js ke built-in modules jaise `fs`, `path`, `http`

### 7.2 Local Modules

- Tumhare khud ke banaye modules (file ya folder)

---

## 8. Circular Dependency

Agar do modules ek dusre ko require karte hain, toh circular dependency ho sakti hai. Node.js partial exports de deta hai, isliye dhyan se use karo.

---

## 9. Practical Tips

- Hamesha private logic ko module ke andar rakho
- Sirf wahi cheezein export karo jo bahar use honi chahiye
- Large project mein modules se code clean aur manageable ho jata hai
- `__filename` aur `__dirname` ka use karo path resolve karne ke liye

---

## 10. Real-World Example

```javascript
// index.js
const myModule = require('./myModule');
myModule.publicFn(); // Output: 'Public fn'
```

---

## 11. Conclusion

Node.js mein IIFE, module privacy, require ka mechanism, module wrapper, exports vs module.exports, caching, aur circular dependency jaise concepts bohot important hain. Inko samajhkar hi clean aur maintainable code likh sakte ho.

Repository pasand aaye toh star karna mat bhoolna! :)
