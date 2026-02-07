# DrinkWithMe.dev

🍺 Senior Developer by day, Professional Drinker by night.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 + shadcn/ui
- **Database**: PostgreSQL + Prisma (pending setup)
- **Form Handling**: React Hook Form + Zod

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── common/             # Shared components (Logo, Container, etc.)
│   ├── layout/             # Header, Footer
│   └── features/           # Feature-specific components
├── lib/                    # Utilities, constants, mock data
└── types/                  # TypeScript types
```

## Features

- 🍻 Live feed ticker showing real-time activity
- 📅 Booking calendar with hot dates
- 🏆 Leaderboard (BXH Thần Cồn)
- ❓ FAQ section
- ⭐ Reviews from drinking buddies

## Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/drinkwithme"
```

## License

Made with 🍺 and lots of bugs.
# drink_with_me
