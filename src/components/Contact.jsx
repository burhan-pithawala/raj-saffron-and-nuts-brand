const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div className="contact-label">Phone</div>
                        <div className="contact-value">+971 50 297 8626</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div className="contact-label">Email</div>
                        <div className="contact-value">info@rajsaffron.com</div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-label">Location</div>
                        <div className="contact-value">Dubai</div>
                    </div>
                </div>
                <button className="btn btn-primary" style={{marginTop: '2rem'}}>Send Message</button>
            </div>
        </section>
    )
}

export default Contact
