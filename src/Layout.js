import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "./images/logo.png";
import whitelogo from "./images/whitelogo.png";
import "./index.css";

const Layout = ({ children }) => {
  const location = useLocation(); 
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    if (window.location.hash === "#about") {
      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handleGoToAbout = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#about";
    }

    setMenuOpen(false); 
  };

  const handleGoToHome = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }

    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <Navbar expand="lg" className="py-3 custom-navbar" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/" onClick={handleGoToHome} className="logo-container">
            <LazyLoadImage
              src={logo}
              alt="Logo"
              effect="blur"
              className="custom-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse
            id="navbar-nav"
            className={`navbar-collapse ${menuOpen ? "show" : "hide"}`}
          >
            <ul className="nav-links">
              <li>
                <a href="/#about" onClick={handleGoToAbout}>about</a>
              </li>
              <li>
                <a href="/contact" onClick={() => setMenuOpen(false)}>contact</a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <main>{children}</main>

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
                href="https://github.com/angelomarcial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/angelomarcial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2025 Angelo Marcial. All rights reserved.</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
