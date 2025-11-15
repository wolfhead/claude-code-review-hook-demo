# Claude Code Review Hook Demo

This is a demonstration repository showing how the Claude Code Review Hook works.

## What's in this repo

- **src/calculator.js** - Simple calculator with a TODO comment about missing error handling
- **src/user.js** - User management with intentional security issues (plain text passwords)
- **src/utils.js** - Utility functions with various patterns

## How the hook works

1. Make changes to code files
2. Stage them with `git add`
3. When you commit, Claude automatically reviews your staged changes
4. You'll receive AI-powered feedback before the commit completes

## Try it yourself

```bash
# Make a change to any file
echo "// Added comment" >> src/calculator.js

# Stage and commit
git add src/calculator.js
git commit -m "Update calculator"

# The hook will run automatically and review your changes!
```
