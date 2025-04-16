import React from 'react';
import '../assets/css/style.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import instagram from '../assets/image/Capa 2.png'
import facebook from '../assets/image/Logo 2.png'
// import instagram from '../assets/image/Capa 2.png'
import logo from '../assets/image/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={logo} alt="Bionet Logo" />
        </div>

        <div className="footer__links">
          <div>
            <h4>Layihələr</h4>
            <ul>
              <li><a href="#">Layihələr</a></li>
              <li><a href="#">Son layihələrimiz</a></li>
              <li><a href="#">Partnyorlar</a></li>
            </ul>
          </div>

          <div>
            <h4>Xidmətlər</h4>
            <ul>
              <li><a href="#">Veb saytlar</a></li>
              <li><a href="#">Mobil tətbiqlər</a></li>
              <li><a href="#">Bazar araşdırması</a></li>
            </ul>
          </div>

          <div>
            <h4>Haqqımızda</h4>
            <ul>
              <li><a href="#">Komandamız</a></li>
              <li><a href="#">Şirkət haqqında</a></li>
              <li><a href="#">Bloqlar</a></li>
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
         
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2024 “Bionet”. Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;
