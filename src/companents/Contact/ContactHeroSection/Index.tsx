import React from 'react'
import '../../../assets/css/style.css'
import image1 from '../../../assets/image/Group 1389.png'
import image2 from '../../../assets/image/Group 1392.png'
import image3 from '../../../assets/image/location_on_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 1.png'
import image4 from '../../../assets/image/Frame 1985.png'
import image6 from '../../../assets/image/Logo 2.png'
import image7 from '../../../assets/image/Vector.png'
import image8 from '../../../assets/image/Capa 2.png'
const Index = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-header">
                <div className='contact-header-all'>
                    <h2>Bizimlə əlaqə</h2>
                    <p>
                        Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir. Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa kömək edirik
                    </p>
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-form">
                    <h3>Sualınız var? Bizə yazın</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-field">
                                <label htmlFor="first-name">Ad</label>
                                <input id="first-name" type="text" placeholder="Adınızı daxil edin" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="last-name">Soyad</label>
                                <input id="last-name" type="text" placeholder="Soyadınızı daxil edin" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="Emailinizi daxil edin" />
                            </div>
                            <div className="input-field">
                                <label htmlFor="phone">Telefon </label>
                                <input id="phone" type="text" placeholder="Telefon nömrənizi daxil edin" />
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor="message">Mesaj</label>
                            <textarea id="message" placeholder="Mesajınızı yazın......"></textarea>
                        </div>
                        <button type="submit">Göndər</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h3>Əlaqə məlumatları</h3>
                    <ul>
                        <li>
                            <img src={image1} alt="Phone" />
                            <span>Bizə zəng edin: (+99412) 310 07 09</span>
                        </li>
                        <li>
                            <img src={image2} alt="Email" />
                            <span>Email: info@bionet.az</span>
                        </li>
                        <li className="contact_smedia">
                            <img src={image4} alt="Social Media" />
                            <div className='contact_smedia_all'>
                                <span className="social-label">Sosial media</span>
                                <div className="social-icons">
                                    <img src={image8} alt="Facebook" />
                                    <img src={image7} alt="Instagram" />
                                    <img src={image6} alt="YouTube" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={image3} alt="Location" />
                            <span>Ünvan: Abbasqulu Ağa Bakıxanov küç, 92</span>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default Index
