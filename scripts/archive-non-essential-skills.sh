#!/bin/bash
# Archive Non-Essential Skills Script
# Keeps only essential coding-related skills

SKILLS_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills"
ARCHIVE_DIR="/home/rockerdx/profile-site/vibe-profile-site/.agents/skills-archive"

# Create archive directory
mkdir -p "$ARCHIVE_DIR"

# Categories to remove
HEALTH_MEDICAL="ai-analyzer family-health-analyzer fitness-analyzer goal-analyzer health-trend-analyzer mental-health-analyzer nutrition-analyzer occupational-health-analyzer oral-health-analyzer rehabilitation-analyzer sexual-health-analyzer skin-health-analyzer sleep-analyzer tcm-constitution-analyzer travel-health-analyzer weightloss-analyzer claude-ally-health bdi-mental-states bdistill-behavioral-xray behavioral-modes"

LEGAL="advogado-criminal advogado-especialista legal-advisor local-legal-seo-audit"

PERSONA="andrej-karpathy bill-gates elon-musk geoffrey-hinton ilya-sutskever sam-altman steve-jobs warren-buffett yann-lecun yann-lecun-debate yann-lecun-filosofia yann-lecun-tecnico"

AUTOMATION="activecampaign-automation airtable-automation amplitude-automation analytics-product analytics-tracking asana-automation bamboohr-automation basecamp-automation billing-automation box-automation brevo-automation cal-com-automation calendly-automation canva-automation canvas-design changelog-automation clickup-automation close-automation coda-automation confluence-automation convertkit-automation datadog-automation discord-automation discord-bot-architect docusign-automation dropbox-automation email-sequence email-systems figma-automation freshdesk-automation freshservice-automation helpdesk-automation hubspot-automation hubspot-integration instagram instagram-automation intercom-automation jira-automation klaviyo-automation linear-automation linkedin-automation linkedin-cli mailchimp-automation make-automation marketing-ideas marketing-psychology microsoft-teams-automation miro-automation mixpanel-automation monday-automation notion notion-automation notion-template-business odoo-sales-crm-expert one-drive-automation outlook-automation outlook-calendar-automation pagerduty-automation pipedrive-automation posthog-automation postmark-automation reddit-automation render-automation salesforce-automation segment-automation sendgrid-automation shopify-automation slack-automation slack-bot-builder slack-gif-creator square-automation stripe-automation stripe-automation telegram telegram-automation tiktok-automation todoist-automation trello-automation twitter-automation twitter-automation whatsapp-automation wrike-automation youtube-automation youtube-summarizer zendesk-automation zoho-crm-automation zoom-automation googlesheets-automation google-analytics-automation google-calendar-automation google-docs-automation google-drive-automation google-sheets-automation google-slides-automation gmail-automation"

