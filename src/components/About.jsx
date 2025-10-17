const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-image-container">
                    <img 
                        src="images/story1.png" 
                        alt="About Raj Saffron & Nuts" 
                        className="about-image"
                    />
                </div>
                <div className="about-content">
                    <h2>Our Story</h2>
                    <p>
                        Raj Saffron & Nuts was born from a passion for bringing the finest quality saffron and 
                        premium nuts to discerning customers. With years of expertise in sourcing and selecting 
                        the best products, we take pride in our commitment to excellence.
                    </p>
                    <p>
                        Each of our products is meticulously handpicked to guarantee you receive only the finest 
                        quality. Our Super Negin saffron is cultivated in the renowned Eyjan agricultural lands 
                        of Iran, and our premium nuts are sourced from the best farms across the globe.
                    </p>
                    <p>
                        We believe in maintaining the traditional methods of processing while incorporating 
                        modern packaging techniques to preserve freshness and authenticity.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5000+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Premium Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
