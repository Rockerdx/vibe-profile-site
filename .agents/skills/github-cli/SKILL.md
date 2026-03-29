---
name: github-cli
description: "Exclusive GitHub CLI (gh) skill for all GitHub operations. Use gh commands for commits, pushes, PRs, issues, and repository management. NEVER use raw git commands for GitHub operations."
risk: unknown
source: community
date_added: "2026-03-29"
---

# GitHub CLI (gh) Exclusive Workflow

**ALWAYS use `gh` commands for ALL GitHub operations.** This skill replaces raw git commands with GitHub CLI for better integration and automation.

## When to Use

Automatically activate when the user:
- Wants to commit and push code to GitHub
- Needs to create/manage pull requests
- Wants to create/manage issues
- Needs to interact with GitHub repositories
- Says "push to github", "create PR", "save to github", etc.

## Core Principle

**NEVER use raw `git` commands for GitHub operations.** Always use `gh` equivalents:

| Raw Git | GitHub CLI (gh) |
|---------|-----------------|
| `git push` | `gh pr push` or `gh repo sync` |
| `git pull` | `gh repo sync` |
| `git clone` | `gh repo clone` |
| `git fork` | `gh repo fork` |
| Manual PR creation | `gh pr create` |
| Manual issue creation | `gh issue create` |

## Workflow Scripts

**ALWAYS use these scripts** - do NOT use manual git/gh commands:

```bash
# Stage, commit, and push to GitHub
bash skills/github-cli/scripts/gh_push.sh "feat: add feature"

# Create pull request
bash skills/github-cli/scripts/gh_pr_create.sh "feat: new feature" "Description of changes"

# Sync with upstream
bash skills/github-cli/scripts/gh_sync.sh

# Create issue
bash skills/github-cli/scripts/gh_issue_create.sh "Bug title" "Description"
```

## Commands Reference

### Commit & Push
```bash
# Stage all changes
git add .

# Commit with conventional commit
git commit -m "type: description"

# Push to GitHub (uses gh)
gh pr push
```

### Pull Requests
```bash
# Create PR
gh pr create --title "feat: add feature" --body "Description" --base main

# Create draft PR
gh pr create --draft --title "WIP: feature" --base main

# List PRs
gh pr list

# View PR status
gh pr status
```

### Issues
```bash
# Create issue
gh issue create --title "Bug: something broken" --body "Steps to reproduce"

# List issues
gh issue list

# View issue
gh issue view 123
```

### Repository
```bash
# Clone repository
gh repo clone owner/repo

# Fork repository
gh repo fork owner/repo --clone

# Sync fork with upstream
gh repo sync

# View repository
gh repo view
```

### Authentication
```bash
# Check auth status
gh auth status

# Login to GitHub
gh auth login

# Setup git integration
gh auth setup-git
```

## Commit Types

| Type | Purpose |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting/style (no logic) |
| `refactor` | Code refactor (no feature/fix) |
| `perf` | Performance improvement |
| `test` | Add/update tests |
| `build` | Build system/dependencies |
| `ci` | CI/config changes |
| `chore` | Maintenance/misc |

## Best Practices

1. **Always use `gh` for GitHub operations** - never raw git push/pull
2. **Link PRs to issues** - use `--issue` flag or mention in body
3. **Use conventional commits** - semantic commit messages
4. **Set upstream on first push** - `gh pr push -u`
5. **Check auth status** - ensure authenticated before operations
6. **Use draft PRs for WIP** - `gh pr create --draft`
7. **Sync forks regularly** - `gh repo sync`

## Safety Protocol

- NEVER commit secrets (.env, credentials, keys)
- NEVER force push to main/master
- NEVER skip CI checks
- ALWAYS verify auth status before operations
- ALWAYS use `-u` flag on first push to set upstream

## Troubleshooting

### Not Authenticated
```bash
gh auth status
gh auth login
gh auth setup-git
```

### Fork Out of Sync
```bash
gh repo sync
```

### PR Creation Fails
```bash
# Check if branch is pushed
gh pr push

# Then create PR
gh pr create --title "title" --body "body"
```
