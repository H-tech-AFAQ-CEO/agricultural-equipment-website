'use client'

import { useState } from 'react'

const services = [
  { number: '01', title: 'Agricultural machinery', text: 'Reliable machines for every season, from soil preparation to harvest.', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Parts & wear', text: 'The right parts, when you need them. Genuine quality and practical advice.', image: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'Service & repair', text: 'Experienced technicians who keep your operation moving forward.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
]

const products = [
  { title: 'Compact & powerful', category: 'Tractors', image: 'https://images.unsplash.com/photo-1605338198618-d6c27c4d7b70?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Ready for every field', category: 'Implements', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=85' },
  { title: 'Built to last', category: 'Harvest', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  return (
    <main className="site-shell">
      <div className="topbar"><span>Trusted agricultural equipment since 1987</span><span className="topbar-right">NL / EN <span className="dot">·</span> Mon–Fri 08:00–17:30</span></div>
      <header className="header">
        <a href="#top" className="brand" aria-label="Fieldcraft home"><span className="brand-mark">F</span><span>FIELDCRAFT<span className="brand-sub">AGRICULTURAL SOLUTIONS</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <details className="nav-dropdown"><summary>Services <span>⌄</span></summary><div className="dropdown-menu"><a href="#services" onClick={() => setMenuOpen(false)}>All services</a><a href="#services" onClick={() => setMenuOpen(false)}>Machinery</a><a href="#services" onClick={() => setMenuOpen(false)}>Parts & wear</a><a href="#services" onClick={() => setMenuOpen(false)}>Service & repair</a></div></details><details className="nav-dropdown"><summary>Company <span>⌄</span></summary><div className="dropdown-menu"><a href="#about" onClick={() => setMenuOpen(false)}>About us</a><a href="#about" onClick={() => setMenuOpen(false)}>Our team</a><a href="#about" onClick={() => setMenuOpen(false)}>Careers</a></div></details><details className="nav-dropdown"><summary>Products <span>⌄</span></summary><div className="dropdown-menu"><a href="#products" onClick={() => setMenuOpen(false)}>Featured range</a><a href="#products" onClick={() => setMenuOpen(false)}>Tractors</a><a href="#products" onClick={() => setMenuOpen(false)}>Implements</a><a href="#products" onClick={() => setMenuOpen(false)}>Harvest</a></div></details><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Talk to an expert <span>↗</span></a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy"><p className="eyebrow">Equipment that works as hard as you do</p><h1>Made for the<br /><em>ground</em> ahead.</h1><p className="hero-text">From the first furrow to the final harvest, Fieldcraft brings dependable machinery, genuine expertise and service that keeps your business moving.</p><div className="hero-actions"><a href="#services" className="button button-dark">Explore our services <span>↗</span></a><a href="#about" className="text-link">Why Fieldcraft <span>→</span></a></div></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=90" alt="Red tractor working in a green field" /><div className="hero-stamp"><span>37</span><small>years of<br />experience</small></div></div>
      </section>

      <section className="trust-strip"><span>Our partners</span><div className="partner-logos"><b>CLAAS</b><b>KUHN</b><b>JOHN DEERE</b><b>LEMKEN</b><b>VÄDERSTAD</b></div></section>

      <section id="services" className="section services-section"><div className="section-intro"><p className="eyebrow">What we do</p><h2>Everything your<br /><em>operation</em> needs.</h2><p>Good equipment is only the beginning. We combine a carefully selected range with practical knowledge and a personal approach.</p></div><div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number}</div><img src={service.image} alt={service.title} /><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a></div></article>)}</div></section>

      <section id="about" className="about-section"><div className="about-image"><img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=1400&q=85" alt="Farmer walking through a crop field" /><span className="image-caption">Real work. Real relationships.</span></div><div className="about-copy"><p className="eyebrow">The Fieldcraft difference</p><h2>We know what<br />keeps you <em>going.</em></h2><p>For more than three decades, we&apos;ve been helping farmers and contractors do their best work. Not with a catalogue and a call centre, but with people who understand the pressure of a short season and the value of a machine that simply does its job.</p><div className="stats"><div><strong>37</strong><span>years in the field</span></div><div><strong>24h</strong><span>parts dispatch</span></div><div><strong>4.9/5</strong><span>customer rating</span></div></div><a href="#contact" className="button button-light">Meet our team <span>↗</span></a></div></section>

      <section id="products" className="section products-section"><div className="section-heading"><div><p className="eyebrow">Featured range</p><h2>Built for the<br /><em>real world.</em></h2></div><a href="#contact" className="text-link">View all products <span>→</span></a></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.title}><img src={product.image} alt={product.title} /><div className="product-overlay"><span>{product.category}</span><h3>{product.title}</h3><span className="circle-arrow">↗</span></div></article>)}</div></section>

      <section className="quote-section"><p className="eyebrow">A better way to work</p><blockquote>“When the season is short, there&apos;s no room for compromise. We make sure you&apos;re ready.”</blockquote><div className="quote-person"><div className="avatar">JD</div><span><b>Jan de Vries</b><small>Managing director, Fieldcraft</small></span></div></section>

      <section id="contact" className="contact-section"><div className="contact-copy"><p className="eyebrow">Let&apos;s talk</p><h2>Ready to get<br /><em>moving?</em></h2><p>Tell us what you&apos;re working on. We&apos;ll help you find the right solution, without the hard sell.</p><div className="contact-details"><a href="tel:+31201234567">+31 (0)20 123 45 67</a><a href="mailto:hello@fieldcraft.agri">hello@fieldcraft.agri</a><span>Industrieweg 24, 8013 NW Zwolle</span></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success"><span>✓</span><h3>Thanks for reaching out.</h3><p>We&apos;ll be in touch within one business day.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message</button></div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><label>How can we help?<select name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Machinery</option><option>Parts & wear</option><option>Service & repair</option><option>Other</option></select></label><label>Message<textarea name="message" rows={4} placeholder="Tell us a little about your project..." /></label><button className="button button-dark" type="submit">Send inquiry <span>↗</span></button></>}</form></section>

      <footer className="footer"><div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark">F</span><span>FIELDCRAFT<span className="brand-sub">AGRICULTURAL SOLUTIONS</span></span></a><p>Practical solutions for<br />people who grow things.</p></div><div className="footer-links"><div><b>Explore</b><a href="#services">Services</a><a href="#about">About us</a><a href="#products">Products</a></div><div><b>Contact</b><a href="#contact">Get in touch</a><a href="tel:+31201234567">+31 (0)20 123 45 67</a><a href="mailto:hello@fieldcraft.agri">Email us</a></div><div><b>Follow</b><a href="#top">LinkedIn ↗</a><a href="#top">Instagram ↗</a></div></div><div className="footer-bottom"><span>© 2026 Fieldcraft Agricultural Solutions</span><span>Developed by Afaq Ahmad &nbsp; · &nbsp; Privacy policy &nbsp; Cookies</span></div></footer>
    </main>
  )
}
