stockpilot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── EditableField.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── AddProduct.jsx
│   │   ├── ProductList.jsx        (search lives here)
│   │   └── ProductDetail.jsx      (edit fields here)
│   ├── context/
│   │   └── ProductContext.jsx     (shared products state)
│   ├── data/
│   │   └── initialProducts.js     (seed/mock data)
│   ├── styles/
│   │   ├── index.css
│   │   └── responsive.css
│   ├── App.jsx                    (routes)
│   └── main.jsx
├── package.json
└── vite.config.js