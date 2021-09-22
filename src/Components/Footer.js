import React from 'react'
import "../App.css"

function Footer() {
    return (
      <div>
        {/* Footer Section */}
        <section id="footer">
          <div className="footer container">
            <div className="brand">
              <h1>
                <span>D</span>onovan <span>S</span>anders
              </h1>
              <h2>Complete Full Stack Web Solution</h2>
              <div className="social-icon">
                <div className="social-item">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/github.png"
                      alt="github"
                    />
                  </a>
                </div>
                <div className="social-item">
                  <a href="#">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-coding-marketing-growth-flatart-icons-flat-flatarticons.png" />
                  </a>
                </div>
                <div className="social-item">
                  <a href="#">
                    <img
                      src="https://img.icons8.com/bubbles/50/000000/medium-new.png"
                      alt="medium"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Footer Section */}
      </div>
    );
}

export default Footer
