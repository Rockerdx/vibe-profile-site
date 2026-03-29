# vibe-profile-site

Professional profile website for Muhammad Rizki Putra (@Rockerdx)

## Tech Stack

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Backend
- **Language:** Go 1.21
- **Framework:** Gin
- **Database:** PostgreSQL 15
- **Config:** Viper (JSON)

### Deployment
- Docker & Docker Compose (Self-hosted)

## Quick Start

### Frontend Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend Development

```bash
cd ../vibe-profile-backend

# Install dependencies
go mod download

# Start PostgreSQL
docker run -d --name postgres \
  -e POSTGRES_USER=profile_user \
  -e POSTGRES_PASSWORD=profile_pass \
  -e POSTGRES_DB=profile_db \
  -p 5432:5432 \
  postgres:15-alpine

# Run migrations and seed data
go run cmd/migrate.go

# Start server
go run cmd/main.go
```

API runs on `http://localhost:8080`

### Build & Production

```bash
# Frontend build
npm run build
npm start

# Lint code
npm run lint
```

## Docker Deployment

### Quick Deploy (Recommended)

```bash
# Deploy with one command
./deploy.sh

# Restart without rebuild
./deploy.sh restart

# View logs
./deploy.sh logs

# Check status
./deploy.sh status

# See all commands
./deploy.sh --help
```

### Manual Docker Commands

```bash
# Build and run all services (frontend + backend + postgres)
docker compose up -d --build

# View logs
docker compose logs -f

# Stop
docker compose down
```

### Homelab Deployment

The site is deployed to the homelab network. Access at:
- **Frontend:** http://localhost:3002
- **Backend API:** http://localhost:8080
- **Homelab:** http://192.168.0.106:3002
- **Public:** https://me.rockerdx.site

See [DEPLOY.md](./DEPLOY.md) for full deployment guide.

## Project Structure

```
.
├── src/                        # Frontend Next.js app
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── lib/
│   │   ├── api/                # API client
│   │   └── data.ts             # Static data (fallback)
│   └── types/                  # TypeScript types
└── docker-compose.yml          # Multi-service setup
```

### Backend (Separate Repository)

The backend is in a separate directory: `../vibe-profile-backend`

```
vibe-profile-backend/
├── cmd/
│   ├── main.go             # Server entry point
│   └── migrate.go          # Migration tool
├── internal/
│   ├── config/             # Configuration
│   ├── database/           # Database layer
│   ├── handlers/           # HTTP handlers
│   ├── middleware/         # Gin middleware
│   └── models/             # Data models
└── config/
    └── config.json         # Server config
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Get profile information |
| GET | `/api/experiences` | Get work experiences |
| GET | `/api/skills` | Get skills by category |
| GET | `/api/projects` | Get projects |
| GET | `/api/education` | Get education history |
| GET | `/api/certifications` | Get certifications |
| GET | `/health` | Health check |

See [../vibe-profile-backend/README.md](../vibe-profile-backend/README.md) for full API documentation.

## Customization

### Update Profile Data

**Option 1: Via Database (Recommended)**
1. Update seed data in `../vibe-profile-backend/cmd/migrate.go`
2. Run `go run ../vibe-profile-backend/cmd/migrate.go`

**Option 2: Via Static Data (Fallback)**
1. Edit `src/lib/data.ts`
2. Rebuild frontend: `npm run build`

### Add New API Endpoint

1. Add handler in `../vibe-profile-backend/internal/handlers/handlers.go`
2. Register route in `../vibe-profile-backend/cmd/main.go`
3. Add client function in `src/lib/api/client.ts`

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode by default
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized
- ✅ Open Graph tags
- ✅ TypeScript for type safety
- ✅ Go/Gin REST API
- ✅ PostgreSQL database
- ✅ Docker containerization
- ✅ Health check endpoint

## Environment Variables

### Frontend (.env.local)

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Backend (config/config.json)

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

## License

MIT
