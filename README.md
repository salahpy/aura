# Aura Dashboard

A modern AI-powered analytics dashboard built with React, TypeScript, and HeroUI.

## Features

- **Dark Mode Support** - Toggle between light and dark themes with persistent storage
- **Responsive Design** - Optimized for desktop and tablet devices (768px breakpoint)
- **Modern UI Components** - Built with HeroUI component library
- **Smooth Animations** - Framer Motion for fluid interactions
- **Animated Logo** - Dynamic gradient orb with floating particles in the center screen
- **Gradient Text Effect** - Animated gradient shimmer effect on the "Aura" brand text
- **Collapsible Sidebar** - Space-efficient navigation system
- **Assistant Selector** - Multiple AI assistant configurations

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **HeroUI** - Component library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Installation

1. Clone the repository:
```bash
git clone https://github.com/salahpy/aura.git
cd aura-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure
```
src/
├── components/
│   ├── home/           # Home page components
│   ├── layout/         # Layout components (Sidebar, MainContent)
│   ├── sidebar/        # Sidebar-specific components
│   └── menus/          # Dropdown menus
├── context/            # React context (Theme)
├── hooks/              # Custom hooks
├── assets/             # Icons and images
├── data/               # Mock data
└── types/              # TypeScript types
```

## Design Implementation

This project is based on the Figma design provided by Futuretail.ai. Key implementation highlights:

- Pixel-perfect recreation of the UI design
- Responsive layout for tablet devices (768px breakpoint)
- Dark mode implementation with system preference detection
- Custom animations matching the design specifications
- Optimized component architecture for maintainability

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project was created as part of the Futuretail.ai Frontend Developer coding challenge.

---

**Developed by Nacef Salah Eddine**  
Submission for Futuretail.ai Frontend Developer Position
