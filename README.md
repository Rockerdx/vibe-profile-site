# Vibe Profile Site

[![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Go](https://img.shields.io/badge/Go%2FGin-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://gin-gonic.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Professional profile website for **Muhammad Rizki Putra** ([@Rockerdx](https://github.com/Rockerdx))

🚀 **Live Demo**: [https://me.rockerdx.site](https://me.rockerdx.site)

<!-- Add screenshot here -->
<!-- ![Screenshot](docs/screenshot.png) -->

## ✨ Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Framer Motion with reduced motion support
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Type Safe** - Full TypeScript coverage
- **API Driven** - Go/Gin backend with PostgreSQL
- **Contact Form** - Form validation and submission
- **Resume Download** - PDF generation on demand
- **GitHub Stats** - Live widget showing GitHub activity
- **Docker Ready** - Complete containerization for easy deployment

## 📋 Table of Contents

- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)

## 🏗️ Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │     │    Backend      │     │   Database      │
│   Next.js 14    │────▶│   Go/Gin API    │────▶│   PostgreSQL    │
│   Port: 3002    │     │   Port: 8080    │     │   Port: 5432    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**Frontend** (this repository)
- Next.js 14 App Router
- React Server Components
- Tailwind CSS styling
- Framer Motion animations
- Static + Dynamic data fetching

**Backend** (separate repository: `vibe-profile-backend`)
- Go 1.21 with Gin framework
- RESTful API design
- PostgreSQL with GORM
- Health check endpoints

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker & Docker Compose (for full stack)
- Go 1.21+ (for backend development only)

### One-Command Deploy

```bash
# Clone both repositories
git clone https://github.com/yourusername/vibe-profile-site.git
git clone https://github.com/yourusername/vibe-profile-backend.git ../vibe-profile-backend

# Deploy everything
cd vibe-profile-site
./deploy.sh
```

## 💻 Development

### Frontend Only

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Run development server
npm run dev
```

Access at [http://localhost:3000](http://localhost:3000)

### Full Stack (with Backend)

```bash
# Terminal 1: Start database and backend
cd ../vibe-profile-backend

# Start PostgreSQL
docker run -d --name postgres \
  -e POSTGRES_USER=profile_user \
  -e POSTGRES_PASSWORD=profile_pass \
  -e POSTGRES_DB=profile_db \
  -p 5432:5432 \
  postgres:15-alpine

# Run migrations
go run cmd/migrate.go

# Start backend server
go run cmd/main.go

# Terminal 2: Start frontend
cd vibe-profile-site
npm run dev
```

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Profile information |
| GET | `/api/experiences` | Work experience history |
| GET | `/api/skills` | Skills categorized by type |
| GET | `/api/projects` | Portfolio projects |
| GET | `/api/education` | Education background |
| GET | `/api/certifications` | Professional certifications |
| GET | `/api/resume/download` | Download resume PDF |
| GET | `/health` | Health check status |

Base URL: `http://localhost:8080`

## 🐳 Deployment

### Docker Compose (Recommended)

```bash
# Build and start all services
docker compose up -d --build

# View logs
docker compose logs -f

# Stop all services
docker compose down
```

### Deploy Script Commands

```bash
./deploy.sh              # Full deploy with build
./deploy.sh restart        # Restart without rebuild
./deploy.sh logs           # View container logs
./deploy.sh status         # Check service status
./deploy.sh --help         # Show all commands
```

### Deployment URLs

| Environment | URL |
|-------------|-----|
| Local | http://localhost:3002 |
| Backend API | http://localhost:8080 |
| Homelab | http://192.168.0.106:3002 |
| Public | https://me.rockerdx.site |

## 🎨 Customization

### Update Profile Data

**Option 1: Database (Recommended)**

```bash
cd ../vibe-profile-backend

# Edit seed data in cmd/migrate.go
# Then run migrations
go run cmd/migrate.go
```

**Option 2: Static Fallback**

```typescript
// Edit src/lib/data.ts
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  // ...other fields
}
```

### Environment Variables

**Frontend** (`.env.local`)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

**Backend** (`config/config.json`)
```json
{
  "server": {
    "port": ":8080",
    "cors_origins": ["http://localhost:3000"]
  },
  "database": {
    "host": "postgres",
    "port": 5432,
    "user": "profile_user",
    "password": "profile_pass",
    "dbname": "profile_db"
  }
}
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Type check
npx tsc --noEmit
```

## 📁 Project Structure

```
vibe-profile-site/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx        # Root layout + SEO
│   │   ├── page.tsx          # Main page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── Hero.tsx          # Profile header
│   │   ├── About.tsx         # Bio section
│   │   ├── Experience.tsx    # Work timeline
│   │   ├── Skills.tsx        # Skills grid
│   │   ├── Projects.tsx      # Project showcase
│   │   └── Contact.tsx       # Contact form
│   ├── lib/
│   │   ├── api/              # API client
│   │   ├── data.ts           # Static fallback data
│   │   └── resume.ts         # PDF generation
│   ├── types/                # TypeScript interfaces
│   └── hooks/                # Custom hooks
├── docker-compose.yml        # Full stack orchestration
├── deploy.sh                 # Deployment helper
└── Dockerfile                # Container config
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3002 in use | `lsof -ti:3002 \| xargs kill -9` or change port in docker-compose.yml |
| Build fails | Run `npm install` and check TypeScript errors with `npx tsc` |
| API connection refused | Backend not running; frontend will fallback to static data |
| Styles not updating | Clear cache: `rm -rf .next && npm run build` |
| Docker network error | Run `docker network create homelab_homelab-net` |
| Database connection failed | Check postgres container: `docker logs vibe-postgres` |

## 🛡️ Security & Performance

- **TypeScript Strict Mode** - Full type safety
- **CORS Configuration** - Origin whitelist
- **Input Validation** - Form validation on frontend and backend
- **Reduced Motion Support** - Accessibility-first animations
- **Docker Security** - Non-root containers
- **Health Checks** - Service monitoring

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

---

**Built with ❤️ by [Muhammad Rizki Putra](https://github.com/Rockerdx)**
