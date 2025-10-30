# Infant & Toddler Education

A modern, accessible, and playful educational website focused on infant and toddler education in Australia, aligned with EYLF and VEYLDF frameworks.

## Features

- 🎨 **Modern Design**: Playful yet professional interface with soft colors and rounded corners
- 🌙 **Dark Mode**: System-aware theme with toggle support
- 📱 **Fully Responsive**: Mobile-first design that scales beautifully
- ♿ **Accessible**: WCAG-minded with keyboard navigation and screen reader support
- 🎭 **Smooth Animations**: Framer Motion powered interactions with reduced-motion support
- 🔍 **SEO Optimized**: Dynamic page titles, meta descriptions, and Open Graph tags
- 📚 **8 Curriculum Topics**: Comprehensive coverage of infant and toddler education

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Nunito + Inter)
- **TypeScript**: Full type safety

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Breadcrumbs, etc.
│   ├── ui/              # shadcn/ui components
│   └── ThemeProvider.tsx
├── pages/
│   ├── curriculum/      # 8 curriculum topic pages
│   ├── Home.tsx
│   ├── Reference.tsx
│   └── NotFound.tsx
├── utils/
│   └── seo.ts          # Dynamic SEO utilities
└── App.tsx
```

## Design System

The project uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

- **Colors**: HSL-based semantic tokens for light/dark modes
- **Typography**: Nunito (headings) + Inter (body)
- **Spacing**: Generous white space with consistent rhythm
- **Shadows**: Soft, layered shadows for depth
- **Animations**: Accessible motion with reduced-motion support

### Color Palette

- Primary: Indigo (#6C63FF)
- Secondary: Warm Yellow (#F8B400)
- Accent: Teal (#00C2A8)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Routes

- `/` - Home page with EYLF/VEYLDF overview
- `/reference` - Academic references and citations
- `/curriculum/*` - 8 curriculum topic pages:
  - Teaching Infant and Toddler Education
  - Infant and Toddler Play Environments
  - Promoting Development, Learning, and Wellbeing
  - Supporting Cognitive Development
  - Fostering Social Development
  - Fostering Emotional Development
  - Facilitating Language and Literacy Development
  - Perceptual Development and the Five Senses

## Key Features

### Dynamic SEO

Page titles are automatically generated using:
1. The page's `<h1>` text
2. Route-provided title string
3. Smart fallback based on content keywords (e.g., EYLF, VEYLDF)

Format: `<Page Title> · Infant & Toddler Education`

### Accessibility

- Semantic HTML5 structure
- Keyboard navigation support
- ARIA labels where needed
- Respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards
- Focus states on all interactive elements

### Animations

All animations respect the user's motion preferences and include:
- Fade in transitions
- Smooth page transitions
- Blob decorations with floating animations
- Hover effects with scale transforms
- Smooth scrolling

## Contributing

This is an educational resource. Content updates are welcome, especially for the curriculum topic pages which are currently placeholders.

## License

Educational use. All content related to EYLF and VEYLDF adheres to Australian early childhood education standards.

## Deployment

Deploy easily with [Lovable](https://lovable.dev) or any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Acknowledgments

Built following the Early Years Learning Framework (EYLF) and Victorian Early Years Learning and Development Framework (VEYLDF) guidelines for Australian early childhood education.
