# Music Band T-Shirt Storefront

A React single-page application for a music band T-shirt e-commerce store. It connects to the Python e-commerce API to provide a responsive customer storefront and an administrator workspace.

## What We're Building

The application will provide:

- A branded landing page with navigation to browse the store
- Product catalog browsing, search, filters, product details, and variant selection
- Customer account access, shopping cart, checkout, and order tracking
- Administrative tools for products, inventory, orders, customers, and sales metrics

The project currently includes the application shell, public layout, landing-page starter, routing, theming, Redux store, and RTK Query API base.

## Technology Stack

| Technology | Purpose |
|---|---|
| React and TypeScript | User interface and type safety |
| Vite | Development server and production build |
| Redux Toolkit and RTK Query | Client state and API integration |
| Ant Design and Sass | Components, theme, and responsive styles |
| React Router | Client-side routing |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```sh
cd e-commerce-web-react
npm install
```

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start Vite at `http://localhost:5173` |
| `npm run lint` | Run ESLint |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Configuration

Vite exposes only `VITE_`-prefixed environment variables to client code.

| Variable | Default | Description |
|---|---|---|
| `VITE_ENV` | `local` | Application environment name |
| `VITE_BASE_API_URL` | `http://127.0.0.1:8000` | Python API origin |
| `VITE_API_VERSION` | `/api/v1` | API version prefix |

The API base URL is composed as `{VITE_BASE_API_URL}{VITE_API_VERSION}`, for example `http://127.0.0.1:8000/api/v1`.

## Project Structure

```text
src/
├── app/       # Application shell, routing, store, layouts, theme, and API base
├── config/    # Environment configuration
├── features/  # Storefront and future customer/admin features
├── shared/    # Reusable components, pages, types, and utilities
└── styles/    # Global SCSS and design tokens
```

## Contributing

1. Create a feature branch.
2. Follow [AGENTS.md](./AGENTS.md) and the [repository standards](./.opencode/knowledge/repo-standards.md).
3. Run `npm run lint` and `npm run build`.
4. Open a pull request.
