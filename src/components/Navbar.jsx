import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo-container">
                    <img src="images/logo.png" alt="Raj Saffron & Nuts" className="logo" />
                    <span className="brand-name" style={{display: 'block'}}>Raj Saffron & Nuts</span>
                </div>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li><span className="nav-link" onClick={() => scrollToSection('home')}>Home</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('products')}>Products</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('about')}>About</span></li>
                    <li><span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span></li>
                </ul>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
