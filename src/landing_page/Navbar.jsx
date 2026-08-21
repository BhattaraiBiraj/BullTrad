import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white"}}>
      <div class="container-fluid">
        <a class="navbar-brand mx-5 px-5" href="#">
          <img src="images\bulltrade.logo.png" alt="BullTradLogo" style={{ width: "165px" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
            <li class="nav-item mx-4">
              <a class="nav-link active" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#">
                Product
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
