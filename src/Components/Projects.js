import React from 'react'
import "../App.css"
import imagess from "../Images/download-2.jpg";


function Projects() {
    return (
      <div>
        {/* Projects Section */}
        <section id="projects">
          <div className="projects container">
            <div className="projects-header">
              <h1 className="section-title">
                Recent <span>Projects</span>
              </h1>
            </div>
            <div className="all-projects">
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 1</h1>
                  <h2>Coding is Love</h2>
                  <p>
                    Mollit amet magna amet ipsum eiusmod est. Anim adipisicing
                    Lorem ad eiusmod ex aliqua nulla ex cillum. Anim irure eu
                    anim deserunt commodo ipsum. Enim nulla aute in cupidatat
                    aliqua fugiat eiusmod laboris ea in magna.
                  </p>
                </div>
                <div className="project-img">
                  <img src={imagess} alt="project" />
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 2</h1>
                  <h2>Coding is Love</h2>
                  <p>
                    Mollit amet magna amet ipsum eiusmod est. Anim adipisicing
                    Lorem ad eiusmod ex aliqua nulla ex cillum. Anim irure eu
                    anim deserunt commodo ipsum. Enim nulla aute in cupidatat
                    aliqua fugiat eiusmod laboris ea in magna.
                  </p>
                </div>
                <div className="project-img">
                  <img src={imagess} alt="project" />
                </div>
              </div>
              <div className="project-item">
                <div className="project-info">
                  <h1>Project 3</h1>
                  <h2>Coding is Love</h2>
                  <p>
                    Mollit amet magna amet ipsum eiusmod est. Anim adipisicing
                    Lorem ad eiusmod ex aliqua nulla ex cillum. Anim irure eu
                    anim deserunt commodo ipsum. Enim nulla aute in cupidatat
                    aliqua fugiat eiusmod laboris ea in magna.
                  </p>
                </div>
                <div className="project-img">
                  <img src={imagess} alt="project" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Projects Section */}
      </div>
    );
}

export default Projects
