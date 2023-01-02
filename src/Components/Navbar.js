import React from "react";

const Navbar = ({ setShow, size }) => {
  return (
    <nav className="nav_bg py-3">
      <div className="container">
        <div className="d-flex  align-items-center justify-content-between">
          <h1
            className="fw-bold fst-italic text-white cursor_pointer"
            onClick={() => setShow(true)}
          >
            My Shopping
          </h1>
          <div className="position-relative" onClick={() => setShow(false)}>
            <i class="fa-solid fa-cart-plus text-white fa-2x cursor_pointer"></i>
            <span className="fst-italic cart_no">{size}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
