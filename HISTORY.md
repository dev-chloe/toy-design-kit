# HISTORY OF DESIGN KIT

## A. Initiate

### A-1. Version control setup

```bash
# Create local git repository
mkdir toy-design-kit && cd toy-design-kit
git init
git branch -M main

# Create initial commit
echo "# Toy Design Kit" >> README.md
git add -A
git commit -m "first commit"

# Set remote git repository
git remote add origin https://github.com/dev-chloe/toy-design-kit.git
git remote -v
# origin  https://github.com/dev-chloe/toy-design-kit.git (fetch)
# origin  https://github.com/dev-chloe/toy-design-kit.git (push)

# After create remote repositiory, then upload
git push -u origin $(git branch --show-current)

# Check
git log --oneline
```

Add [`.gitignore`](.gitignore) from [gitignore.io - Toptal](https://www.toptal.com/developers/gitignore)

### A-2. Node.js version setup

#### Install [`nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
# Check
nvm --version
```

For automation, add below script in your shell profile (ex. `~/.zshrc`)

```bash
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

#### Node version fix

Check [node.js version release schedule](https://github.com/nodejs/release#readme)

```bash
# Fix node version in project
echo "v18.16.1" > .nvmrc

# Reopen the terminal
# Found '/Users/chloekim/workspace/study/toy-design-kit/.nvmrc' with version <v18.16.1>
# Downloading and installing node v18.16.1...
# Downloading https://nodejs.org/dist/v18.16.1/node-v18.16.1-darwin-x64.tar.xz...
# ###################################################################################### 100.0%
# Computing checksum with shasum -a 256
# Checksums matched!
# Now using node v18.16.1 (npm v9.5.1)

# Check
node --version
# v18.16.1

# Update latest npm
npm install -g npm@latest

# Check
npm --version
# 9.8.0
```

### A-3. Create Next App

Follow up [this document (Start a New React Project > Next.js)](https://react.dev/learn/start-a-new-react-project#nextjs)

```bash
# Create under './temp' directory
npx create-next-app@latest temp

  Need to install the following packages:
    create-next-app@13.4.9
  Ok to proceed? (y) y
  ✔ Would you like to use TypeScript? … # Yes
  ✔ Would you like to use ESLint? … # Yes
  ✔ Would you like to use Tailwind CSS? … # No
  ✔ Would you like to use `src/` directory? … # No
  ✔ Would you like to use App Router? (recommended) … # Yes
  ✔ Would you like to customize the default import alias? … # Yes
  ✔ What import alias would you like configured? … # @/*

# Remove useless files under './temp' directory
rm -rf ./temp/node_modules ./temp/.gitignore

# Move all contents from './temp' directory to 'root' of repository
mv ./temp/README.md ./HELP.md
mv ./temp/* ./temp/.* .

# Remove './temp' directory
rm -rf ./temp

# Reinstall CNA(create-next-app) along with 'package-lock.json'
npm ci
```

Check [HELP.md](./HELP.md)

### A-4. Install Storybook

Follow up [this document (Install Storybook)](https://storybook.js.org/docs/react/get-started/install)

```bash
npx storybook@latest init

    Need to install the following packages:
      storybook@7.0.26
    Ok to proceed? (y) # y

    storybook init - the simplest way to add a Storybook to your project. 

    • Detecting project type. ✓
    • Adding Storybook support to your "Next" app
      ✔ Getting the correct version of 8 packages
    ✔ We have detected that you are using ESLint. Storybook provides a plugin that gives the best experience with Storybook and helps follow best practices: https://github.com/storybookjs/eslint-plugin-storybook#readme

    Would you like to install it? … # yes
        Configuring Storybook ESLint plugin at .eslintrc.json
      ✔ Installing Storybook dependencies
    . ✓
    • Preparing to install dependencies. ✓

# Start
npm run storybook
```

### A-5. Install husky

Follow up [this document (Install husky)](https://typicode.github.io/husky/getting-started.html)

#### A-5-1. Enable husky

```bash
# husky-init is a one-time command to quickly initialize a project with husky.
npx husky-init && npm install
```

Check [the `prepare` script in `package.json`](./package.json#L6)

```bash
# If not enabled, try manually
npm run prepare
  # husky - Git hooks installed
```

#### A-5-2. Block to commit on long-reserved branch directly

Edit [`.husky/pre-commit`](.husky/pre-commit) file like below:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

prefix="husky ::"
branch="$(git rev-parse --abbrev-ref HEAD)"

# Block to long-lived branch(main) directly.
echo ""
echo "${prefix} [INFO] This is '${branch}' branch."
if [ "$branch" = "main" ]; then
  echo ""
  echo "${prefix} [WARN] You can't commit directly to main branch."
  echo "${prefix} [HINT] Create a support branch first."
  echo ""
  echo "       $ git switch -c <new_branch_name>"
  echo ""
  exit 1
fi

# Test First
# echo ""
# echo "${prefix} [INFO] Test before commit."
# npm run test && echo ""

# Lint First
echo ""
echo "${prefix} [INFO] Lint before commit."
npm run lint && echo ""
```

## B. Develop Storybook

> Read more: [**Storybook for Next.js**](https://github.com/storybookjs/storybook/tree/next/code/frameworks/nextjs#readme)

### B-1. Use [@storybook/addon-designs](https://github.com/storybookjs/addon-designs#readme)

> A Storybook addon that embed Figma or websites in the addon panel for better design-development workflow.

1. Install

    ```bash
    npm install -D @storybook/addon-designs
    ```

2. Register the addon in [`main.ts`](.storybook/main.ts)

    ```typescript
    // .storybook/main.ts
    import type { StorybookConfig } from "@storybook/nextjs";
    const config: StorybookConfig = {
      // ...
      addons: [
        "@storybook/addon-designs", // add this!
      ],
      // ...
    };
    ```

3. Set environment variable: `TOY_DK_FIGMA_URL`

    ```bash
    # Setting
    export TOY_DK_FIGMA_URL="__FIGMA_PROJECT_URL__"
    
    # Check
    env | grep "TOY_DK"
    ```

    Copy the value to `.env` file using [`envsubst`](https://www.baeldung.com/linux/envsubst-command)

    ```bash
    # Backup first, if exist
    [ -f .env ] \
      && mv .env ".env.x.$(date '+%y-%m-%d_%H-%M-%S')" \
      || echo "Nothing to backup"

    # Set on file
    envsubst < .env.template >> .env
    ```

    Add [`.gitignore`](.gitignore) for all `.env` files exclude [`.env.template`](./.env.template)

    ```gitignore
    ### Injection Poinst - Sensivie Data ###
    *.env.*
    !.env.template
    ```

4. [Add it to story!](https://github.com/storybookjs/addon-designs#3-add-it-to-story)

    ```typescript
    // stories/*.stories.ts
    const figmaUrl = process.env.TOY_DK_FIGMA_URL;

    const meta: Meta<typeof C> = {
      // ...
      parameters: {
        design: {
          type: 'figma',
          url: `${figmaUrl}?node-id=0-0`
        }
      }
    };
    ```

    > TODO: Follow up the issue: [StorybookConfig 'env' key type error](https://github.com/storybookjs/storybook/issues/19691)

### B-2. Use SCSS

> When using `@storybook/nextjs`, you don't need to configure sass.
> [**Just add scss file**](./stories/Atoms/Button/Button.tsx#L2).
>
> Read more. [storybook.js issue - SaasError: expected "{"](https://github.com/storybookjs/storybook/issues/19266#issuecomment-1499220336)

## C. Publish Storybook

### C-1. Build Storybook as static page

```bash
# (option) Prepare serve engine for static web hosting
npm install --global serve
```

```bash
# Build
npm run build-storybook

# Hosting
serve --listen 16006 ./storybook-static

# Check in the browser
open http://localhost:16006/
```

- Ref. [serve](https://www.npmjs.com/package/serve) [by. Vercel](https://github.com/vercel/serve#readme)
