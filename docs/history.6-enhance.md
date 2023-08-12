# HISTORY OF DESIGN KIT - 6

## A. Use short npm command using [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2)

```bash
# Install
npm install --save-dev npm-run-all2
```

Change [`package.json`](../package.json)
like below:

```diff
{
  "scripts": {
    "prepare": "husky install",
    "lint": "npx eslint --fix -- .storybook/**/*.ts stories/**/*.ts stories/**/*.tsx",
    "storybook": "storybook dev -p 6006",
    "storybook-static": "npx serve --listen 16006 ./storybook-static",
-   "build": "npm run build-storybook && npm run build-design-kit",
-   "build-storybook": "npx rimraf ./storybook-static && storybook build",
-   "build-design-kit": "npx rimraf ./dist && npx rollup --config rollup.config.ts --configPlugin typescript && tsc -p ./tsconfig.build.json --emitDeclarationOnly"
+   "build": "run-s build:*",
+   "build:storybook": "run-s sb:clean sb:build",
+   "sb:clean": "rimraf ./storybook-static",
+   "sb:build": "storybook build",
+   "build:design-kit": "run-s dk:clean dk:build dk:tsc",
+   "dk:clean": "rimraf ./dist",
+   "dk:build": "rollup --config rollup.config.ts --configPlugin typescript",
+   "dk:tsc": "tsc -p ./tsconfig.build.json --emitDeclarationOnly"
  }
}
```
