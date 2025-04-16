import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import '../assets/css/style.css';

const Header = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasLeft');
        const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);

        const handleRouteChange = () => {
            offcanvas.hide();
        };

        navigate((location) => {
            handleRouteChange();
        });

        return () => {
        };
    }, [navigate]);

    return (
        <header className="header container">
            <div className="header__left">
                <Link to="/">
                    <img src={logo} alt="Bionet Logo" className="header__logo" />
                </Link>

            </div>
            <div className="header__right">
                <nav className="header__nav">
                    <Link to="/projects">Layihələrimiz</Link>
                    <Link to="/services">Xidmetlerimiz</Link>
                    <Link to="/about">Haqqımızda</Link>
                    <Link to="/contact">Əlaqə</Link>
                </nav>
                <button className="header__search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <span className="header__lang">En</span>
            <button className="header__contact">BİZƏ YAZIN</button>

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
                        <Link to="/projects" onClick={() => offcanvas.hide()}>Lahiyelerimiz</Link><hr />
                        <Link to="/services" onClick={() => offcanvas.hide()}>Xidmetlerimiz</Link><hr />
                        <Link to="/about" onClick={() => offcanvas.hide()}>Haqqimizda</Link><hr />
                        <Link to="/contact" onClick={() => offcanvas.hide()}>Elaqe</Link><hr />
                        <button className="header__contact btn-response">BİZƏ YAZIN</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
