# HISTORY OF DESIGN KIT - 2

## A. Setup React

```bash
# Install React core
npm install --save-dev react react-dom

# Enable Typescript
npm install --save-dev typescript @types/react @types/react-dom
```

Then setup [`tsconfig.json`](../tsconfig.json)

## B. Setup Storybook

Follow up [this document (Install Storybook)](https://storybook.js.org/docs/react/get-started/install)

```bash
# Install storybook on current package
npx storybook@latest init

Need to install the following packages:
storybook@7.2.1
Ok to proceed? (y) # y

 storybook init - the simplest way to add a Storybook to your project. 

 • Detecting project type. ✓
 • Preparing to install dependencies. ✓

✔ We were not able to detect the right builder for your project. Please select one: › # Webpack 5
 • Adding Storybook support to your "React" app
  ✔ Getting the correct version of 9 packages
  ✔ Installing Storybook dependencies
. ✓
 • Preparing to install dependencies. ✓
```

## C. Setup ESLint with [JS Standard Style](https://standardjs.com/index.html#install)

Follow up [this document (Getting Started with ESLint)](https://eslint.org/docs/latest/use/getting-started)

```bash
# Install ESLint on current package
npm init @eslint/config

✔ How would you like to use ESLint? # style
✔ What type of modules does your project use? # esm
✔ Which framework does your project use? # react
✔ Does your project use TypeScript? # Yes
✔ Where does your code run? # browser
✔ How would you like to define a style for your project? # guide
✔ Which style guide do you want to follow? # standard-with-typescript
✔ What format do you want your config file to be in? # YAML

✔ Would you like to install them now? # Yes
✔ Which package manager do you want to use? # npm

# Check
npx eslint --version
# v8.46.0
```

Add custom command in [`package.json`](../package.json) file:

```json
{
  // ...
  "scripts": {
    "lint": "npx eslint --fix -- .storybook/**/*.ts stories/**/*.ts stories/**/*.tsx",
    // ...
  },
  // ...
}
```

Edit eslint configuration at [`.eslintrc.yaml`](../.eslintrc.yaml) file

Also add [`.eslintignore`](../.eslintignore) file
