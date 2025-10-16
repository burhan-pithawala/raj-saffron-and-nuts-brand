const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-image-container">
                    <img 
                        src="images/Gemini_Generated_Image_f4kw5kf4kw5kf4kw.png" 
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
                        Every product we offer is carefully handpicked, ensuring that you receive nothing but 
                        the best. Our saffron comes from the pristine valleys of Kashmir, while our nuts are 
                        sourced from the finest farms around the world.
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
