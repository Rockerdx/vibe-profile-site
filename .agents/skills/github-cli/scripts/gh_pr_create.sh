#!/bin/bash
set -e

# GitHub CLI Pull Request Creation Script
# Creates a PR from the current branch

TITLE="${1:-feat: new feature}"
BODY="${2:-}"
BASE="${3:-main}"
DRAFT="${4:-false}"

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub"
    echo "Run: gh auth login"
    exit 1
fi

# Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if branch is pushed
if ! git rev-parse --abbrev-ref --symbolic-full-name @{u} &> /dev/null 2>&1; then
    echo "📤 Branch not pushed, pushing first..."
    gh pr push -u
fi

# Build PR creation command
CMD="gh pr create --title \"$TITLE\" --base \"$BASE\""

if [ -n "$BODY" ]; then
    CMD="$CMD --body \"$BODY\""
fi

if [ "$DRAFT" = "true" ]; then
    CMD="$CMD --draft"
fi

# Link to issue if mentioned in title (e.g., "fix: #123 bug")
ISSUE_NUM=$(echo "$TITLE" | grep -oE '#[0-9]+' | head -1 | tr -d '#')
if [ -n "$ISSUE_NUM" ]; then
    CMD="$CMD --issue \"$ISSUE_NUM\""
    echo "🔗 Linking to issue #$ISSUE_NUM"
fi

# Create PR
echo "📝 Creating PR: $TITLE"
eval "$CMD"

echo "✅ PR created successfully!"

# Show PR details
gh pr view --json number,title,state,url --jq '"PR #\(.number): \(.title)\nStatus: \(.state)\nURL: \(.url)"'
