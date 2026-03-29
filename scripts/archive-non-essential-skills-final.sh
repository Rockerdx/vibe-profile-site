#!/bin/bash
# Archive Non-Essential Skills - Pass 4 (Targeted)
# Focus on keeping only essential Next.js/React/TypeScript coding skills

SKILLS_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills"
ARCHIVE_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills-archive"

# Keep these essential skills
ESSENTIAL="react-patterns react-best-practices react-state-management react-ui-patterns react-component-performance react-modernization react-flow-architect react-flow-node-ts react-nextjs-development nextjs-app-router-patterns nextjs-best-practices typescript-pro typescript-expert typescript-advanced-types javascript-pro javascript-mastery javascript-testing-patterns tailwind-patterns tailwind-design-system frontend-developer frontend-dev-guidelines frontend-design shadcn radix-ui-design-system baseline-ui core-components clerk-auth clerauth zustand-store-ts drizzle-orm-expert prisma-expert postgresql postgres-best-practices sql-pro sql-optimization-patterns docker-expert git-advanced-workflows git-pushing create-branch create-pr pr-writer commit github github-automation github-actions-templates lint-and-validate test-driven-development tdd-workflow tdd-orchestrator testing-patterns e2e-testing e2e-testing-patterns playwright-skill webapp-testing debugger debugging-strategies systematic-debugging bug-hunter find-bugs error-handling-patterns api-design-principles api-patterns api-endpoint-builder api-documentation api-documentation-generator api-documenter openapi-spec-generation hono express nodejs-backend-patterns nodejs-best-practices bun-development async-python-patterns python-pro python-patterns python-testing-patterns golang-pro go-concurrency-patterns rust-pro rust-async-patterns java-pro csharp-pro cpp-pro 007 security-audit web-security-testing xss-html-injection broken-authentication file-path-traversal html-injection-testing idor-testing sql-injection-testing accessibility-compliance-accessibility-audit wcag-audit-patterns fixing-accessibility screen-reader-testing fixing-metadata seo-technical seo-page seo-meta-optimizer seo-schema seo-sitemap performance-optimizer web-performance-optimization react-component-performance application-performance-performance-optimization profiling docker-expert deployment-procedures deployment-validation-config-validate appdeploy vercel-deployment azd-deployment cicd-automation-workflow-automate github-workflow-automation gitlab-ci-patterns gitops-workflow"

# Get all current skills
ALL_SKILLS=$(rtk ls -1 "$SKILLS_DIR")

# Archive everything NOT in essential list
echo "Archiving non-essential skills..."
ARCHIVED=0

for skill in $ALL_SKILLS; do
    if ! echo "$ESSENTIAL" | grep -qw "$skill"; then
        if [ -d "$SKILLS_DIR/$skill" ]; then
            mv "$SKILLS_DIR/$skill" "$ARCHIVE_DIR/"
            echo "✓ Archived: $skill"
            ((ARCHIVED++))
        fi
    fi
done

echo ""
echo "=== FINAL CLEANUP COMPLETE ==="
echo "Archived: $ARCHIVED skills"
echo ""
echo "Remaining essential skills:"
rtk ls -1 "$SKILLS_DIR" | wc -l
echo ""
echo "Skills kept:"
rtk ls -1 "$SKILLS_DIR"
