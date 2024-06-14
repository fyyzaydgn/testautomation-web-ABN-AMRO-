# testautomation-web-ABN-AMRO

## Overview

Welcome to our testautomation-web-ABN-AMRO repository. This repository is designed to facilitate efficient and collaborative testing using Cucumber and Cypress. 
In this repository, we leverage the power of Gherkin syntax and BDD principles to create clear and understandable test scenarios for our application.  

### Installation 
First check if node.js and npm is downloaded (node -v) (npm -v) (if not, download from node.js official website)

To install main packages and cypress use the following commands : 
```
npm init
```
```
npm install cypress —save-dev
```

To install additional requirements use the following commands : 
```
npm install @badeball/cypress-cucumber-preprocessor
```
```
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
```
```
npm install ts-loader —save-dev
```
```
npm install --save-dev @badeball/cypress-cucumber-preprocessor/esbuild
```

It provides a pretty visuality to install some extensions that works with Cucumber: Go to extensions on Visual Studio Code and download Cucumber (Gherkin) Full Support and, Material Icon Theme


### Run tests:

After navigating to "src" folder (cd src), all the tests can be run using the specific scripts from package.json file:

In order to run tests in Cypress GLI mode:
```
npx cypress open 
```
In order to run all tests:
```
npm run all-scenarios-headless-chrome
```
In order to run only regression tests in 4 browsers including Chrome, Firefox, Edge, Electron (Electron comes with Cypress, rest browsers needs to be downloaded before): 
```
npm run regression-headed-in-all-browsers 
```
In order to run only smoke tests in a specific browser (Firefox here): 
```
npm run smoke-headless-firefox 
```

### Test reports:

In order to see html report for finished test run : Go to html reports under cucumber-html folder
