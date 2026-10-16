import './App.css'
import logo from './assets/logo-transparent.png'

function App() {
  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
  <img src={logo} alt="ME Technologies logo" />
</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <p className="tagline">
          ENGINEERING • TECHNOLOGY • INNOVATION
        </p>

        <h1>
          Smart Engineering Today.
          <br />
          <span>Sustainable Tomorrow.</span>
        </h1>

        <p className="hero-text">
          Practical engineering solutions and technical services
          for a smarter and more sustainable future.
        </p>

        <a href="#services" className="hero-button">
          Explore Our Services
        </a>
      </section>

      {/* About Section */}
      {/* About Section */}
<section className="about" id="about">
  <p className="tagline">ABOUT OUR COMPANY</p>

  <h2>Engineering Ideas Into Reality</h2>

  <p>
    ME Technologies is an engineering consultancy and training
    company focused on providing practical engineering solutions
    and technical learning opportunities. Our aim is to support
    engineering projects through design, consultancy, and
    professional skill development.
  </p>
</section>
{/* Why Choose Us Section */}
<section className="why-us">
  <h2>Why Choose ME Technologies?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>Practical Solutions</h3>
      <p>
        Engineering support focused on real project needs.
      </p>
    </div>

    <div className="why-card">
      <h3>Technical Learning</h3>
      <p>
        Training that helps learners develop useful skills.
      </p>
    </div>

    <div className="why-card">
      <h3>Modern Design</h3>
      <p>
        Design and consultancy for today's engineering challenges.
      </p>
    </div>
  </div>
</section>
{/* Call to Action Section */}
<section className="cta">
  <h2>Ready to Work With Us?</h2>

  <p>
    Get in touch to learn more about our engineering services,
    consultancy, and technical training.
  </p>

  <a href="#contact" className="cta-button">
    Contact Our Team
  </a>
</section>

;      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>Electrical Engineering</h3>
            <p>
              Engineering support and electrical design solutions.
            </p>
          </div>

          <div className="service-card">
            <h3>Solar PV Design</h3>
            <p>
              Solar system layouts and design solutions.
            </p>
          </div>

          <div className="service-card">
            <h3>Engineering Training</h3>
            <p>
              Technical learning and professional skill development.
            </p>
          </div>

          <div className="service-card">
            <h3>Technology Solutions</h3>
            <p>
              Modern solutions for engineering and business needs.
            </p>
          </div>

          <div className="service-card">
            <h3>2D and 3D Design</h3>
            <p>
              Technical drawings, layouts, and 3D design support
              for engineering projects.
            </p>
          </div>

          <div className="service-card">
            <h3>Technical Consultancy</h3>
            <p>
              Engineering guidance and practical support for
              project planning and design.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get in Touch</h2>

        <p>
          Have a question about our engineering services or training?
          We would be happy to hear from you.
        </p>

        <a
          href="mailto:info@metechnologies.com"
          className="hero-button"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer>
        <h2>ME Technologies</h2>

        <p>
          Smart Engineering Today. Sustainable Tomorrow.
        </p>

        <p>© 2026 ME Technologies</p>
      </footer>

    </div>
  )
}

export default App
