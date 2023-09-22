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
                I aspire to be a...<span></span>
              </h1>
              <h1>
                *list things here* <span></span>
              </h1>
              <a href="a" type="button" class="cta">
                Continue 
                {/* make this a button that scrolls to the next section */}
              </a>
            </div>
          </div>
        </section>
        {/* End Hero Section */}
      </div>
    );
}

export default Hero
