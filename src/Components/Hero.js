import React from 'react'
import "../App.css";

function Hero() {
    return (
      <div>
        {/* hero section */}
        <section id="hero">
          <div className="hero container">
            <div>
              <h1>
                Hello,<span></span>
              </h1>
              <h1>
                My Name is<span></span>
              </h1>
              <h1>
                Donovan <span></span>
              </h1>
              <a href="a" type="button" class="cta">
                Portfolio
              </a>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
      </div>
    );
}

export default Hero
