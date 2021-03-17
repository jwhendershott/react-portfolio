import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
    <a className="navbar-brand">
        <h3>Jacob Hendershott</h3>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../contact.html">Contact</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Social Media
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="https://www.facebook.com/jacob.hendershott/"
                            target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a className="dropdown-item"
                            href="https://www.linkedin.com/in/jacob-hendershott-557457122/"
                            target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a className="dropdown-item" href="https://github.com/jwhendershott"
                            target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</nav>
      </div>
    );
  }

export default Navbar;