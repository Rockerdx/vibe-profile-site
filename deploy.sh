#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
CONTAINER_NAME="vibe-profile-site"
PORT="3002"
HEALTH_CHECK_TIMEOUT=30
HEALTH_CHECK_INTERVAL=2

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Docker is running
check_docker() {
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed"
        exit 1
    fi
    
    if ! docker info &> /dev/null; then
        log_error "Docker is not running"
        exit 1
    fi
    
    log_success "Docker is running"
}

# Build the Docker image
build_image() {
    log_info "Building Docker image..."
    
    if docker compose build; then
        log_success "Docker image built successfully"
    else
        log_error "Failed to build Docker image"
        exit 1
    fi
}

# Start/restart the container
start_container() {
    log_info "Starting container..."
    
    if docker compose up -d; then
        log_success "Container started"
    else
        log_error "Failed to start container"
        exit 1
    fi
}

# Wait for container to be healthy
wait_for_health() {
    log_info "Waiting for service to be healthy..."
    
    local elapsed=0
    while [ $elapsed -lt $HEALTH_CHECK_TIMEOUT ]; do
        if curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT | grep -q "200"; then
            log_success "Service is healthy (HTTP 200)"
            return 0
        fi
        
        sleep $HEALTH_CHECK_INTERVAL
        elapsed=$((elapsed + HEALTH_CHECK_INTERVAL))
        log_info "Waiting... ($elapsed/${HEALTH_CHECK_TIMEOUT}s)"
    done
    
    log_error "Service failed to become healthy within ${HEALTH_CHECK_TIMEOUT}s"
    return 1
}

# Show container logs
show_logs() {
    log_info "Recent container logs:"
    echo "─────────────────────────────────────"
    docker logs --tail 20 $CONTAINER_NAME 2>&1 | head -20
    echo "─────────────────────────────────────"
}

# Main deployment function
deploy() {
    echo ""
    log_info "🚀 Starting deployment of profile-site"
    echo "═══════════════════════════════════════"
    echo ""
    
    # Step 1: Check Docker
    check_docker
    
    # Step 2: Build image
    build_image
    
    # Step 3: Start container
    start_container
    
    # Step 4: Wait for health
    if ! wait_for_health; then
        log_error "Deployment failed - service not healthy"
        show_logs
        exit 1
    fi
    
    # Success!
    echo ""
    echo "═══════════════════════════════════════"
    log_success "🎉 Deployment successful!"
    echo "═══════════════════════════════════════"
    echo ""
    echo "   Local:   http://localhost:$PORT"
    echo "   Public:  https://me.rockerdx.site"
    echo ""
}

# Show help
show_help() {
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  deploy    Build and deploy (default)"
    echo "  restart   Restart container without rebuild"
    echo "  logs      Show container logs"
    echo "  status    Show container status"
    echo "  stop      Stop the container"
    echo "  clean     Remove old images and containers"
    echo "  help      Show this help message"
    echo ""
}

# Command handlers
case "${1:-deploy}" in
    deploy)
        deploy
        ;;
    restart)
        log_info "Restarting container..."
        docker compose restart
        wait_for_health
        log_success "Container restarted"
        ;;
    logs)
        docker logs -f $CONTAINER_NAME
        ;;
    status)
        docker compose ps
        echo ""
        log_info "Ports:"
        echo "  Local:  http://localhost:$PORT"
        echo "  Public: https://me.rockerdx.site"
        ;;
    stop)
        log_info "Stopping container..."
        docker compose down
        log_success "Container stopped"
        ;;
    clean)
        log_warning "Removing old images and containers..."
        docker compose down --rmi local --remove-orphans
        log_success "Cleanup complete"
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
