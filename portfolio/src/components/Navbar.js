import React from "react";

function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <h3>Jacob Hendershott</h3>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../contact.html">Contact</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Social Media
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="https://www.facebook.com/jacob.hendershott/"
                            target="_blank">Facebook</a></li>
                    <li><a class="dropdown-item"
                            href="https://www.linkedin.com/in/jacob-hendershott-557457122/"
                            target="_blank">LinkedIn</a></li>
                    <li><a class="dropdown-item" href="https://github.com/jwhendershott"
                            target="_blank">GitHub</a></li>
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