import BionetLogo from "../assets/image/logo.png";
import logo1 from "../assets/image/Vector (1).png";
import logo2 from "../assets/image/Vector (2).png";
import logo3 from "../assets/image/Vector (3).png";
import image6 from "../assets/image/Logo 2.svg";
import image7 from "../assets/image/Vector.svg";
import image8 from "../assets/image/Capa 2.svg";
const Footer = () => {
  return (
    <div className="footer_all">
      <div className="container footer_sides">
        <div className="footer__left">
          <img src={BionetLogo} alt="" />
          <div className="footer_right_connetion">
            <div className="contact_section">
              <h4>ƏLAQƏ</h4>
              <div className="contact_item">
                <img src={logo1} alt="Location" />
                <span>Bakı, Nərimanov rayonu</span>
              </div>
              <div className="contact_item">
                <img src={logo2} alt="Phone" />
                <span>055 000 00 00</span>
              </div>
              <div className="contact_item">
                <img src={logo3} alt="Email" />
                <span>mdhthesenzade@gmail.com</span>
              </div>
            </div>

            <div className="follow_us_section">
              <h4>BİZİ İZLƏYİN</h4>
              <div className="social_icons">
                <a href="#">
                  <img src={image6} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={image7} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={image8} alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_right">
          <div className="footer_right_inner">
            <div className="footer_right_middle footerforresponsive">
              <img src={BionetLogo} alt="" />
            </div>
            <div className="footer_right_connetion">
              <div className="contact_section">
                <h4 className="footer_connection_tag">ƏLAQƏ</h4>
                <div className="contact_item">
                  <img src={logo1} alt="Location" />
                  <span>Bakı, Nərimanov rayonu</span>
                </div>
                <div className="contact_item">
                  <img src={logo2} alt="Phone" />
                  <span>055 000 00 00</span>
                </div>
                <div className="contact_item">
                  <img src={logo3} alt="Email" />
                  <span>mdhthesenzade@gmail.com</span>
                </div>
              </div>

              <div className="follow_us_section">
                <h4 className="footer_connection_tag_watch">BİZİ İZLƏYİN</h4>
                <div className="social_icons">
                  <a href="#">
                    <img src={image6} alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src={image7} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={image8} alt="YouTube" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="footer_right_middle">
              <img src={BionetLogo} alt="" />
            </div> */}
          </div>
          <div className="footer_right_workoffer">
            <h4 className="section_title">BİZİMLƏ İŞLƏ</h4>
            <p className="section_serives">Xidmətlərimiz</p>
            <div className="footer_services">
              <div>UX/UI dizayn</div>
              <div>Mobil tətbiqlərin və saytların yaradılması</div>
              <div>Frond end development</div>
              <div>Back end development</div>
            </div>

            <form className="contact_form">
              <div className="form_row">
                <input type="text" placeholder="Ad" />
                <input type="text" placeholder="Soyad" />
              </div>
              <div className="form_row">
                <input type="text" placeholder="Telefon nömrəsi" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="form_row">
                <textarea placeholder="Layihənin detalları"></textarea>
              </div>
              <div className="fake-recaptcha">
                <input type="checkbox" id="fakeRecaptcha" />
                <label htmlFor="fakeRecaptcha">
                  <span className="checkmark"></span>
                  <span className="text">I'm not a robot</span>
                  {/* <img src="/images/recaptcha-icon.png" alt="captcha" /> */}
                </label>
              </div>

              <button type="submit" className="submit_button">
                GÖNDƏR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
