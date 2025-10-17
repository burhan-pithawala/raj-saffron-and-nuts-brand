const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-subtitle">Premium Quality Since Inception</div>
                    <h1 className="hero-title">Discover the Finest Saffron & Nuts</h1>
                    <p className="hero-description">
                        Experience the rich heritage and exquisite flavors of our premium saffron and carefully selected nuts. 
                        Each product is handpicked to ensure the highest quality for your culinary adventures.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
                            Explore Products
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            Get in Touch
                        </button>
                    </div>
                </div>
                <div className="hero-image-container">
                    <img 
                        src="images/hero1.jpeg" 
                        alt="Premium Saffron" 
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
