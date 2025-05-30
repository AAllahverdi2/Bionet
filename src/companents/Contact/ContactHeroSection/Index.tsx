import "../../../assets/css/style.css";
import image1 from "../../../assets/image/Group 1389.png";
import image2 from "../../../assets/image/Group 1392.png";
import image3 from "../../../assets/image/location_on_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 1.png";
import image4 from "../../../assets/image/Frame 1985.png";
import image6 from "../../../assets/image/Logo 2.svg";
import image7 from "../../../assets/image/Vector.svg";
import image8 from "../../../assets/image/Capa 2.svg";
import { useState } from "react";
import { ContactService } from "../../../services/contact.service";
import { toast } from "react-toastify";
import { useSite } from "../../../context/SiteContext";
import { SiteData } from "../../../interface/site.interface";

const Index = () => {
  const { data } = useSite() as { data: SiteData };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await ContactService.PostContact(formData);
      toast.success("Məlumatlarıniz uğurla göndərildi");
    } catch (err: any) {
      setErrors(err.errors);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <div className="contact-header-all">
          <h2>Bizimlə əlaqə</h2>
          <p>
            Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək
            keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir.
            Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə
            əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa kömək
            edirik
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h3>Sualınız var? Bizə yazın</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="firstName">{data?.name}</label>
                <input
                  id="name"
                  type="text"
                  placeholder={data?.name_placeholder}
                  value={formData.name}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.name}</p>
              </div>
              <div className="input-field">
                <label htmlFor="lastName">{data?.surname}</label>
                <input
                  id="surname"
                  type="text"
                  placeholder={data?.surname_placeholder}
                  value={formData.surname}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.surname}</p>
              </div>
            </div>
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="email">{data?.email}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={data?.email_placeholder}
                  value={formData.email}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.email}</p>
              </div>
              <div className="input-field">
                <label htmlFor="phone">{data?.phone_number} </label>
                <input
                  id="phone_number"
                  type="text"
                  placeholder={data?.phone_number_placeholder}
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                <p className="errorMsg">{errors.phone_number}</p>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="message">{data?.message}</label>
              <textarea
                id="message"
                placeholder={data?.message_placeholder}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <p className="errorMsg">{errors.message}</p>
            </div>
            <button type="submit">{data?.send_message}</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>{data?.contact_details}</h3>
          <ul>
            <li>
              <img src={image1} alt="Phone" />{" "}
              <span>{data?.call_us}: (+99412) 310 07 09</span>
            </li>
            <li>
              <img src={image2} alt="Email" />{" "}
              <span>{data?.email}: info@bionet.az</span>
            </li>
            <li className="contact_smedia">
              <img src={image4} alt="Social Media" />
              <div className="contact_smedia_all">
                <span className="social-label">{data?.social_media}</span>
                <div className="social-icons">
                  <img src={image8} alt="Facebook" />
                  <img src={image7} alt="Instagram" />
                  <img src={image6} alt="YouTube" />
                </div>
              </div>
            </li>
            <li>
              <img src={image3} alt="Location" />{" "}
              <span>{data?.address}: Abbasqulu Ağa Bakıxanov küç, 92</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
