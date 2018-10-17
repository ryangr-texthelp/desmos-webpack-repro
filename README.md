# Desmos Webpack

Attempt to bundle the Desmos API using Webpack

## Instructions

1. Install [NodeJS v8.X (LTS)](https://nodejs.org/en/download/)
1. Copy a version of `calculator.js` into the `vendor/` folder
1. Generate a copy of calculator.js with references to window.Desmos removed
and place it in the src directory using `sed 's/window.Desmos/Desmos/g' < vendor/calculator.js > src/calculator.js`
1. At command prompt, run:
    ```cmd
    npm install
    npm run start
    ```
1. Browser should open at http://localhost:8085
