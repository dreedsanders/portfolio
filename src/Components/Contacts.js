import React from 'react'
import "../App.css"

function Contacts() {
    return (
      <div>
        {/* Contacts Section */}
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                Contact <span>Info</span>
              </h1>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/external-prettycons-solid-prettycons/60/000000/external-telephone-communications-prettycons-solid-prettycons.png"
                    alt="phone number"
                  />
                </div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>Mobile: (469)337-3579</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png"
                    alt="email address"
                  />
                </div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>dreedsanders@gmail.com</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/worldwide-location--v1.png"
                    alt="location"
                  />
                </div>
                <div className="contact-info">
                  <h1>Location</h1>
                  <h2>Austin, TX & Dallas, TX & Anywhere via The WWW</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Contacts Section */}
      </div>
    );
}

export default Contacts
