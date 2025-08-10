# S01E03 - Let's write code

## Before Writing Code Install NodeJS

### from Website

1. Download the latest version of Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download/)

2. Follow the installation instructions for your operating system.

3. Verify the installation by running the following command in your terminal or command prompt:

```bash
   node -v
```

This should display the installed version of Node.js.

### from terminal

1. Open your terminal or command prompt.

2. Run the following command to install Node.js using a package manager:

**For Windows (using Chocolatey):**

```bash
choco install nodejs
```

- Verify the installation by running the following command:

```bash
node -v
```

This should display the installed version of Node.js.

## Node REPL

The Node.js REPL (Read-Eval-Print Loop) is an interactive shell that allows you to execute JavaScript code in real-time. To start the REPL, simply run the following command in your terminal:

```bash
node
```

Once you're in the REPL, you can start typing JavaScript code and see the results immediately. For example:

```javascript
> const a = 5;
> const b = 10;
> a + b;
15
```

To exit the REPL, you can either press `Ctrl + C` twice or type `.exit` and hit `Enter`.

## Node in Vs code

1. Open your project folder in Visual Studio Code.

2. Create a new file with a `.js` extension (e.g., `app.js`).

3. Write your Node.js code in this file.

4. To run the code, open the integrated terminal in VS Code (`` Ctrl + ` ``) and run the following command:

```bash
node app.js
```

This will execute your Node.js application, and you should see the output in the terminal.

## `Window`, `this`, `global` in mein farak kya hota hai ?

1. **Window**: Browser environment mein `window` object global scope ko represent karta hai. Ismein sabhi global variables aur functions store hote hain.

2. **This**: `this` keyword current execution context ko refer karta hai. Agar aap kisi function ke andar hain, toh `this` us function ke object ko refer karega. Agar aap global scope mein hain, toh `this` global object ko refer karega.

3. **Global**: Node.js mein `global` object hota hai, jo sabhi global variables aur functions ko store karta hai. Yeh `window` object ki tarah kaam karta hai, lekin sirf Node.js environment mein.

In teenon mein yeh farak hai ki `window` sirf browser mein hota hai, jabki `global` Node.js mein hota hai. `this` keyword ka behavior context ke hisaab se badalta hai.

## `globalThis`

- To resolve this confusion b/w `Window`, `this`, `global`. The Commity decide to created `globalThis`
- `globalThis` sabhi environments mein global object ko refer karta hai, chahe woh browser ho ya Node.js.

### code example

```nodejs
console.log(globalThis===global);
```
