import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import '../assets/css/style.css';
declare const bootstrap: any;
const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const location = useLocation();
    const [ , setIsOffcanvasVisible] = useState(false);
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById('offcanvasLeft');
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
        const offcanvasElement = document.getElementById('offcanvasLeft');
        if (offcanvasElement) {
            const handleShow = () => setIsOffcanvasVisible(true);
            const handleHide = () => setIsOffcanvasVisible(false);

            offcanvasElement.addEventListener('show.bs.offcanvas', handleShow);
            offcanvasElement.addEventListener('hidden.bs.offcanvas', handleHide);

            return () => {
                offcanvasElement.removeEventListener('show.bs.offcanvas', handleShow);
                offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleHide);
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

                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
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
                        <Link to="/projects" onClick={closeOffcanvas} className={location.pathname === '/projects' ? '' : ''}>
                            Layihələrimiz
                        </Link>
                        <hr />
                        <Link to="/services" onClick={closeOffcanvas} className={location.pathname === '/services' ? '' : ''}>
                            Xidmətlərimiz
                        </Link>
                        <hr />
                        <Link to="/about" onClick={closeOffcanvas} className={location.pathname === '/about' ? '' : ''}>
                            Haqqımızda
                        </Link>
                        <hr />
                        <Link to="/contact" onClick={closeOffcanvas} className={location.pathname === '/contact' ? '' : ''}>
                            Əlaqə
                        </Link>
                        <hr />
                        <Link to='/contact' className="header__contact btn-response" onClick={closeOffcanvas}>BİZƏ YAZIN</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;