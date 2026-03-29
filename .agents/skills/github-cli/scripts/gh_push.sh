#!/bin/bash
set -e

# GitHub CLI Push Script
# Stages, commits, and pushes to GitHub using gh commands

MESSAGE="${1:-chore: update code}"
BRANCH_NAME="${2:-}"

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub"
    echo "Run: gh auth login"
    exit 1
fi

# Stage all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
else
    # Commit with message
    git commit -m "$MESSAGE"
    echo "✅ Committed: $MESSAGE"
fi

# Get current branch name
if [ -z "$BRANCH_NAME" ]; then
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
else
    BRANCH="$BRANCH_NAME"
fi

# Push to GitHub using gh
if git rev-parse --abbrev-ref --symbolic-full-name @{u} &> /dev/null; then
    # Upstream already set, use git push
    git push
    echo "✅ Pushed to $BRANCH"
else
    # First push, set upstream using gh
    gh pr push -u
    echo "✅ Pushed to $BRANCH (upstream set)"
fi

# Show PR status if branch exists on remote
if gh pr view "$BRANCH" &> /dev/null; then
    echo "📋 PR Status:"
    gh pr view "$BRANCH" --json number,title,state --jq '"#\(.number): \(.title) (\(.state))"'
fi
