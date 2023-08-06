# HISTORY OF DESIGN KIT - 1

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

### A-2. Add `.gitignore`

using [Toptal's gitignore.io](https://www.toptal.com/developers/gitignore):

```bash
# Create empty file
touch .gitignore

# Open to edit
code .gitignore # or click
```

### A-3. Node.js version setup

#### A-3-1. Install [`nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

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

#### A-3-2. Fixing Node Version in this repository

Check [node.js version release schedule](https://github.com/nodejs/release#readme)

```bash
# Fix node version in project
echo "v18.17.0" > .nvmrc

# Reopen the terminal
# Found '~/workspace/study/toy-design-kit/.nvmrc' with version <v18.17.0>
# Downloading and installing node v18.17.0...
# Downloading https://nodejs.org/dist/v18.17.0/node-v18.17.0-darwin-x64.tar.xz...
# ################################################################################ 100.0%
# Computing checksum with shasum -a 256
# Checksums matched!
# Now using node v18.17.0 (npm v9.6.7)

# Check
node --version
# v18.17.0

# Update latest npm
npm install -g npm@latest

# Check
npm --version
# 9.8.1
```

### A-4. Init node package

```bash
# At the root of repository
npm init

package name: (toy-design-kit) # (enter)
version: (1.0.0) # 0.1.0
description: # Toy Design Kit
entry point: (index.js)  # (enter)
test command: # (enter)
git repository: # https://github.com/dev-chloe/toy-design-kit
keywords: # react, storybook
author: # dev-chloe <chloekim.4969@gmail.com>
license: (ISC) # (enter)

# Check
jq '.' package.json
```
