import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "../assets/css/style.css";
import { useLanguage } from "../context/LanguageContext";
import { useSite } from "../context/SiteContext";
import { SiteData } from "../interface/site.interface";
declare const bootstrap: any;
const Header = () => {
  const { data } = useSite() as { data: SiteData };

  const { language, setLanguage } = useLanguage();

  // const handleLanguageChange = () => {
  //   setLanguage(language === "az" ? "en" : "az");

  // };
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
            {data?.portfolio}
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            {data?.services}
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            {data?.about}
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            {data?.contact}
          </Link>
        </nav>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="header__lang"
          style={{ cursor: "pointer" }}
        >
          <option value="az">AZ</option>
          <option value="en">EN</option>
        </select>

        <Link to="/contact" className="header__contact">
          {data?.write_to_us}
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="header__lang header__lang_en"
          style={{ cursor: "pointer" }}
        >
          <option value="az">AZ</option>
          <option value="en">EN</option>
        </select>
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
                {data?.portfolio}
              </Link>
              <hr />
              <Link
                to="/services"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/services" ? "activeForOffcanvas" : ""
                }
              >
                {data?.services}
              </Link>
              <hr />
              <Link
                to="/about"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/about" ? "activeForOffcanvas" : ""
                }
              >
                {data?.about}
              </Link>
              <hr />
              <Link
                to="/contact"
                onClick={closeOffcanvas}
                className={
                  location.pathname === "/contact" ? "activeForOffcanvas" : ""
                }
              >
                {data?.contact}
              </Link>
              <hr />
              <Link
                to="/contact"
                className="header__contact btn-response"
                onClick={closeOffcanvas}
              >
                {data?.write_to_us}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
