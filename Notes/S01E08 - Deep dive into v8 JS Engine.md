# Episode-08 | Deep Dive into V8 JS Engine

---

## 1. Parsing Stage in V8 Engine

### 1.1 Lexical Analysis & Tokenization

- **Lexical Analysis:** Breaks raw JS code into tokens.
- **Tokenization:** Converts code into fundamental elements (keywords, operators, identifiers, literals).
- **Example:**
  - For `var a = 10;` tokens are: `var` (keyword), `a` (identifier), `=` (operator), `10` (literal), `;` (punctuation)
- **Purpose:** Helps V8 read and understand code for further analysis.

### 1.2 Output of Tokenization

- Result: List of tokens used in next parsing stages.

---

## 2. Syntax Analysis & Abstract Syntax Tree (AST)

### 2.1 Syntax Analysis

- Analyzes tokens as per JS grammar rules.
- Builds a hierarchical tree structure (AST).

### 2.2 Abstract Syntax Tree (AST)

- Tree-like structure representing code constructs (variables, expressions, statements).
- **Example:**
  - For `var a = 10;` AST visually represents variable declaration and assignment.
- **Tool:** Use [AST Explorer](https://astexplorer.net/) to visualize ASTs.

### 2.3 Syntax Errors

- If unexpected token found, syntax error occurs (AST can't be generated).

---

## 3. Interpreter and Compilation in V8

### 3.1 Interpreted vs Compiled Languages

- **Interpreted:** Executes code line by line (e.g., Python). Faster to start, easier to debug, but slower execution.
- **Compiled:** Translates code to machine code before execution (e.g., C, C++). Faster execution, but longer compilation and harder debugging.
- **JavaScript:** Uses both techniques (interpreter + JIT compiler).

### 3.2 How V8 Executes JS

- **Interpreter (Ignition):** Converts AST to bytecode, executes line by line.
- **JIT Compiler (TurboFan):** Optimizes frequently executed (hot) code, converts bytecode to optimized machine code.

---

## 4. Hot Code Optimization & Deoptimization

### 4.1 Hot Code

- Code executed frequently is optimized by TurboFan.

### 4.2 Optimization Assumptions

- TurboFan optimizes based on types/values seen during execution.
- If assumptions break (e.g., function gets unexpected type), code is deoptimized and sent back to Ignition.

### 4.3 Key Terms

- **Inline Caching:** Speeds up property access by caching lookups.
- **Copy Elision:** Eliminates unnecessary object copying.

### 4.4 Developer Note

- For best performance, pass consistent types/values to functions to avoid deoptimization.

---

## 5. V8 vs Other JS Engines

- Each JS engine (e.g., SpiderMonkey) works differently.
- V8 is considered the fastest and most advanced.

---

## 6. Bytecode Example & Further Exploration

- Explore V8 bytecode: [IfConditions.golden](https://github.com/v8/v8/blob/master/test/cctest/interpreter/bytecode_expectations/IfConditions.golden)
- Learn more: [v8.dev](https://v8.dev/)

---
