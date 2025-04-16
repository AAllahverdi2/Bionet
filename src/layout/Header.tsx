import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/image/logo.png'
import '../assets/css/style.css'
const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <Link to="/"><img src={logo} alt="Bionet Logo" className="header__logo" /></Link>
                <nav className="header__nav">
                    <Link to="/projects">Lahiyelerimiz</Link>
                    <Link to="/services">Xidmetlerimiz</Link>
                    <Link to="/about">Haqqimizda</Link>
                    <Link to="/contact">Elaqe</Link>
                </nav>
            </div>
            <div className="header__right">
                <button className="header__search"><i className="fa-solid fa-magnifying-glass"></i></button>
                <span className="header__lang">En</span>
            </div>
            <button className="header__contact">BİZƏ YAZIN</button>




            <div className="offcanvasForResponse">
                <button className="btn btn-primary offbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to="/projects">Lahiyelerimiz</Link><hr />
                        <Link to="/services">Xidmetlerimiz</Link><hr />
                        <Link to="/about">Haqqimizda</Link><hr />
                        <Link to="/contact">Elaqe</Link><hr />
                        <button className="header__contact btn-response">BİZƏ YAZIN</button>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
