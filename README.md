# Claude Code Review Hook Demo

This is a demonstration repository showing how the Claude Code Review Hook works in practice.

## What's in this repo

- **src/calculator.js** - Simple calculator with a TODO comment about missing error handling
- **src/user.js** - User management with intentional security issues (plain text passwords)
- **src/utils.js** - Utility functions with various patterns
- **.claude-review.env.example** - Example configuration for custom API endpoints (DeepSeek, proxies, etc.)

## Quick Demo

If the hook is already installed, try this:

```bash
# Make a small change
echo "// test comment" >> src/calculator.js

# Stage and commit
git add src/calculator.js
git commit -m "test: trying out the review hook"

# The hook will:
# 1. Show your configuration
# 2. Display the prompt file location and command
# 3. Run Claude Code to review your changes
# 4. Show the AI review results
# 5. Either approve or block the commit
```

## How the hook works

1. **You write your commit message** (with `-m` or in your editor)
2. **Hook reads both** your staged changes AND commit message
3. **Claude reviews** code + message together, checking for:
   - Code quality issues
   - Security vulnerabilities
   - Whether message matches the actual changes
   - Consistency between intent and implementation
4. **Result**: ✅ Approved or 🔴 Blocked

## Try Different Scenarios

**Scenario 1: Test blocking with security issue**
```bash
# Add a hardcoded password (should be blocked!)
echo 'const API_KEY = "hardcoded-secret-123";' >> src/user.js
git add src/user.js
git commit -m "add API configuration"
# Expected: 🔴 BLOCK COMMIT (security issue)
```

**Scenario 2: Test message mismatch detection**
```bash
# Make a refactor but claim it's a bug fix
sed -i.bak 's/function/const/g' src/calculator.js
git add src/calculator.js
git commit -m "fix: critical bug in calculator"
# Expected: Claude may flag the mismatch (refactor vs bug fix)
```

**Scenario 3: Normal commit (should pass)**
```bash
# Add a proper comment
echo "// Calculate sum of two numbers" >> src/calculator.js
git add src/calculator.js
git commit -m "docs: add comment to sum function"
# Expected: ✅ APPROVED
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
