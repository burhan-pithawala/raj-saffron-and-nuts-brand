const Products = () => {
    const products = [
        {
            id: 1,
            name: 'The Velvet Ritual Box',
            category: 'Saffron',
            description: 'A celebration of heritage wrapped in elegance. This opulent red velvet box, adorned with a gleaming gold clasp, unveils a curated ensemble of ceremonial treasures,each piece crafted to honor tradition and elevate gifting. This box is more than a product,it’s a moment of connection, beautifully preserved.',
            price: '',
            image: '/images/p1-alt.png',
            badge: 'Best Seller',
            noonLink: 'https://www.noon.com/uae-en/premium-maroon-color-velvet-saffron-gift-box-1g-super-negin-saffron-with-mortar-luxury-gift-box-perfect-for-diwali-eid-special-occasions/Z7728BCE473A69801DFC9Z/p/?o=fc1235e595ad9a1a'
        },
        {
            id: 2,
            name: 'Saffron & Cardamom Luxe Infusion Jar',
            category: 'Saffron',
            description: 'This exquisite jar, sculpted like a perfume bottle, holds two of the world’s most treasured spices, vivid red saffron threads layered beneath whole green cardamom pods.',
            price: '',
            image: '/images/p2-alt.png',
            badge: 'Popular',
            noonLink: 'https://www.noon.com/uae-en/10g-super-negin-iranian-saffron-pure-premium-quality-threads-with-queen-of-spices-premium-cardamom-in-elegant-crystal-design-decorative-jar/ZE7C80EDBA7C2F9AE66F5Z/p/?o=f713f2ec8c2814aa&shareId=ecd80884-3b60-48af-943c-bdb7841a9387'
        },
        {
            id: 3,
            name: 'RAJ Organic 7 Seeds Mix',
            category: 'Seeds',
            description: 'RAJ Organic 7 Seeds Mix is a nourishing blend crafted for mindful snacking. Packed with nature’s finest like pumpkin seeds , sunflower seeds, flex seeds, watermelon seeds , black seeds and other wholesome varieties.',
            price: '',
            image: '/images/p3-alt.png',
            badge: 'New',
            noonLink: 'https://www.noon.com/uae-en/organic-7-seeds-roasted-200-grm-healthy-superfood-blend-rich-in-protein-fiber-antioxidants-energy-immunity-booster-200g/ZBF6FEA3F906F143DF557Z/p/?o=bb54291da3f2feba'
        },
        {
            id: 4,
            name: 'RAJ Assorted Flavored Almonds',
            category: 'Flavored Nuts',
            description: 'RAJ Assorted Flavored Almonds blend tradition with indulgence. Each almond is delicately coated in vibrant flavors ( chaat masala, black paper, Bbq , Za’atar , cheese and more, offering a luxurious taste experience in every bite.',
            price: '',
            image: '/images/p4-alt.png',
            badge: 'Trending',
            noonLink: 'https://www.noon.com/uae-en/premium-crunchy-mixed-flavored-almonds-peeled-200-grm-exotic-flavours-like-zaatar-black-pepper-chilly-bbq-etc-crunchy-healthy-snack-for-parties-gifting-protein-rich-vegan-gluten-free/ZB3BA29F631B21C94854BZ/p/?o=ec2d1e50987f00ca'
        },
        {
            id: 5,
            name: 'RAJ Assorted Flavored Cashews',
            category: 'Flavored Nuts',
            description: 'RAJ Assorted Flavored Cashews bring a burst of color and flavor to every celebration. Coated in vibrant spices and seasonings, like za’atar, cheese, BBQ , chaat masala , Black paper and more, these premium cashews are as visually delightful as they are delicious.',
            price: '',
            image: '/images/p5-alt.png',
            badge: 'Premium',
            noonLink: 'https://www.noon.com/uae-en/premium-assorted-cashews-big-jumbo-size-in-7-delicious-flavours-200-grm-luxury-flavours-like-zaatar-black-pepper-chilly-bbq-etc-crunchy-healthy-snack-for-parties-gifting-protein-rich-vegan-gluten-free/ZE6873B533D8BDC890593Z/p/?o=e7c357276f4d1d9e'
        },
        {
            id: 6,
            name: 'RAJ Roasted Cashews',
            category: 'Flavored Nuts',
            description: 'RAJ Roasted Cashews deliver bold flavor with a golden crunch. Carefully roasted to perfection, each cashew offers a warm, nutty bite that’s both satisfying and premium.',
            price: '',
            image: '/images/p6-alt.png',
            badge: 'Value Pack',
            noonLink: 'https://www.noon.com/uae-en/salted-roasted-cashew-nuts-jumbo-size-200-grm-i-tasty-healthy-nut-snack-premium-quality/Z069F7BC2FDF2E122D289Z/p/?o=e2afc8107bf1351a'
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
                                    {/* <span className="product-price">{product.price}</span> */}
                                    <a href={product.noonLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">Buy Now</a>
                                    {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">Expore More</a> */}
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