# Azure SDK bloat (keep only essential ones)
AZURE_BLOAT="azure-ai-agents-persistent-dotnet azure-ai-agents-persistent-java azure-ai-anomalydetector-java azure-ai-contentsafety-java azure-ai-contentsafety-py azure-ai-contentsafety-ts azure-ai-contentunderstanding-py azure-ai-document-intelligence-dotnet azure-ai-document-intelligence-ts azure-ai-formrecognizer-java azure-ai-ml-py azure-ai-projects-dotnet azure-ai-projects-java azure-ai-projects-py azure-ai-projects-ts azure-ai-textanalytics-py azure-ai-transcription-py azure-ai-translation-document-py azure-ai-translation-text-py azure-ai-translation-ts azure-ai-vision-imageanalysis-java azure-ai-vision-imageanalysis-py azure-ai-voicelive-dotnet azure-ai-voicelive-java azure-ai-voicelive-py azure-ai-voicelive-ts azure-appconfiguration-java azure-appconfiguration-py azure-appconfiguration-ts azure-communication-callautomation-java azure-communication-callingserver-java azure-communication-chat-java azure-communication-common-java azure-communication-sms-java azure-compute-batch-java azure-containerregistry-py azure-cosmos-db-py azure-cosmos-java azure-cosmos-py azure-cosmos-rust azure-cosmos-ts azure-data-tables-java azure-data-tables-py azure-eventgrid-dotnet azure-eventgrid-java azure-eventgrid-py azure-eventhub-dotnet azure-eventhub-java azure-eventhub-py azure-eventhub-rust azure-eventhub-ts azure-identity-dotnet azure-identity-java azure-identity-py azure-identity-rust azure-identity-ts azure-keyvault-certificates-rust azure-keyvault-keys-rust azure-keyvault-keys-ts azure-keyvault-py azure-keyvault-secrets-rust azure-keyvault-secrets-ts azure-maps-search-dotnet azure-messaging-webpubsub-java azure-messaging-webpubsubservice-py azure-mgmt-apicenter-dotnet azure-mgmt-apicenter-py azure-mgmt-apimanagement-dotnet azure-mgmt-apimanagement-py azure-mgmt-applicationinsights-dotnet azure-mgmt-arizeaiobservabilityeval-dotnet azure-mgmt-botservice-dotnet azure-mgmt-botservice-py azure-mgmt-fabric-dotnet azure-mgmt-fabric-py azure-mgmt-mongodbatlas-dotnet azure-mgmt-weightsandbiases-dotnet azure-microsoft-playwright-testing-ts azure-monitor-ingestion-java azure-monitor-ingestion-py azure-monitor-opentelemetry-exporter-java azure-monitor-opentelemetry-exporter-py azure-monitor-opentelemetry-py azure-monitor-opentelemetry-ts azure-monitor-query-java azure-monitor-query-py azure-postgres-ts azure-resource-manager-cosmosdb-dotnet azure-resource-manager-durabletask-dotnet azure-resource-manager-mysql-dotnet azure-resource-manager-playwright-dotnet azure-resource-manager-postgresql-dotnet azure-resource-manager-redis-dotnet azure-resource-manager-sql-dotnet azure-search-documents-dotnet azure-search-documents-py azure-search-documents-ts azure-security-keyvault-keys-dotnet azure-security-keyvault-keys-java azure-security-keyvault-secrets-java azure-servicebus-dotnet azure-servicebus-py azure-servicebus-ts azure-speech-to-text-rest-py azure-storage-blob-java azure-storage-blob-py azure-storage-blob-rust azure-storage-blob-ts azure-storage-file-datalake-py azure-storage-file-share-py azure-storage-file-share-ts azure-storage-queue-py azure-storage-queue-ts azure-web-pubsub-ts"

# AWS bloat (keep only essential)
AWS_BLOAT="aws-compliance-checker aws-cost-cleanup aws-cost-optimizer aws-iam-best-practices aws-penetration-testing aws-secrets-rotation aws-security-audit aws-serverless"

# GCP bloat
GCP_BLOAT="gcp-cloud-run"

