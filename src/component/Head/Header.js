import React, { useState } from "react";
import "./Header.css";
import logo from "../../../src/assets/w.png";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container  d_flex">
          <div className="logo" style={{ width: "100px", height: "100px" }}>
            <img src={logo} />
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link  f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home"> home </a>
              </li>

              <li>
                <a href="#evidence"> evidence </a>
              </li>
              <li>
                <a href="#homework"> home work </a>
              </li>

              <li>
                <a href="#map"> map </a>
              </li>
              <li>
                <a href="#contact"> contact </a>
              </li>

              <li>
                <button className="home-btn"> OPPEN </button>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="demo"></section>
    </>
  );
};
export default Header;
