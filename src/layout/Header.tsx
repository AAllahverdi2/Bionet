import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import '../assets/css/style.css';

const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    return (
        <header className="header container">
            <div className="header__left">
                <Link to="/">
                    <img src={logo} alt="Bionet Logo" className="header__logo" />
                </Link>
            </div>
            <div className="header__right">
                <nav className="header__nav">
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                        Layihələrimiz
                    </Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                        Xidmətlərimiz
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                        Haqqımızda
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                        Əlaqə
                    </Link>
                </nav>

                <div className="header__search-container">
                    <i className={`fa-solid fa-magnifying-glass header__search-icon ${searchVisible ? '' : 'hidden'}`}></i>
                    <input
                        type="text"
                        className={`header__search-input ${searchVisible ? 'visible' : ''}`}
                        placeholder="Search..."
                    />
                    <button className="header__search-button" onClick={toggleSearch}>
                        <i className={`fa-solid ${searchVisible ? 'fa-times' : 'fa-magnifying-glass'}`}></i>
                    </button>
                </div>

                <span className="header__lang">En</span>
                <Link to='/contact' className="header__contact">BİZƏ YAZIN</Link>
            </div>

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

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasLeftLabel"></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to="/projects" onClick={() => offcanvas.hide()} className={location.pathname === '/projects' ? 'active' : ''}>
                            Lahiyelerimiz
                        </Link>
                        <hr />
                        <Link to="/services" onClick={() => offcanvas.hide()} className={location.pathname === '/services' ? 'active' : ''}>
                            Xidmetlerimiz
                        </Link>
                        <hr />
                        <Link to="/about" onClick={() => offcanvas.hide()} className={location.pathname === '/about' ? 'active' : ''}>
                            Haqqimizda
                        </Link>
                        <hr />
                        <Link to="/contact" onClick={() => offcanvas.hide()} className={location.pathname === '/contact' ? 'active' : ''}>
                            Elaqe
                        </Link>
                        <hr />
                        <Link to='/contact' className="header__contact btn-response">BİZƏ YAZIN</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;