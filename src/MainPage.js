import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import memoji from "./images/memoji.png";
import tech from "./images/tech.png";
import { Container } from "react-bootstrap";
import "./index.css";

const MainPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Angelo Marcial</h1>
          <h2 className="subtitle">Aspiring Software Developer</h2>
        </div>
        <LazyLoadImage
          src={memoji}
          alt="Memoji"
          effect="blur"
          className="hero-memoji"
        />
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <Container>
          <div className="about-layout">
            <LazyLoadImage
              src={tech}
              alt="Tech Illustration"
              effect="blur"
              className="about-image"
            />
            <div className="about-text">
              <h2 className="fw-bold">Get to know me!</h2>
              <p>
                Hi, I’m Angelo! As the youngest in my family, I’ve always been
                the go-to “tech guy” whenever anyone needed help. My love for
                technology started with building my own PC and installing
                Windows—it was during those early projects that I realized how
                much I enjoy solving problems and diving deeper into the tech
                world.
              </p>
              <p>
                I’m a hardworking and self-motivated person who’s always eager
                to learn and improve. Whether it’s picking up a new skill or
                adapting to a challenge, I’m a fast learner who knows the value
                of asking the right questions and using the tools and resources
                available to me. I enjoy tackling problems, not just because
                they’re challenges, but because there’s something incredibly
                rewarding about working through them and finding solutions.
              </p>
              <p>
                Tech has always been my passion, and I’m excited to keep
                growing, learning, and making an impact!
              </p>
            </div>
          </div>

          {/* Three-column cards */}
          <div className="row text-center mt-5">
            {/* Education */}
            <div className="col-md-4">
              <div className="about-card">
                <i className="bi bi-mortarboard icon"></i>
                <h3>Education</h3>
                <p>
                  <strong>Red River College Polytech</strong>
                </p>
                <p>Business Information Technology</p>
                <p>
                  <strong>Graduation:</strong> December 2024
                </p>
                <p>
                  <strong>Scholarship:</strong> Schroder Foundation
                </p>
                <p>
                  <strong>Relevant Coursework:</strong>
                </p>
                <ul>
                  <li>Application Development</li>
                  <li>Database Management</li>
                  <li>Web Development</li>
                  <li>Network Management</li>
                </ul>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="col-md-4">
              <div className="about-card">
                <i className="bi bi-briefcase icon"></i>
                <h3>Professional Experience</h3>
                <p>
                  <strong>Data Analyst – StandardAero</strong>
                </p>
                <ul>
                  <li>
                    • Ensured Salesforce data accuracy through updates, audits,
                    and user support.
                  </li>
                  <li>• Improved data completeness by identifying gaps.</li>
                  <li>• Developed documentation to streamline workflows.</li>
                </ul>
                <p>
                  <strong>Geek Squad Agent – Best Buy</strong>
                </p>
                <ul>
                  <li>• Diagnosed advanced tech issues and proposed solutions.</li>
                  <li>• Managed repair queues and client communications.</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="col-md-4">
              <div className="about-card">
                <i className="bi bi-tools icon"></i>
                <h3>Skills</h3>
                <p>
                  <strong>Languages:</strong>
                </p>
                <ul>
                  <li>• C#, SQL, PL/SQL, Python, Java, HTML5, CSS, PHP, JavaScript</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>
                </p>
                <ul>
                  <li>• VS Code, GitHub, Salesforce, Azure, AWS, Jira, MS365</li>
                </ul>
                <p>
                  <strong>Frameworks:</strong>
                </p>
                <ul>
                  <li>• .NET, mySQL, Oracle, Postgres, React.js, Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MainPage;
