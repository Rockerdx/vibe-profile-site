# 🚀 Deployment Guide

Quick deployment scripts for your profile site.

## Quick Start

```bash
# Deploy (build + restart)
./deploy.sh

# Or simply
./deploy
```

## All Commands

| Command | Description |
|---------|-------------|
| `./deploy.sh deploy` | Build and deploy (default) |
| `./deploy.sh restart` | Restart container without rebuild |
| `./deploy.sh logs` | Show container logs (follow mode) |
| `./deploy.sh status` | Show container status and URLs |
| `./deploy.sh stop` | Stop the container |
| `./deploy.sh clean` | Remove old images and containers |
| `./deploy.sh help` | Show help message |

## Examples

### First Time Deploy
```bash
cd /home/rockerdx/profile-site/vibe-profile-site
./deploy.sh
```

### After Code Changes
```bash
# Edit your files
./deploy.sh
```

### Check Status
```bash
./deploy.sh status
```

### View Logs
```bash
./deploy.sh logs
# Press Ctrl+C to stop following
```

### Troubleshooting
```bash
# Stop container
./deploy.sh stop

# Clean old images
./deploy.sh clean

# Fresh deploy
./deploy.sh deploy
```

## What the Script Does

1. ✅ Checks Docker is running
2. 🏗️ Builds Docker image
3. 🚀 Starts/restarts container
4. 🏥 Waits for health check (HTTP 200)
5. ✅ Shows success message with URLs

## Access Points

| Environment | URL |
|-------------|-----|
| Local | http://localhost:3002 |
| Public | https://me.rockerdx.site |
| Homelab | http://192.168.0.106:3002 |

## Manual Docker Commands

If you prefer manual control:

```bash
# Build
docker compose build

# Start
docker compose up -d

# View logs
docker compose logs -f

# Stop
docker compose down

# Rebuild from scratch
docker compose up -d --build --force-recreate
```

## Troubleshooting

### Port Already in Use
```bash
# Check what's using port 3002
sudo ss -tlnp | grep 3002

# Stop the profile site container
./deploy.sh stop

# Or change port in docker-compose.yml
```

### Build Fails
```bash
# Clean and rebuild
./deploy.sh clean
./deploy.sh deploy

# Or check logs
docker compose logs --tail=100
```

### Service Not Healthy
```bash
# Check container status
docker compose ps

# View recent logs
docker logs --tail=50 vibe-profile-site

# Test locally
curl http://localhost:3002
```

## Auto-Deploy on Git Push (Future)

To set up automatic deployments:

1. Create GitHub repository
2. Add SSH key to homelab server
3. Add GitHub secret: `DEPLOY_SSH_KEY`
4. Create `.github/workflows/deploy.yml`

Example workflow:
```yaml
name: Deploy to Homelab

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy via SSH
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOMELAB_HOST }}
          username: ${{ secrets.HOMELAB_USER }}
          key: ${{ secrets.DEPLOY_SSH_KEY }}
          script: |
            cd /home/rockerdx/profile-site/vibe-profile-site
            git pull
            ./deploy.sh
```

---

**Created:** 2026-03-28  
**Version:** 1.0
