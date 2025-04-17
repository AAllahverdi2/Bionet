import React from 'react';
import '../assets/css/style.css';
import card1 from '../assets/image/Logo 2.svg'
import card2 from '../assets/image/Vector.svg'
import card3 from '../assets/image/Capa 2.svg'
import logo from '../assets/image/logo.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__logo">
         <Link to='/'> <img src={logo} alt="Bionet Logo" /></Link>
        </div>

        <div className="footer__links">
          <div className='footer_linkss'>
            <h4>Layihələr</h4>
            <ul>
              <li><Link to='/projects' >Layihələr</Link ></li>
              <li><Link to='' >Son layihələrimiz</Link ></li>
              <li><Link to=''  >Partnyorlar</Link ></li>
            </ul>
          </div>

          <div>
            <h4>Xidmətlər</h4>
            <ul>
              <li><Link to='/vebproject' >Veb saytlar</Link ></li>
              <li><Link to='/mobileprojects' >Mobil tətbiqlər</Link ></li>
              <li><Link to='' >Bazar araşdırması</Link ></li>
            </ul>
          </div>

          <div>
            <h4>Haqqımızda</h4>
            <ul>
              <li><Link to='' >Komandamız</Link ></li>
              <li><Link to='about'  >Şirkət haqqında</Link ></li>
              <li><Link to='/projects'  >Bloqlar</Link ></li>
            </ul>
          </div>

          <div>
            <h4>Əlaqə</h4>
            <ul className="footer__contact">
              <li><FaMapMarkerAlt /> Narimanov rayonu</li>
              <li><FaPhoneAlt /> 055 000 00 00</li>
              <li><FaEnvelope /> mdhthesenzade@gmail.com</li>
            </ul>
          </div>
        </div>

      
      </div>
      <div className="footer__middle">
      <div className="footer__socials">
          <img src={card3} alt="" />
          <img src={card1} alt="" />
          <img src={card2} alt="" />
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 “Bionet”. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;
