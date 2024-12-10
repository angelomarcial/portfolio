import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "./images/logo.png";
import whitelogo from "./images/whitelogo.png";
import memoji from "./images/memoji.png";
import tech from "./images/tech.png";

const App = () => {
  return (
    <>
      {/* Header */}
      <Navbar expand="lg" className="py-3 custom-navbar" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#" className="logo-container">
            <LazyLoadImage
              src={logo}
              alt="Logo"
              effect="blur"
              className="custom-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <ul className="nav-links">
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Angelo Marcial</h1>
          <h2 className="subtitle">Aspiring Software Developer</h2>
          <button className="view-work-button">
            <span>View My Work!</span>
            <span className="arrow">→</span>
          </button>
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
                  <li>• VS Code, GitHub, Salesforce, Azure, AWS</li>
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

      {/* Footer */}
      <footer className="custom-footer">
        <Container>
          <div className="footer-content">
            <div className="footer-logo">
              <LazyLoadImage
                src={whitelogo}
                alt="White Logo"
                effect="blur"
                className="footer-logo-img"
              />
            </div>
            <div className="footer-quote">
              <p>"Hard work beats talent when talent doesn't work hard."</p>
            </div>
            <div className="footer-icons">
              <a
                href="mailto:angelomarcial45@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2024 Angelo Marcial. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default App;
