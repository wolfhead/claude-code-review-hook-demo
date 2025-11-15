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

## Custom API Configuration

This demo includes an example configuration file. To use custom API settings:

```bash
# Copy the example config
cp .claude-review.env.example .claude-review.env

# Edit with your settings (standard Claude Code environment variables)
# export ANTHROPIC_API_KEY=sk-ant-...
# export ANTHROPIC_BASE_URL=https://api.anthropic.com
# export ANTHROPIC_MODEL=claude-sonnet-4
```

The `.claude-review.env` file is ignored by git for security.

### Example: Using DeepSeek

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_API_KEY=${YOUR_API_KEY}
export API_TIMEOUT_MS=600000
export ANTHROPIC_MODEL=deepseek-chat
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
```
