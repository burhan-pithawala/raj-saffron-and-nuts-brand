const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Premium Kashmiri Saffron',
            category: 'Saffron',
            description: 'The finest Grade A Kashmiri saffron threads with intense aroma and deep color.',
            price: '₹2,499',
            image: '/images/Gemini_Generated_Image_f4kw5kf4kw5kf4kw.png',
            badge: 'Best Seller'
        },
        {
            id: 2,
            name: 'Honey Roasted Cashews',
            category: 'Flavored Nuts',
            description: 'Premium cashews roasted to perfection with natural honey coating.',
            price: '₹599',
            image: '/images/Gemini_Generated_Image_hnaxxjhnaxxjhnax.png',
            badge: 'Popular'
        },
        {
            id: 3,
            name: 'Salted Almonds',
            category: 'Flavored Nuts',
            description: 'Crunchy California almonds with a perfect balance of salt.',
            price: '₹699',
            image: '/images/Gemini_Generated_Image_hnaxxjhnaxxjhnax (1).png',
            badge: 'New'
        },
        {
            id: 4,
            name: 'Spicy Peri Peri Cashews',
            category: 'Flavored Nuts',
            description: 'Bold and spicy peri peri seasoned cashews for the adventurous palate.',
            price: '₹649',
            image: '/images/Gemini_Generated_Image_hnaxxjhnaxxjhnax (2).png',
            badge: 'Trending'
        },
        {
            id: 5,
            name: 'Caramelized Walnuts',
            category: 'Flavored Nuts',
            description: 'Rich walnuts coated with sweet caramel glaze.',
            price: '₹799',
            image: '/images/Gemini_Generated_Image_9x94og9x94og9x94.png',
            badge: 'Premium'
        },
        {
            id: 6,
            name: 'Mixed Dry Fruits',
            category: 'Assorted',
            description: 'A delightful mix of premium dry fruits and nuts.',
            price: '₹899',
            image: '/images/Gemini_Generated_Image_1cepw61cepw61cep.png',
            badge: 'Value Pack'
        }
    ]

    return (
        <section className="products" id="products">
            <div className="products-container">
                <div className="section-header">
                    <div className="section-subtitle">Our Collection</div>
                    <h2 className="section-title">Premium Products</h2>
                </div>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.image.slice(1)} alt={product.name} className="product-image" />
                                <span className="product-badge">{product.badge}</span>
                            </div>
                            <div className="product-content">
                                <div className="product-category">{product.category}</div>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-footer">
                                    <span className="product-price">{product.price}</span>
                                    <a href="https://noon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
