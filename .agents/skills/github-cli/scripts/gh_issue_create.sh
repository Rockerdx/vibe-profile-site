#!/bin/bash
set -e

# GitHub CLI Issue Creation Script

TITLE="${1:-New issue}"
BODY="${2:-}"
LABELS="${3:-}"
ASSIGNEES="${4:-}"

# Check authentication
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub"
    echo "Run: gh auth login"
    exit 1
fi

echo "📝 Creating issue: $TITLE"

# Build issue creation command
CMD="gh issue create --title \"$TITLE\""

if [ -n "$BODY" ]; then
    CMD="$CMD --body \"$BODY\""
fi

if [ -n "$LABELS" ]; then
    CMD="$CMD --labels \"$LABELS\""
fi

if [ -n "$ASSIGNEES" ]; then
    CMD="$CMD --assignee \"$ASSIGNEES\""
fi

# Create issue
ISSUE_URL=$(eval "$CMD" | grep -oE 'https://github.com/[^ ]+')

echo "✅ Issue created successfully!"
echo "🔗 $ISSUE_URL"

# Show issue details
if [ -n "$ISSUE_URL" ]; then
    ISSUE_NUM=$(echo "$ISSUE_URL" | grep -oE '/[0-9]+$' | tr -d '/')
    gh issue view "$ISSUE_NUM" --json title,state,author --jq '"Issue #\(.number): \(.title)\nStatus: \(.state)\nAuthor: \(.author.login)"' 2>/dev/null || true
fi
