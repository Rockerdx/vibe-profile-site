#!/bin/bash
# Archive Non-Essential Skills - Pass 3
# Remove: game dev, media generation, excessive architecture docs, firmware, embedded

SKILLS_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills"
ARCHIVE_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills-archive"

# Media generation
MEDIA="fal-audio fal-generate fal-image-edit fal-platform fal-upscale fal-workflow stability-ai imagen ai-studio-image comfyui-gateway videodb videodb-skills seek-and-analyze-video magic-animator remotion remotion-best-practices podcast-generation screenshots"

# 3D/Graphics (keep only basics)
GRAPHICS_3D="3d-web-experience threejs-animation threejs-fundamentals threejs-geometry threejs-interaction threejs-lighting threejs-loaders threejs-materials threejs-postprocessing threejs-shaders threejs-skills threejs-textures spline-3d-integration shader-programming-glsl"

# Architecture bloat (keep only essential)
ARCH_BLOAT="architect-review architecture architecture-decision-records architecture-patterns backend-architect cloud-architect dotnet-architect event-sourcing-architect hybrid-cloud-architect senior-architect service-mesh-expert docs-architect wiki-architect reference-builder tutorial-engineer"

# Embedded/Firmware
EMBEDDED="arm-cortex-expert firmware-analyst firmware-analyst dwarf-expert gdb-cli"

# Excessive frameworks (keep only React/Next.js)
FRAMEWORKS_BLOAT="angular angular-best-practices angular-migration angular-state-management angular-ui-patterns vuejs nuxt svelte sveltekit astro laravel-expert laravel-security-audit django-pro django-perf-review django-access-review ruby-pro rails new-rails-project skill-rails-upgrade php-pro wordpress wordpress-penetration-testing wordpress-plugin-development wordpress-theme-development wordpress-woocommerce-development flask fastapi-pro fastapi-router-py fastapi-templates python-fastapi-development"

# Combined
COMBINED="$MEDIA $GRAPHICS_3D $ARCH_BLOAT $EMBEDDED $FRAMEWORKS_BLOAT"

echo "Pass 3: Archiving media, 3D, architecture bloat, embedded, excess frameworks..."
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
echo "=== PASS 3 COMPLETE ==="
echo "Moved: $MOVED skills"
echo "Not found: $NOT_FOUND skills"
echo ""
echo "Remaining skills:"
rtk ls -1 "$SKILLS_DIR" | wc -l
