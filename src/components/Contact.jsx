import { FaInstagram, FaWhatsapp, FaStore, FaLandmark, FaLocationArrow, FaMailchimp, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!</p>
                <div className="contact-info">
                    
                    <div className="contact-item">
                        <div className="contact-icon"><FaMailBulk/></div>
                        <div className="contact-label">Email</div>
                        <div className="contact-value">rajsaffronandnuts@gmail.com</div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon"><FaLocationArrow/></div>
                        <div className="contact-label">Location</div>
                        <div className="contact-value">Dubai</div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon"><FaWhatsapp/></div>
                        <div className="contact-label">Whatsapp</div>
                        <div className="contact-value">+971 50 297 8626</div>
                    </div>
                    
                </div>
                {/* <button className="btn btn-primary" style={{marginTop: '2rem'}}>Send Message</button> */}
                <a href="https://wa.me/+971502978626" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small" style={{marginTop: '2rem'}}>
                    Send Message
                </a>
            </div>
        </section>
    )
}

export default Contact
