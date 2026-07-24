# Home Appliance Depot

A React single-page application for a small home-goods shop, built as a summative lab on
advanced React concepts: hooks-based state management, event handling, client-side data
fetching, and client-side routing.

The app serves two audiences from the same catalog:

- **Shoppers** can browse the collection, view product details, and search dynamically by
  name or category.
- **Admins** can log in to add new products and edit or delete existing ones (name, price,
  category, image, and description).

## Tech stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) for the SPA and routing
- [Vite](https://vitejs.dev/) for the dev server and build
- [json-server](https://github.com/typicode/json-server) as a mock REST API for products
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) for tests

## Getting started

Install dependencies:

```bash
npm install
```

The app fetches products from a local `json-server` instance, so **two processes need to run
at the same time**, in separate terminals:

```bash
# Terminal 1 — mock API on http://localhost:3001
npm run server

# Terminal 2 — Vite dev server
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Admin access

Visit `/login` and sign in with the password `admin123` to reach the `/admin` dashboard,
where products can be added, edited, or deleted. Login state is stored in `localStorage` and
persists across page reloads until you log out.

## Available scripts

| Script            | Description                                    |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Start the Vite dev server                       |
| `npm run server`   | Start json-server on port 3001 (the product API) |
| `npm run build`    | Build the app for production                    |
| `npm run preview`  | Preview the production build locally            |
| `npm run lint`     | Run ESLint                                       |
| `npm test`         | Run the test suite with Vitest                   |

## Project structure

```
src/
  components/    Reusable UI pieces (NavBar, ProductCard, SearchBar)
  context/       ProductContext — fetches/holds product data and CRUD actions
  pages/         Routed pages (Home, About, Login, Admin, ProductList, ProductDetails)
  data/db.json   Seed data served by json-server
  __tests__/     Vitest + React Testing Library test suites
```

## Routes

| Path             | Page            | Notes                                  |
| ---------------- | --------------- | --------------------------------------- |
| `/`               | Home            | Landing page                            |
| `/about`          | About           | About the shop                          |
| `/products`       | ProductList     | Searchable catalog grid                 |
| `/products/:id`   | ProductDetails  | Renders nested under ProductList        |
| `/login`          | Login           | Admin sign-in                           |
| `/admin`          | Admin           | Add/edit/delete products (requires login) |
