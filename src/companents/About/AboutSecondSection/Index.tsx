import React from 'react'
import '../../../assets/css/style.css'
import card1 from '../../../assets/image/image19.png'
import image1 from '../../../assets/image/image20.png'
import image2 from '../../../assets/image/image21.png'
import image3 from '../../../assets/image/image22.png'
const Index = () => {
    return (
        <div className='about-second-container container'>
            <div className="about-second-all">
                <div className="about-second-left">
                    <h2>
                        BIZIM MISSIYAMIZ
                    </h2>
                    <p>
                        Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir. Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa və bizneslərini rəqəmsal dünyaya adaptasiya etməyə kömək edirik
                    </p>
                    <p>
                        Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir. Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa və bizneslərini rəqəmsal dünyaya adaptasiya etməyə kömək edirik
                    </p>
                    <p>
                        Şirkətimiz, Bionet uzun illərdir ki, müştərilərinə yüksək keyfiyyətli veb-saytların hazırlanması xidmətini təklif edir. Müxtəlif sənaye sahələrində fəaliyyət göstərən müəssisələrlə əməkdaşlıq edərək, onların onlayn mövcudluğunu artırmağa və bizneslərini rəqəmsal dünyaya adaptasiya etməyə kömək edirik
                    </p>
                </div>
                <div className="about-second-right">
                    <img src={card1} alt="" />
                </div>
            </div>

            <div className="about-section-bottom">
                <div className="about-item">
                    <div className="icon">
                        <img src={image1} alt="Bazar Araşdırması" />
                    </div>
                    <div className="item-label">1. Bazar Araşdırması</div>
                </div>

                <div className="about-item">
                    <div className="icon">
                        <img src={image2} alt="UX/UI Dizayn" />
                    </div>
                    <div className="item-label">2. UX/UI Dizayn</div>
                </div>

                <div className="about-item">
                    <div className="icon">
                        <img src={image3} alt="Təhlil Verilməsi" />
                    </div>
                    <div className="item-label">3. Təhlil Verilməsi</div>
                </div>
            </div>
        </div>

    )
}

export default Index