# Other non-essential
OTHER="ab-test-setup ad-creative agent-evaluation agentfolio agentmail agent-manager-skill agent-memory-mcp agent-memory-systems agent-orchestration-improve-agent agent-orchestration-multi-agent-optimize agents-md agents-v2-py ai-md ai-native-cli ai-seo ai-studio-image ai-wrapper-product akf-trust-metadata algorithmic-art alpha-vantage amazon-alexa analyze-project audio-transcriber auri-core backtesting-frameworks blockchain-developer blockrun blog-writing-guide brand-guidelines brand-guidelines-anthropic brand-guidelines-community business-analyst carrier-relationship-management cc-skill-clickhouse-io cc-skill-project-guidelines-example citation-management cold-email competitive-landscape competitor-alternatives content-creator content-marketer content-strategy copy-editing copywriting cost-optimization customs-trade-compliance daily daily-news-report data-storytelling defi-protocol-templates employment-contract-templates energy-procurement free-tool-strategy growth-engine hr-pro interview-coach inventory-demand-planning junta-leiloeiros launch-strategy lead-magnets legal-advisor leiloeiro-avaliacao leiloeiro-edital leiloeiro-ia leiloeiro-juridico leiloeiro-mercado leiloeiro-risco lex lightning-architecture-review lightning-channel-factories lightning-factory-explainer logistics-exception-management market-sizing-analysis marketing-ideas marketing-psychology matematico-tao maxia micro-saas-launcher monetization nanobanana-ppt-skills odoo-accounting-setup odoo-automated-tests odoo-backup-strategy odoo-docker-deployment odoo-ecommerce-configurator odoo-edi-connector odoo-hr-payroll-setup odoo-inventory-optimizer odoo-l10n-compliance odoo-manufacturing-advisor odoo-migration-helper odoo-module-developer odoo-orm-expert odoo-performance-tuner odoo-project-timesheet odoo-purchase-workflow odoo-qweb-templates odoo-rpc-api odoo-security-rules odoo-shopify-integration odoo-upgrade-advisor odoo-woocommerce-bridge odoo-xml-views-builder office-productivity pakistan-payments-stack payment-integration paypal-integration pci-compliance pricing-strategy privacy-by-design product-manager product-manager-toolkit product-marketing-context professional-proofreader programmatic-seo quant-analyst referral-program returns-reverse-logistics revops risk-manager risk-metrics-calculation sales-automator sales-enablement sankhya-dashboard-html-jsp-custom-best-pratices startup-analyst startup-business-analyst-business-case startup-business-analyst-financial-projections startup-business-analyst-market-opportunity startup-financial-modeling startup-metrics-framework team-composition-analysis unsplash-integration viral-generator-builder vizcom wellally-tech"

# Gaming (not needed for profile site)
GAMING="2d-games 3d-games game-art game-audio game-design game-development mobile-games multiplayer pc-games vr-ar web-games unity-developer unity-ecs-patterns unreal-engine-cpp-pro godot-4-migration godot-gdscript-patterns minecraft-bukkit-pro bevy-ecs-expert"

# Mobile dev (keep only if needed)
MOBILE="android-jetpack-compose-expert android_ui_verification flutter-expert ios-developer ios-debugger-agent mobile-design mobile-developer mobile-security-coder expo-api-routes expo-cicd-workflows expo-deployment expo-dev-client expo-tailwind-setup expo-ui-jetpack-compose expo-ui-swift-ui building-native-ui react-native-architecture upgrading-expo"

# Combined list
ALL_TO_REMOVE="$HEALTH_MEDICAL $LEGAL $PERSONA $AUTOMATION $AZURE_BLOAT $AWS_BLOAT $GCP_BLOAT $OTHER $GAMING $MOBILE"

echo "Starting skill archival..."
echo "Skills to archive: $(echo $ALL_TO_REMOVE | wc -w)"

MOVED=0
SKIPPED=0
NOT_FOUND=0

for skill in $ALL_TO_REMOVE; do
    if [ -d "$SKILLS_DIR/$skill" ]; then
        mv "$SKILLS_DIR/$skill" "$ARCHIVE_DIR/"
        echo "✓ Archived: $skill"
        ((MOVED++))
    elif [ -f "$SKILLS_DIR/$skill/SKILL.md" ] 2>/dev/null; then
        # Handle nested skills
        PARENT=$(dirname "$SKILLS_DIR/$skill")
        if [ -d "$PARENT/$skill" ]; then
            mv "$PARENT/$skill" "$ARCHIVE_DIR/"
            echo "✓ Archived: $skill"
            ((MOVED++))
        else
            ((NOT_FOUND++))
        fi
    else
        ((NOT_FOUND++))
    fi
done

echo ""
echo "=== ARCHIVAL COMPLETE ==="
echo "Moved: $MOVED skills"
echo "Not found: $NOT_FOUND skills"
echo "Archive location: $ARCHIVE_DIR"
echo ""
echo "Remaining skills in .agents/skills:"
rtk ls -1 "$SKILLS_DIR" | wc -l
