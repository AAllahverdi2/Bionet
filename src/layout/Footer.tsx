import BionetLogo from "../assets/image/logo.png";
import logo1 from "../assets/image/Vector (1).png";
import logo2 from "../assets/image/Vector (2).png";
import logo3 from "../assets/image/Vector (3).png";
import image6 from "../assets/image/Logo 2.svg";
import image7 from "../assets/image/Vector.svg";
import image8 from "../assets/image/Capa 2.svg";
import { useEffect, useState } from "react";
import { ContactService } from "../services/contact.service";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { toast } from "react-toastify";
import { SettingsContactData, SiteData } from "../interface/site.interface";
import { SettingsService } from "../services/settings.service";
import { useSite } from "../context/SiteContext";

const Footer = () => {
  const { data } = useSite() as { data: SiteData };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // Bu sətri əlavə edin
  const [settings, setSettings] = useState<SettingsContactData | null>(null);
  useEffect(() => {
    SettingsService.getSettings().then((res) => {
      setSettings(res.data.data);
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setIsRecaptchaVerified(true);
      setRecaptchaToken(token);
    } else {
      setIsRecaptchaVerified(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRecaptchaVerified || !recaptchaToken) {
      toast.error("Zəhmət olmazsa mən robot deyiləmi təsdiqləyin");

      return;
    }

    try {
      await ContactService.PostContact({ ...formData, recaptchaToken });

      toast.success("Mesajıniz uğurla yönləndirildi");
      setFormData({
        name: "",
        surname: "",
        phone_number: "",
        email: "",
        message: "",
      });
      setErrors({});
      setIsRecaptchaVerified(false);
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error: any) {

      setErrors(error.errors);
    }
  };

  return (
    <div className="footer_all">
      <div className="container footer_sides">
        <div className="footer__left">
          <img src={BionetLogo} alt="" />
          <div className="footer_right_connetion">
            <div className="contact_section">
              <h4>{data?.contact}</h4>
              <div className="contact_item">
                <img src={logo1} alt="Location" />
                <span>{settings?.address}</span>
              </div>
              <div className="contact_item">
                <img src={logo2} alt="Phone" />
                <span>{settings?.phone_number}</span>
              </div>
              <div className="contact_item">
                <img src={logo3} alt="Email" />
                <span>{settings?.email}</span>
              </div>
            </div>

            <div className="follow_us_section">
              <h4>{data?.follow_us}</h4>
              <div className="social_icons">
                <a
                  href={settings?.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image6} alt="Instagram" />
                </a>
                <a
                  href={settings?.youtube || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image7} alt="youtube" />
                </a>
                <a
                  href={settings?.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image8} alt="facebook" />
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
                <h4>{data?.contact}</h4>
                <div className="contact_item">
                  <img src={logo1} alt="Location" />
                  <span>{settings?.address}</span>
                </div>
                <div className="contact_item">
                  <img src={logo2} alt="Phone" />
                  <span>{settings?.phone_number}</span>
                </div>
                <div className="contact_item">
                  <img src={logo3} alt="Email" />
                  <span>{settings?.email}</span>
                </div>
              </div>

              <div className="follow_us_section">
                <h4>{data?.follow_us}</h4>
                <div className="social_icons">
                  <a
                    href={settings?.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image6} alt="Instagram" />
                  </a>
                  <a
                    href={settings?.youtube || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image7} alt="youtube" />
                  </a>
                  <a
                    href={settings?.facebook || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={image8} alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_right_workoffer">
            <h4 className="section_title">{data?.work_with_us}</h4>
            <p className="section_serives">{data?.services}</p>
            <div className="footer_services">
              <div>{data?.ux_ui_design}</div>
              <div>{data?.mobile_app_and_website_development}</div>
              <div> {data?.frontend_development}</div>
              <div>{data?.backend_development}</div>
            </div>

            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="form_row">
                <div className="input_container">
                  <input
                    type="text"
                    placeholder={data?.name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <p className="error_msg"> {errors.name}</p>
                </div>

                <div className="input_container">
                  <input
                    type="text"
                    placeholder={data?.surname}
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                  <p className="error_msg">{errors.surname}</p>
                </div>
              </div>
              <div className="form_row">
                <div className="input_container">
                  <input
                    type="text"
                    placeholder={data?.phone_number}
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />

                  <p className="error_msg"> {errors.phone_number}</p>
                </div>

                <div className="input_container">
                  <input
                    type="email"
                    placeholder={data?.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <p className="error_msg"> {errors.email}</p>
                </div>
              </div>
              <div className="form_row">
                <div className="input_container">
                  <textarea
                    placeholder={data?.detail_of_project}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <p className="error_msg"> {errors.message}</p>
                </div>
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Le4SE4rAAAAALpo1Pj_pfM6Hnr4pj15pQ00YjHf"
                onChange={handleRecaptchaChange}
              />

              <button
                type="submit"
                className="submit_button"
                // disabled={!isRecaptchaVerified}
              >
                {data?.send_message}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
