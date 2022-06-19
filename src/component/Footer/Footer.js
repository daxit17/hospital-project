import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import UseRef from "../../container/UseRef/UseRef";

function Footer(props) {
  return (
    <footer id="footer">
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div>
            <h4>Address</h4>
            <p>
              F-505, <br />
              Inovative Plazza
              <br />
              New Delhi, India
              <br />
              <br />
              <strong>Phone:</strong> +91 9988776655
              <br />
              <strong>Email:</strong> cityhospital@example.com
              <br />
            </p>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
        <div>
          <Link to="/UseRef">Dummy Link</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;