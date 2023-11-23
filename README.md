## Stories:

	1. As a user, I'd like a simple API so that I can do addition.
	2. As a user, I'd like a simple API so that I can do subtraction.
	3. As a user, I'd like a simple API so that I can do multiplication.
	4. As a user, I'd like a simple API so that I can do division.


## Steps (from scratch): 

**Setup**

	1. Create project directory: `mkdir calc && cd calc`
	2. Create package.json: `npm init`
	3. Install Babel: `npm i babel-cli babel-presets-env --save-dev`
	4. Configure Babel in package.json:
   
```
"babel": {"presets": [["env",{"shippedProposals": true}]]}
```

**Unit Tests**

    1. Install unit testing dependencies: `npm i mocha chai babel-register --save-dev`
    2. Add `test:unit` scripts to package.json
    

```
"test:unit": "mocha *.test.js --require babel-register",

```

    3. Add empty calc.js
    4. Add test file, calc.test.js, and write test for add API
    5. Run `npm run test:unit`. tests should fail
    6. Write and export add function in calc.js
    7. Run `npm run test:unit`. tests should pass.
    8. Repeat 4-7 for subtract, mulitply, and divide functions

**Unit Test Coverage**

    1. Add test coverage reporting: `npm i nyc --save-dev`
    2. Change `test:unit` to call instanbul (nyc):
    

```
"test:unit": "nyc mocha *.test.js --require babel-register"
```

**Linting**

    1. Add Standard and Babel-ESLint support: `npm i standard babel-eslint --save-dev`
    2. Configure Standard in package.json
    
```
"standard": {
    "parser": "babel-eslint",
    "env": {
    "node": true,
    "mocha": true
    }
}
```
    3. Add `lint` script to package.json

```
"lint": "standard *.js --fix"
```
    4. Run `npm run lint`, and fix any issues

**Behavioral Testing**

    1. Install Cucumber JS: `npm i cucumber --save-dev`
    2. Add `test:bdd` script to package.json

```
"test:bdd": "cucumber-js --require-module babel-register",
```
    3. Create features directory: `mkdir features && cd features`
    4. Create feature file for add feature, `add.feature`
    5. Run `npm run test:bdd`, which will output stubbed tests
    6. Create step file and implement tests, `add.steps.js`
    7. Run tests: `npm run test:bdd`
    8. Repeat for subtract feature

**Implement REST API**

    1. Install Express: `npm i express --save`
    2. Create index.js
    3. Add routes for our API functions
    4. Add `start` script to package.json

```
"start": "babel-node index.js",
```
    4. Start server, `npm start`

**Automation Tests**

    1. Install Selenium Webdriver and Babel Polyfill: `npm i selenium-webdriver babel-polyfill --save-dev`
    2. Create automation test directory: `mkdir automation && cd automation`
    2. Add `test:auto` script to package.json

```
"test:auto": "mocha automation/*.auto.js --require babel-register",
```
    4. Create test, `api.auto.js`, and implement tests.
