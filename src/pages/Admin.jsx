import { useState } from "react"
import { useProducts } from "../context/ProductContext"

const emptyForm = { name: "", price: "", category: "", image: "", description: "" }

function Admin() {
    const { products, loading, error, addProduct, updateProduct, deleteProduct } = useProducts()
    const [newProduct, setNewProduct] = useState(emptyForm)
    const [editingId, setEditingId] = useState(null)
    const [editForm, setEditForm] = useState(emptyForm)

    function handleAddChange(e) {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    function handleAddSubmit(e) {
        e.preventDefault()
        addProduct({ ...newProduct, price: Number(newProduct.price) })
        setNewProduct(emptyForm)
    }

    function startEdit(product) {
        setEditingId(product.id)
        setEditForm({
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            description: product.description,
        })
    }

    function cancelEdit() {
        setEditingId(null)
        setEditForm(emptyForm)
    }

    function handleEditChange(e) {
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }

    function handleEditSubmit(e, id) {
        e.preventDefault()
        updateProduct(id, { ...editForm, price: Number(editForm.price) })
        cancelEdit()
    }

    function handleDelete(id) {
        if (window.confirm("Delete this product?")) {
            deleteProduct(id)
            if (editingId === id) cancelEdit()
        }
    }

    return (
        <div className="admin">
            <h1>Admin</h1>

            <section className="admin__section">
                <h2>Add a product</h2>
                <form onSubmit={handleAddSubmit} className="admin__form">
                    <input name="name" placeholder="Name" value={newProduct.name} onChange={handleAddChange} required />
                    <input name="price" type="number" step="0.01" min="0" placeholder="Price" value={newProduct.price} onChange={handleAddChange} required />
                    <input name="category" placeholder="Category" value={newProduct.category} onChange={handleAddChange} required />
                    <input name="image" placeholder="Image URL" value={newProduct.image} onChange={handleAddChange} />
                    <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleAddChange} />
                    <div className="admin__form-actions">
                        <button type="submit">Add product</button>
                    </div>
                </form>
            </section>

            <section className="admin__section">
                <h2>Products</h2>
                {loading && <p className="state">Loading catalog…</p>}
                {error && <p className="state state--error">{error}</p>}

                <ul className="admin__list">
                    {products.map((product) =>
                        editingId === product.id ? (
                            <li key={product.id} className="admin__row">
                                <form onSubmit={(e) => handleEditSubmit(e, product.id)} className="admin__form">
                                    <input name="name" placeholder="Name" value={editForm.name} onChange={handleEditChange} required />
                                    <input name="price" type="number" step="0.01" min="0" placeholder="Price" value={editForm.price} onChange={handleEditChange} required />
                                    <input name="category" placeholder="Category" value={editForm.category} onChange={handleEditChange} required />
                                    <input name="image" placeholder="Image URL" value={editForm.image} onChange={handleEditChange} />
                                    <textarea name="description" placeholder="Description" value={editForm.description} onChange={handleEditChange} />
                                    <div className="admin__form-actions">
                                        <button type="submit">Save</button>
                                        <button type="button" onClick={cancelEdit}>Cancel</button>
                                    </div>
                                </form>
                            </li>
                        ) : (
                            <li key={product.id} className="admin__row">
                                <span className="admin__row-name">{product.name}</span>
                                <span className="admin__row-category">{product.category}</span>
                                <span className="admin__row-price">${product.price.toFixed(2)}</span>
                                <div className="admin__row-actions">
                                    <button type="button" onClick={() => startEdit(product)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(product.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </section>
        </div>
    )
}

export default Admin
