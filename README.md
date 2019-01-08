# js_evaluation-tool

A CommunJS evaluation tool that should be used for academic pusposes.

The evaluator can execute a serie of tests to evaluate the work of a student. If a test passes, the student will be awarded with an amount of points (defined by the evaluator).

# Installation

To install simply run the following command in
a terminal (at the root of the project).

> npm install

# Structure

```
[.]
├── build/              # Output folder
├── node_modules/       # NodeJs modules
├── src/                # Source code
│   ├── classes/        # Javascript classes
│   ├── tests/          # All tests should go here
│   ├── _helpers.js     # Helper functions
│   ├── errors.js       # Error functions (helpers)
│   └── index.js        # Entry point
├── /tools              # Node scripts
├── .gitignore          # Gitignore
├── babel.config.js     # Babel configuration
├── config.js           # Application configuration
├── package.json
└── README.md           # Current file
```

# Usage

## Creating a Test

Add a new JavaScript file in the following folder.

> src / tests

The file should look something like :

```js
// ======================================================
// Tests / [name-of-the-assignment]
// ======================================================

var test = {
  testName: () =>
    new Test()
      .assert( ... )
      .assert( ... )
      // ...
};
```

## Selecting a Test

To select a Test, update the following line:

```js
// src / index.js

...

// require ./tests/[name-of-test].js
```

## Building

To generate a **build**, execute the following command (at the root of the project).

> npm run build

The **build** is outputed to the following location :

> \_\_root\_\_ / build / index.js

The manipulation are the following:

- Concatenate each file (required by the application)
- Transpile to CommunJS (babel)
- Minify
- Uglify
