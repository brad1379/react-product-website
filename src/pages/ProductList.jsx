import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function ProductList() {
    const { products, loading, error } = useProducts();
    const [query, setQuery] = useState('')

    const search = query.trim().toLowerCase();
    const filtered = products.filter((product) => product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search))

    return(
        <div className="catalog">
            <div className="catalog__head">
                <div>
                    <p className="catalog__eyebrow">The collection</p>
                    <h1 className="catalog__title">Shop all products</h1>
                </div>
                <SearchBar value={query} onChange={setQuery} />
            </div>

            {loading && <p className="state">Loading catalog…</p>}
            {error && <p className="state state--error">{error}</p>}

            {!loading && !error && filtered.length === 0 && (
                <div className="empty">
                    <p className="empty__title">Nothing matches “{query}”.</p>
                    <p className="empty__hint">
                        Try a different name or category — or clear the search to see it all.
                    </p>
                </div>
            )}

            <div className="grid">
                {filtered.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                ))}
            </div>

            {/* Nested child route renders here: /products/:id shows below the grid. */}
            <Outlet />
        </div>
    )
}

export default ProductList