const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Raj Saffron & Nuts</h3>
                        <p>
                            Your trusted source for premium quality saffron and flavored nuts. 
                            Experience the difference of authentic, handpicked products.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><span onClick={() => scrollToSection('home')}>Home</span></li>
                            <li><span onClick={() => scrollToSection('products')}>Products</span></li>
                            <li><span onClick={() => scrollToSection('about')}>About Us</span></li>
                            <li><span onClick={() => scrollToSection('contact')}>Contact</span></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Products</h4>
                        <ul className="footer-links">
                            <li><span onClick={() => scrollToSection('products')}>Saffron</span></li>
                            <li><span onClick={() => scrollToSection('products')}>Cashews</span></li>
                            <li><span onClick={() => scrollToSection('products')}>Almonds</span></li>
                            <li><span onClick={() => scrollToSection('products')}>Mixed Nuts</span></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Information</h4>
                        <ul className="footer-links">
                            <li><span>Privacy Policy</span></li>
                            <li><span>Terms & Conditions</span></li>
                            <li><span>Shipping Info</span></li>
                            <li><span>Return Policy</span></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Raj Saffron & Nuts. All rights reserved. Crafted with ❤️</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
