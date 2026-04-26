# Odyssey Events [Odyssey Events](https://odyssey-events-chi.vercel.app)

A modern event management platform built with Next.js that allows users to discover, browse, and manage various types of events across Bangladesh. The platform features a comprehensive event catalog with detailed information, specifications, and booking capabilities.

## Key Features

- **Event Discovery**: Browse a diverse collection of events including corporate summits, weddings, tech expos, startup pitch days, art exhibitions, charity galas, food festivals, sports tournaments, and New Year celebrations
- **Detailed Event Information**: Each event includes comprehensive details such as duration, venue capacity, pricing, specifications, and organizer information
- **User Authentication**: Firebase-based authentication system with Google sign-in support
- **Modern UI/UX**: Built with DaisyUI and TailwindCSS for a beautiful, responsive interface
- **Dynamic Routing**: Next.js App Router with dynamic routes for individual event pages
- **Toast Notifications**: React Toastify integration for user feedback and notifications
- **Responsive Design**: Fully responsive layout optimized for all device sizes

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd odyssey-events
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up Firebase configuration:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Google Authentication in the Firebase console
   - Copy your Firebase configuration values
   - Create a `.env.local` file in the project root
   - Add your Firebase credentials:

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Route Summary

- `/` - Homepage with hero section, features, featured events, testimonials, and CTA banner
- `/about` - About page with project information
- `/events` - Events listing page displaying all available events
- `/events/[id]` - Individual event detail page with dynamic routing
- `/add-product` - Add new event/product page (admin functionality)
- `/manage-products` - Manage existing events/products (admin functionality)
- `/blog` - Blog section for articles and updates
- `/contact` - Contact page for user inquiries
- `/login` - User login page with Firebase authentication
- `/register` - User registration page

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **UI Library**: React 19.2.4
- **Styling**: TailwindCSS 4.2.4 with DaisyUI 5.5.19
- **Authentication**: Firebase 12.12.1
- **Notifications**: React Toastify 11.1.0
- **Language**: JavaScript

## Project Structure

```
odyssey-events/
├── public/              # Static assets (SVG icons)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── add-product/ # Add event page
│   │   ├── blog/       # Blog section
│   │   ├── contact/    # Contact page
│   │   ├── events/     # Events pages (list and detail)
│   │   ├── login/      # Login page
│   │   ├── register/   # Registration page
│   │   └── manage-products/ # Event management page
│   ├── components/     # Reusable React components
│   │   ├── homepage/   # Homepage-specific components
│   │   ├── Footer.js   # Footer component
│   │   └── Navbar.js   # Navigation bar
│   └── data/           # Data files
│       └── eventsData.js # Event catalog data
├── package.json        # Project dependencies
└── next.config.mjs     # Next.js configuration
```

## Deployment

To deploy Next.js app used the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Live Link: Odyssey Events-(https://odyssey-events-chi.vercel.app)
