import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ThemeProvider, { ThemeContext } from "../../context/Theme_context"
import Alert from "../Alert/Alert";

function Header(props) {

  const value = useContext(ThemeContext)

  let auth = useSelector(state => state.auth);

  console.log(value);

  return (
    <div className="main-header">
      <div id="topbar" className={`d-flex align-items-center fixed-top ${value.theme}`}>
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" />{" "}
            <a href="mailto:contact@example.com">cityhospital@example.com</a>
            <i className="bi bi-phone" /> +91 9988776655
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <button onClick={() => value.toggle_theme(value.theme)}>
            Change Theme
          </button>
          <Alert />
        </div>
      </div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo">
            <a href="index.html">
              <h1 className="logo me-auto">City</h1>
              <br />
              <h2 className="logo-tiny-text me-auto">
                Multispeciality Hospital
              </h2>
            </a>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <NavLink className="nav-link scrollto" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Department" exact>
                  Department
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Doctors" exact>
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/About" exact>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Medicine" exact>
                  Medicine-Data
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Contact" exact>
                  Contact
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <NavLink className="appointment-btn scrollto" to="/BookAppointment" exact>
            <span className="d-none d-md-inline">Make an</span>
            Appointment
          </NavLink>
          {
            auth.user === null ?
              <NavLink className="appointment-btn scrollto" to="/Login" exact>
                <span className="d-none d-md-inline">Login/ Signup</span>
              </NavLink>
              :
              <NavLink className="appointment-btn scrollto" to="/Login" exact>
                <span className="d-none d-md-inline">LogOut</span>
              </NavLink>
          }

        </div>
      </header>
    </div>
  );
}

export default Header;
