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
