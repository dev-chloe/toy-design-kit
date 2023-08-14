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
npm run build:design-kit
```

## C. [Before Publishing: Make Sure Your Package Installs and Works](https://docs.npmjs.com/cli/v9/using-npm/developers#before-publishing-make-sure-your-package-installs-and-works)

**This is important.**

```bash
# Try implement repository after build design kit
cd ../toy-web
npm uninstall toy-design-kit  # remove
npm install ../toy-design-kit # reinstall

# Check package.json
jq '.devDependencies' package.json | egrep "file|design-kit"
# "toy-design-kit": "file:../toy-design-kit",
```

## D. Publish to Node Package Registy with tag

### Using NPM

[Add a registry user account in local npm](https://docs.npmjs.com/cli/v9/using-npm/developers#create-a-user-account):

```bash
# Check this package's npm registry
export NPM_REGISTRY=$(jq '.publishConfig.registry' package.json | tr -d '"' | sed -e 's/https\://')
env | grep NPM_REGISTRY

# Add a npm registry user account
npm adduser

# Check local stored token
cat ~/.npmrc | grep "${NPM_REGISTRY}"
```

[Publish this package](https://docs.npmjs.com/cli/v9/using-npm/developers#publish-your-package):

```bash
# Init npm repotisoty
npm publish

# Check result
npm dist-tag ls
```

Check with this npm badge: &nbsp;[![npm][npm-image]][npm-url]

[npm-image]: <https://img.shields.io/npm/v/toy-design-kit.svg>
[npm-url]: <https://npmjs.org/package/toy-design-kit>

## E. Publish git-tag to GitHub Repository

### Create new tag

```bash
# Set sementic versioning
export NEW_VERSION="0.1.0"
export NEW_MESSAGE="🎉 Release version '${NEW_VERSION}'"
env | grep NEW_

# Create new tag on current commit of branch
# with commit hash, annotation and message
git tag \
    --annotate "${NEW_VERSION}" \
    --message "${NEW_MESSAGE}"

# Check created tag on list
git tag --list ${NEW_VERSION}

# Check created tag with detail
git show ${NEW_VERSION}

# Push this tags on this branch to remote
git push origin $(git branch --show-current) --tags

# Check on log
git log --oneline
```

### Remove a tag

```bash
# Set sementic versioning
export TARGET_VERSION="0.1.0"
env | grep TARGET_VERSION

# Remove a tag with pick
git tag --delete ${TARGET_VERSION}

# Remove the removed tag at the remote repository (origin)
git push origin ":${TARGET_VERSION}"
```
