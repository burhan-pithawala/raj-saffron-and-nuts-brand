const Features = () => {
    const features = [
        {
            icon: '🌟',
            title: 'Premium Quality',
            description: 'Handpicked and carefully selected products ensuring the finest quality for our customers.'
        },
        {
            icon: '🌿',
            title: '100% Natural',
            description: 'All our products are completely natural with no artificial additives or preservatives.'
        },
        {
            icon: '📦',
            title: 'Fresh Packaging',
            description: 'Sealed in premium packaging to maintain freshness and preserve the authentic flavors.'
        },
        {
            icon: '✨',
            title: 'Rich Heritage',
            description: 'Bringing you the authentic taste with traditional methods passed down through generations.'
        }
    ]

    return (
        <section className="features">
            <div className="features-container">
                <div className="section-header">
                    <div className="section-subtitle">Why Choose Us</div>
                    <h2 className="section-title">The Raj Difference</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
