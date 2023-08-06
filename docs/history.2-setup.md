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
