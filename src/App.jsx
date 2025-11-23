import React from "react";
import "./App.css";
// Import images from assets
import apollo01 from "./assets/A4  APOLLO 01 .jpg";
import apollo02 from "./assets/A4  APOLLO 02.jpg";
import apollo03_1 from "./assets/A4  APOLLO 03 (1).jpg";
import apollo03 from "./assets/A4  APOLLO 03.jpg";
import apolloGreenery from "./assets/Apollo Greenery Premix 02.jpg";
import apolloDetergent from "./assets/Apollo Liq Detergent 5L 4.png";
import apolloSkyCoolant from "./assets/Apollo Sky Coolant (1) 01 0.jpg";
import whatsappImg1 from "./assets/WhatsApp Image 2025-11-23 at 7.25.50 PM.jpeg";
import whatsappImg2 from "./assets/WhatsApp Image 2025-11-23 at 7.25.53 PM.jpeg";

function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Apollo Sky Solution</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#benefits">Benefits</a>
          <a href="#uses">Uses</a>
          <a href="#products">Products</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Distilled Water</h1>
          <p>
            Clean. Pure. Simple. Distilled water is free from minerals,
            salts, and impurities – perfect for sensitive applications.
          </p>
          <button
            className="primary-btn"
            onClick={() => {
              const about = document.getElementById("about");
              if (about) about.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </button>
        </div>
        <div className="hero-image">
          <img src={whatsappImg1} alt="Apollo Sky Solution" className="hero-img" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>What is Distilled Water?</h2>
        <p className="section-text">
          Distilled water is water that has been boiled into vapor and then
          condensed back into liquid in a separate container. This process
          removes most impurities, minerals, salts, and other chemicals,
          leaving almost pure H₂O.
        </p>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section section-alt">
        <h2>Key Benefits</h2>
        <div className="cards">
          <div className="card">
            <h3>Mineral-Free</h3>
            <p>
              No calcium, magnesium, or other minerals that can create scale
              and deposits in appliances and equipment.
            </p>
          </div>
          <div className="card">
            <h3>Impurity-Free</h3>
            <p>
              Greatly reduced levels of contaminants such as salts, metals,
              and microorganisms when properly distilled.
            </p>
          </div>
          <div className="card">
            <h3>Consistent Quality</h3>
            <p>
              Ideal wherever predictable, consistent water quality is important
              – from labs to industrial setups.
            </p>
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <section id="uses" className="section">
        <h2>Common Uses</h2>
        <div className="uses-grid">
          <div className="use-item">
            <h3>Laboratories</h3>
            <p>
              Used in experiments and chemical solutions where impurities can
              affect results.
            </p>
          </div>
          <div className="use-item">
            <h3>Medical & Dental</h3>
            <p>
              Often used in equipment like autoclaves, sterilizers, and some
              medical devices.
            </p>
          </div>
          <div className="use-item">
            <h3>Steam Irons & Humidifiers</h3>
            <p>
              Helps prevent mineral buildup and white powder residue in home
              appliances.
            </p>
          </div>
          <div className="use-item">
            <h3>Automotive Batteries</h3>
            <p>
              Used to top up lead-acid batteries to avoid mineral contamination
              that could damage cells.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section id="featured-product" className="section section-alt">
        <h2>Featured Product</h2>
        <div className="featured-product-container">
          <div className="featured-product-item">
            <img src={apolloDetergent} alt="Apollo Liquid Detergent" />
          </div>
        </div>
      </section>

      {/* Products/Gallery Section */}
      <section id="products" className="section">
        <h2>Our Products</h2>
        <div className="products-grid">
          <div className="product-item">
            <img src={apollo01} alt="Apollo Product 01" />
          </div>
          <div className="product-item">
            <img src={apollo02} alt="Apollo Product 02" />
          </div>
          <div className="product-item">
            <img src={apollo03_1} alt="Apollo Product 03" />
          </div>
          <div className="product-item">
            <img src={apollo03} alt="Apollo Product 03" />
          </div>
          <div className="product-item">
            <img src={apolloGreenery} alt="Apollo Greenery Premix" />
          </div>
          <div className="product-item">
            <img src={apolloSkyCoolant} alt="Apollo Sky Coolant" />
          </div>
          <div className="product-item">
            <img src={whatsappImg1} alt="Product Image 1" />
          </div>
          <div className="product-item">
            <img src={whatsappImg2} alt="Product Image 2" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <h2>FAQs</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Is distilled water safe to drink?</h3>
            <p>
              Distilled water is generally safe to drink in moderation, but it
              does not contain minerals found in normal drinking water. For
              daily drinking, many people prefer mineral or filtered water.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is distilled water the same as purified water?</h3>
            <p>
              Distilled water is a type of purified water. Purified water can
              be produced using methods such as reverse osmosis, deionization,
              or distillation.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I use tap water instead of distilled water?</h3>
            <p>
              It depends on the use. For many household tasks, tap water is
              fine. For lab work, medical devices, batteries, and some
              appliances, distilled water is recommended.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Apollo Sky Solution</p>
          <div className="footer-contact">
            <a href="mailto:apolloskysolutionco@gmail.com">apolloskysolutionco@gmail.com</a>
            <a href="tel:+917697263786">+91 76972 63786</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
