# vibe-profile-site

Professional profile website for Muhammad Rizki Putra (@Rockerdx)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Docker (Self-hosted)

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Docker Deployment

### Local Build

```bash
# Build and run
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### Homelab Deployment

The site is configured to run on the homelab network. Access at:
- Local: http://192.168.0.106:3001

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact section
├── lib/
│   └── data.ts             # Profile data
└── types/
    └── index.ts            # TypeScript types
```

## Customization

Edit `src/lib/data.ts` to update profile information:
- Personal details
- Work experience
- Skills
- Projects
- Contact information

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode by default
- ✅ Smooth animations (Framer Motion)
- ✅ SEO optimized
- ✅ Open Graph tags
- ✅ TypeScript for type safety
- ✅ Docker containerization

## License

MIT
