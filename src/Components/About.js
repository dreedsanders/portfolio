import React from 'react'
import about from "../Images/images-5.jpg";
import "../App.css"

function About() {
    return (
      <div>
        {/* About Section */}
        <section id="about">
          <div className="about container">
            <div className="col-left">
              <div className="about-img">
                <img src={about} alt="about"></img>
              </div>
            </div>
            <div className="col-right">
              <h1 className="section-title">
                About <span>Me</span>
              </h1>
              <h2>Front End Developer</h2>
              <p>
                Eu anim nulla tempor eiusmod. Anim et mollit ipsum aute culpa.
                Ad velit veniam consequat aliqua tempor adipisicing ullamco
                nulla in in culpa eu tempor. Culpa non irure et dolore aliquip
                adipisicing aliquip ea. Ad incididunt nisi adipisicing
                consectetur. Cupidatat tempor exercitation ipsum proident
                cillum.
              </p>
              <a href="a" type="button" class="cta">
                Download resume
              </a>
            </div>
          </div>
        </section>
        {/* End About Section */}
      </div>
    );
}

export default About
