#!/bin/bash
# Archive Non-Essential Skills - Pass 2
# Remove more bloat: Apify, Odoo, context bloat, meta-skills

SKILLS_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills"
ARCHIVE_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills-archive"

# Skills to remove in pass 2
APIFY="apify-actor-development apify-actorization apify-audience-analysis apify-brand-reputation-monitoring apify-competitor-intelligence apify-content-analytics apify-ecommerce apify-influencer-discovery apify-lead-generation apify-market-research apify-trend-analysis apify-ultimate-scraper"

CONTEXT_BLOAT="context-agent context-compression context-degradation context-driven-development context-fundamentals context-guardian context-management-context-restore context-management-context-save context-manager context-optimization context-window-management code-refactoring-context-restore"

META_SKILLS="agent-orchestrator antigravity-design-expert antigravity-skill-orchestrator antigravity-workflows 00-andruia-consultant 10-andruia-skill-smith 20-andruia-niche-intelligence skill-check skill-creator skill-creator-ms skill-developer skill-improver skill-installer skill-router skill-scanner skill-sentinel skill-writer using-superpowers using-git-worktrees using-neon find-skills project-skill-audit"

CODEBASE_CLEANUP="codebase-audit-pre-push codebase-cleanup-deps-audit codebase-cleanup-refactor-clean codebase-cleanup-tech-debt audit-context-building audit-skills"

CC_SKILLS="cc-skill-backend-patterns cc-skill-coding-standards cc-skill-continuous-learning cc-skill-frontend-patterns cc-skill-security-review cc-skill-strategic-compact"

C4_DOCS="c4-architecture-c4-architecture c4-code c4-component c4-container c4-context"

LIBREOFFICE="base calc draw impress writer"

DATABASE_BLOAT="database database-admin database-architect database-cloud-optimization-cost-optimize database-design database-migration database-migrations-migration-observability database-migrations-sql-migrations database-optimizer nosql-expert"

COMBINED="$APIFY $CONTEXT_BLOAT $META_SKILLS $CODEBASE_CLEANUP $CC_SKILLS $C4_DOCS $LIBREOFFICE $DATABASE_BLOAT"

echo "Pass 2: Archiving additional non-essential skills..."
echo "Skills to archive: $(echo $COMBINED | wc -w)"

MOVED=0
NOT_FOUND=0

for skill in $COMBINED; do
    if [ -d "$SKILLS_DIR/$skill" ]; then
        mv "$SKILLS_DIR/$skill" "$ARCHIVE_DIR/"
        echo "✓ Archived: $skill"
        ((MOVED++))
    else
        ((NOT_FOUND++))
    fi
done

echo ""
echo "=== PASS 2 COMPLETE ==="
echo "Moved: $MOVED skills"
echo "Not found: $NOT_FOUND skills"
echo ""
echo "Remaining skills:"
rtk ls -1 "$SKILLS_DIR" | wc -l
