## Overview

The project has a an e2e flow for NTT Data Tester Assigment which targets http://demoqa.com/

The project is created with Cypress-Typescript

## Prerequisites

- [Node.js](https://nodejs.org/) and npm (Node Package Manager) should be installed on your machine.

- For Windows visit the official Node.js website: https://nodejs.org/

- For Mac use `brew install node` command

- For Linux `sudo apt update`
            `sudo apt install nodejs npm`

- After installing Node.js and npm, you can verify the installations by opening a command prompt or terminal and typing the following commands:

`node -v`
`npm -v`


## Install Cypress and Typescript

- Install Cypress `npm install cypress --save-dev`

- Install Typescript `npm install typescript --save-dev`

- Check the versions:

`npx cypress --version`
`npx tsc --version`


## Structure

The project uses the following structure and dependencies as a starting point:

Everything Cypress related sits under the Cypress directory. 

tests -> e2e/tests folder 

Test Data -> fixtures folder

Screenshots -> Screenshots are in the screenshots folder

Constants ->  To make locators dynamic test constants are in ./support/constanst.ts file

Plugins -> The project uses the `cy-ts-preprocessor.js` for TypeScript compiling. 

esLint - The template utilises esLint to format and lint the code.

## Scripts 

The template utilises the following scripts:

``npm run format`` - This script formats your code using Prettier

``npm run lint:code`` - This carries out a lint using esLint

``npm run cypress:run`` - This runs your Cypress tests in a headless state.

``npm run cypress:open`` - This opens the Cypress GUI so you can select tests to run.
