import React from 'react'
import "../App.css";


function Header() {
    return (
      <div>
        {/* Header Section */}
        <section id="header">
          <div className="header container">
            <div className="nav-bar">
              <div className="brand">
                <a href="#hero">
                  <h1>
                    <span>D</span>onovan <span>S</span>anders
                  </h1>
                </a>
              </div>
              <div className="nav-list">
                <div className="hamburger">
                  <div className="bar"></div>
                  <ul>
                    <li>
                      <a href="#" data-after="Home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" data-after="Services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" data-after="Projects">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="# " data-after="About">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" data-after="Contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Header Section */}
      </div>
    );
}

export default Header
