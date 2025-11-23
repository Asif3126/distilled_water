import React from "react";
import "./App.css";
// Import images from assets
import apollo02 from "./assets/A4  APOLLO 02.jpg";
import apollo03_1 from "./assets/A4  APOLLO 03 (1).jpg";
import apolloGreenery01 from "./assets/Apollo Greenery Premix 01.jpg";
import apolloDetergent from "./assets/Apollo Liq Detergent 5L 4.png";
import apolloSkyCoolant02 from "./assets/Apollo Sky Coolant (1)   02.jpg";
import apolloSkyCoolant from "./assets/Apollo Sky Coolant (1) 01 0.jpg";
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
          <div className="hero-badge">Premium Quality Products</div>
          <h1>
            <span className="gradient-text">Apollo Sky Solution</span>
            <br />
            Pure Distilled Water & More
          </h1>
          <p className="hero-description">
            Leading manufacturer of premium distilled water, cleaning solutions, and industrial products. 
            Trusted by laboratories, medical facilities, and industries across India for uncompromising quality and purity.
          </p>
          <div className="hero-features">
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span>Zero TDS</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span>ISO Certified</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">✓</span>
              <span>Bulk Orders</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => {
                const products = document.getElementById("products");
                if (products) products.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Products
            </button>
            <button
              className="secondary-btn"
              onClick={() => {
                const contact = document.querySelector(".footer");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="water-card">
              <div className="glow-effect"></div>
              <div className="water-glass-container">
                <div className="water-glass">
                  <div className="water-fill"></div>
                  <div className="water-bubbles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="water-card-content">
                <h3>99.9% Pure</h3>
                <p className="water-formula">H₂O</p>
                <div className="purity-badge">
                  <span className="badge-icon">✨</span>
                  <span>Zero Impurities</span>
                </div>
                <div className="quality-stats">
                  <div className="stat-mini">
                    <span className="stat-value">0</span>
                    <span className="stat-label">TDS</span>
                  </div>
                  <div className="stat-mini">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Pure</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-particles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-header">
          <h2>About Apollo Sky Solution</h2>
          <p className="section-subtitle">Your Trusted Partner for Premium Quality Products</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              Apollo Sky Solution Company is a leading manufacturer and supplier of premium distilled water, 
              cleaning solutions, and industrial products. With years of experience and commitment to excellence, 
              we serve laboratories, medical facilities, automotive industries, and households across India.
            </p>
            <h3>What is Distilled Water?</h3>
            <p>
              Distilled water is water that has been boiled into vapor and then condensed back into liquid 
              in a separate container. This advanced purification process removes virtually all impurities, 
              minerals, salts, and other chemicals, leaving almost pure H₂O with zero total dissolved solids (TDS).
            </p>
            <h3>Our Commitment</h3>
            <p>
              We are committed to delivering products of the highest quality, ensuring consistency, purity, 
              and reliability in every batch. Our state-of-the-art manufacturing facility follows strict quality 
              control measures to meet and exceed industry standards.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Purity Level</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">TDS (Total Dissolved Solids)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section section-alt">
        <div className="section-header">
          <h2>Key Benefits & Advantages</h2>
          <p className="section-subtitle">Why Choose Apollo Sky Solution Products</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-icon">💧</div>
            <h3>Mineral-Free</h3>
            <p>
              No calcium, magnesium, or other minerals that can create scale and deposits 
              in appliances and equipment. Perfect for extending the life of your devices.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">✨</div>
            <h3>Impurity-Free</h3>
            <p>
              Zero TDS (Total Dissolved Solids) with greatly reduced levels of contaminants 
              such as salts, metals, and microorganisms. Ultra-pure quality guaranteed.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Consistent Quality</h3>
            <p>
              Ideal wherever predictable, consistent water quality is important – from labs 
              to industrial setups. Every batch meets our strict quality standards.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🔬</div>
            <h3>Lab-Grade Purity</h3>
            <p>
              Suitable for scientific experiments, medical equipment, and sensitive applications 
              where even trace impurities can affect results.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🏭</div>
            <h3>Industrial Grade</h3>
            <p>
              Perfect for automotive batteries, cooling systems, and industrial processes 
              that require pure, contaminant-free water.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">💰</div>
            <h3>Cost-Effective</h3>
            <p>
              Prevents costly damage to equipment, reduces maintenance needs, and extends 
              the lifespan of appliances and machinery.
            </p>
          </div>
        </div>
      </section>

      {/* Uses Section */}
      <section id="uses" className="section">
        <div className="section-header">
          <h2>Common Applications & Uses</h2>
          <p className="section-subtitle">Where Our Products Make a Difference</p>
        </div>
        <div className="uses-grid">
          <div className="use-item">
            <div className="use-icon">🔬</div>
            <h3>Laboratories & Research</h3>
            <p>
              Essential for scientific experiments, chemical solutions, and analytical procedures 
              where even trace impurities can compromise results and accuracy.
            </p>
          </div>
          <div className="use-item">
            <div className="use-icon">🏥</div>
            <h3>Medical & Dental</h3>
            <p>
              Critical for autoclaves, sterilizers, CPAP machines, and medical devices requiring 
              pure water to prevent contamination and ensure patient safety.
            </p>
          </div>
          <div className="use-item">
            <div className="use-icon">🏠</div>
            <h3>Home Appliances</h3>
            <p>
              Perfect for steam irons, humidifiers, and air purifiers to prevent mineral buildup, 
              white powder residue, and extend appliance lifespan.
            </p>
          </div>
          <div className="use-item">
            <div className="use-icon">🚗</div>
            <h3>Automotive Industry</h3>
            <p>
              Used to top up lead-acid batteries, cooling systems, and radiators to avoid mineral 
              contamination that could damage cells and reduce performance.
            </p>
          </div>
          <div className="use-item">
            <div className="use-icon">🏭</div>
            <h3>Industrial Processes</h3>
            <p>
              Required for manufacturing processes, boiler systems, and industrial equipment where 
              water purity is critical for optimal operation.
            </p>
          </div>
          <div className="use-item">
            <div className="use-icon">🌱</div>
            <h3>Aquariums & Horticulture</h3>
            <p>
              Ideal for sensitive aquatic environments and plant cultivation where controlled water 
              chemistry is essential for healthy growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products/Gallery Section */}
      <section id="products" className="section section-alt">
        <div className="section-header">
          <h2>Our Premium Product Range</h2>
          <p className="section-subtitle">Quality Products for Every Need</p>
        </div>
        <div className="products-grid">
          <div className="product-item">
            <img src={apollo02} alt="Apollo Distilled Water" />
            <div className="product-info">
              <h3>Distilled Water</h3>
              <p>Ultra Pure | Zero TDS</p>
            </div>
          </div>
          <div className="product-item">
            <img src={apollo03_1} alt="Apollo Product" />
            <div className="product-info">
              <h3>Premium Water</h3>
              <p>Industrial Grade</p>
            </div>
          </div>
          <div className="product-item">
            <img src={apolloGreenery01} alt="Apollo Greenery Premix" />
            <div className="product-info">
              <h3>Greenery Premix</h3>
              <p>Cleaning Solution</p>
            </div>
          </div>
          <div className="product-item">
            <img src={apolloSkyCoolant02} alt="Apollo Sky Coolant" />
            <div className="product-info">
              <h3>Sky Coolant</h3>
              <p>Automotive Grade</p>
            </div>
          </div>
          <div className="product-item">
            <img src={apolloSkyCoolant} alt="Apollo Sky Coolant" />
            <div className="product-info">
              <h3>Coolant Solution</h3>
              <p>Premium Quality</p>
            </div>
          </div>
          <div className="product-item">
            <img src={whatsappImg2} alt="Apollo Product" />
            <div className="product-info">
              <h3>Premium Product</h3>
              <p>High Quality</p>
            </div>
          </div>
        </div>
        <div className="products-cta">
          <p>Interested in our products? Contact us for bulk orders and pricing!</p>
          <button
            className="primary-btn"
            onClick={() => {
              const contact = document.querySelector(".footer");
              if (contact) contact.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Quote
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything You Need to Know</p>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>Is distilled water safe to drink?</h3>
              <p>
                Distilled water is generally safe to drink in moderation, but it does not contain 
                minerals found in normal drinking water. For daily drinking, many people prefer 
                mineral or filtered water. However, for specific medical conditions or dietary 
                requirements, distilled water may be recommended by healthcare professionals.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>Is distilled water the same as purified water?</h3>
              <p>
                Distilled water is a type of purified water. Purified water can be produced using 
                methods such as reverse osmosis, deionization, or distillation. Distilled water 
                goes through a specific process of boiling and condensation, resulting in the 
                purest form of water with zero TDS (Total Dissolved Solids).
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>Can I use tap water instead of distilled water?</h3>
              <p>
                It depends on the use. For many household tasks, tap water is fine. However, for 
                lab work, medical devices, batteries, CPAP machines, and some appliances, distilled 
                water is strongly recommended to prevent mineral buildup, contamination, and 
                equipment damage. Using tap water in sensitive applications can void warranties 
                and cause costly repairs.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>What is the shelf life of distilled water?</h3>
              <p>
                When stored properly in a sealed container away from direct sunlight, distilled 
                water can last indefinitely. However, once opened, it's best to use it within 
                a few months to maintain purity. Always check the manufacturing date and use-by 
                date on the product label.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>Do you offer bulk orders and delivery?</h3>
              <p>
                Yes! We offer bulk orders for businesses, laboratories, and industrial clients. 
                Contact us via email or phone to discuss your requirements, pricing, and delivery 
                options. We provide flexible packaging sizes from 5 liters to 200 liters.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-icon">❓</div>
            <div className="faq-content">
              <h3>What quality standards do you follow?</h3>
              <p>
                Our products meet and exceed industry standards for purity and quality. We follow 
                strict quality control measures throughout the manufacturing process, ensuring 
                zero TDS, consistent purity levels, and reliable quality in every batch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Apollo Sky Solution</p>
          <div className="footer-contact">
            <a href="mailto:apolloskysolutionco@gmail.com">apolloskysolutionco@gmail.com</a>
            <a href="tel:+917697263786">+91 9753980806</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
