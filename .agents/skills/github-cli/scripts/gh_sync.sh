#!/bin/bash
set -e

# GitHub CLI Sync Script
# Syncs fork with upstream repository

UPSTREAM="${1:-origin}"
BRANCH="${2:-}"

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub"
    echo "Run: gh auth login"
    exit 1
fi

# Get current branch if not specified
if [ -z "$BRANCH" ]; then
    BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi

echo "🔄 Syncing branch: $BRANCH"

# Sync with upstream
if gh repo sync "$BRANCH" --force 2>/dev/null; then
    echo "✅ Synced $BRANCH with upstream"
else
    # If gh repo sync fails, try manual sync
    echo "⚠️ gh repo sync failed, trying manual sync..."
    
    # Fetch upstream
    git fetch "$UPSTREAM"
    
    # Rebase current branch on upstream
    git rebase "$UPSTREAM/$BRANCH"
    
    # Push changes
    git push --force-with-lease
    
    echo "✅ Manual sync completed"
fi

# Show current status
echo ""
echo "📊 Current Status:"
git status --short
gh pr status 2>/dev/null || true
