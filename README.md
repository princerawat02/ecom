# Ecom Next.js Project

This is an e-commerce web application built with Next.js, TypeScript, Stripe, and modern React features.

## Features

- Product carousel
- Stripe integration for payments
- Responsive navigation bar
- Product listing and checkout pages
- Modular UI components

## Tech Stack

- Next.js
- React
- TypeScript
- Stripe API
- PostCSS
- ESLint

## Getting Started

### Prerequisites

- Node.js
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd ecom
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up Stripe API keys in your environment variables.

### Running the App

```bash
pnpm dev
```

### Folder Structure

- `app/` - Main application pages (products, checkout, etc.)
- `components/` - Reusable UI components (carousel, navbar, card, button)
- `lib/` - Utility libraries (Stripe integration)
- `public/` - Static assets (SVGs, images)

## Stripe Integration

- Configure your Stripe keys in `lib/stripe.ts`.
- Products and checkout use Stripe's API for secure payments.

## Customization

- Modify UI components in `components/ui/` for your branding.
- Add new pages in the `app/` directory.

## License

MIT

---

Feel free to contribute or open issues for improvements!
