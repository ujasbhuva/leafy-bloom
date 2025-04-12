
# 🪴 LeafyBloom - Plant Shop Web Application

LeafyBloom is a modern e-commerce web application for plant enthusiasts, offering a curated selection of indoor plants, care guides, and gardening accessories.

## Features

### Shopping Experience
- **Product Catalog**: Browse a diverse collection of plants categorized by type (Foliage, Succulents, Flowering)
- **Detailed Product Pages**: View plant descriptions, care requirements, pricing, and high-quality images
- **Plant Filtering**: Filter plants by category, price range, light requirements, and difficulty level
- **Plant Search**: Easily find specific plants with the search functionality

### User Features
- **Shopping Cart**: Add/remove plants, adjust quantities, and view cart totals
- **Wishlist**: Save favorite plants for future purchase
- **Checkout Process**: Multi-step checkout with shipping, payment, and order review
- **Order Management**: Track and manage placed orders

### Content
- **Blog Section**: Explore plant care tips, interior styling ideas, and gardening advice
- **About Us Page**: Learn about LeafyBloom's mission and team

## Technology Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router
- **State Management**: React Context API, React Hooks
- **Data Management**: TanStack Query (React Query)

## Screenshots

The application includes several key sections:
- Home page with featured plants and promotional sections
- Plant catalog with filtering capabilities
- Individual plant detail pages
- Blog section with articles
- Shopping cart and checkout flow
- Order management dashboard

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/leafybloom.git
cd leafybloom
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

The project follows a feature-based organization:

```
src/
├── components/         # Reusable UI components
├── data/               # Mock data for plants and blogs
├── pages/              # Page components
├── providers/          # Context providers (cart, wishlist)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
```

## Future Enhancements

- User authentication and accounts
- Plant care reminders
- Loyalty program
- Plant recommendation engine
- Reviews and ratings
- Mobile application

## License

[MIT](LICENSE)

---

Made with 💚 by LeafyBloom
