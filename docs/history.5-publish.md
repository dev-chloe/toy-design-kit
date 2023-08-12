# HISTORY OF DESIGN KIT - 5

## A. Setup [Rollup.js](https://rollupjs.org/tutorial/#installing-rollup-locally)

```bash
# Insatll
npm install --save-dev rollup

# Check
npx rollup --version
# rollup v3.27.2

# Install plugin for typescript module
npm install --save-dev @rollup/plugin-typescript

# Install plugin for babel module
npm install --save-dev @rollup/plugin-babel
```

Setup configuration:

- [`tsconfig.build.json`](./tsconfig.build.json)
- [`rollup.config.ts`](./rollup.config.ts)
- plugin configurations:
  - [basic](https://rollupjs.org/command-line-interface/#configplugin-plugin)
  - [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript#readme)

```bash
# Test build
npx rollup \
  --config rollup.config.ts \
  --configPlugin typescript
```

## B. Build react components as node package

Prepare [rimraf](https://www.npmjs.com/package/rimraf)
for The [UNIX command](https://en.wikipedia.org/wiki/Rm_(Unix))
`rm -rf` on node.

```bash
# Install
npm install --save-dev rimraf
```

Add npm script:

```diff
{
  // ...
  "scripts": {
    // ...
+   "build-design-kit": "npx rimraf ./dist && npx rollup --config rollup.config.ts --configPlugin typescript"
  }
  // ...
}
```

```bash
# Test build
npm run build-design-kit
```

## C. [Before Publishing: Make Sure Your Package Installs and Works](https://docs.npmjs.com/cli/v9/using-npm/developers#before-publishing-make-sure-your-package-installs-and-works)

**This is important.**

```bash
# Try implement repository after build design kit
cd ../toy-web
npm install --save-dev ../toy-design-kit

# Check package.json
jq '.devDependencies' package.json | egrep "file|design-kit"
# "toy-design-kit": "file:../toy-design-kit",
```