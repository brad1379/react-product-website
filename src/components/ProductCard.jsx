import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="card">
            <img className="card__image" src={product.image} alt={product.name} />
            <div className="card__body">
                <p className="card__category">{product.category}</p>
                <h3 className="card__name">{product.name}</h3>
                <p className="card__price">${product.price.toFixed(2)}</p>
            </div>
        </Link>
    )
}

export default ProductCard
