import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../assets/css/style.css";
import { useLanguage } from "../context/LanguageContext";
declare const bootstrap: any;
const Header = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === "az" ? "en" : "az");
  
    console.log("Yeni dil:", language);
  };
  const location = useLocation();
  const [, setIsOffcanvasVisible] = useState(false);

  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasLeft");
    if (offcanvasElement) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      } else {
        new bootstrap.Offcanvas(offcanvasElement).hide();
      }
    }
  };

  useEffect(() => {
    closeOffcanvas();
  }, [location]);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasLeft");
    if (offcanvasElement) {
      const handleShow = () => setIsOffcanvasVisible(true);
      const handleHide = () => setIsOffcanvasVisible(false);

      offcanvasElement.addEventListener("show.bs.offcanvas", handleShow);
      offcanvasElement.addEventListener("hidden.bs.offcanvas", handleHide);

      return () => {
        offcanvasElement.removeEventListener("show.bs.offcanvas", handleShow);
        offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleHide);
      };
    }
  }, []);

  return (
    <header className="header container">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Bionet Logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__right">
        <nav className="header__nav">
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Layihələrimiz
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Xidmətlərimiz
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            Haqqımızda
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Əlaqə
          </Link>
        </nav>

        <span
          className="header__lang"
          onClick={handleLanguageChange}
          style={{ cursor: "pointer" }}
        >
          {language.toUpperCase()}
        </span>

        <Link to="/contact" className="header__contact">
          BİZƏ YAZIN
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          className="header__lang header__lang_en"
          onClick={handleLanguageChange}
          style={{ cursor: "pointer" }}
        >
          {language.toUpperCase()}
        </span>
        <div className="offcanvasForResponse">
          <button
            className="btn btn-primary offbtn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasLeft"
            aria-labelledby="offcanvasLeftLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasLeftLabel"></h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={closeOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <Link
                to="/projects"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/projects" ? "activeForOffcanvas" : ""
                }
              >
                Layihələrimiz
              </Link>
              <hr />
              <Link
                to="/services"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/services" ? "activeForOffcanvas" : ""
                }
              >
                Xidmətlərimiz
              </Link>
              <hr />
              <Link
                to="/about"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/about" ? "activeForOffcanvas" : ""
                }
              >
                Haqqımızda
              </Link>
              <hr />
              <Link
                to="/contact"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/contact" ? "activeForOffcanvas" : ""
                }
              >
                Əlaqə
              </Link>
              <hr />
              <Link
                to="/contact"
                className="header__contact btn-response"
                onClick={closeOffcanvas}
              >
                BİZƏ YAZIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
