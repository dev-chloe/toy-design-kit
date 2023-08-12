# Toy Design Kit &nbsp;[![npm][npm-image]][npm-url] [![javascript style guide][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/toy-design-kit.svg
[npm-url]: https://npmjs.org/package/toy-design-kit

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

## How to use

```bash
# Clean install dependencies without editting lock files
npm ci

# Run Storybook
npm run storybook
```

## How to build

```bash
# Build all: static storybook & react components library
npm run build
```

You need to check below contents before publishing

1. [Check static storybook](https://github.com/dev-chloe/toy-design-kit#check-static-storybook)
2. [Check react components library](https://github.com/dev-chloe/toy-design-kit#check-react-components-library)

### Check static storybook

```bash
# Build storybook only
npm run build:storybook

# Host result, then check on browser
npm run storybook-static
```

### Check react components library

```bash
# Build react components only
npm run build:design-kit
```

Check process using [`toy-web` repository](https://github.com/dev-chloe/toy-web):

```bash
# At the root of other repository, in another terminal
cd ../toy-web

# Re-install built library
npm uninstall toy-design-kit
npm install ../toy-design-kit

# Re-run Next.js application
npm run dev
```
