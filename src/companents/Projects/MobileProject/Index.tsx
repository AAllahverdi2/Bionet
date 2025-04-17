import React from 'react';
import '../../../assets/css/style.css';
import image1 from '../../../assets/image/AserMobile.png';
import image2 from '../../../assets/image/AzerpoctMobile.png';


const Index = () => {
  return (
    <div className="mobileProject-section">
      <div className="mobileProject-hero-title">
        Layihələrimiz
      </div>
      <div className="mobileProject-hero-all">
        <div className="mobileProject-hero-column">
          <div className="mobileProject-hero-image">
            <img src={image1} alt="Image 1" />
            <button className="mobileProject-btn">Mobil tətbiqi yüklə</button>
          </div>
          <div className="mobileProject-hero-image">
            <img src={image2} alt="Image 2" />
            <button className="mobileProject-btn">Mobil tətbiqi yüklə</button>
          </div>
        </div>

        <div className="mobileProject-hero-column">
          <div className="mobileProject-hero-image">
            <img src={image2} alt="Image 3" />
            <button className="mobileProject-btn">Mobil tətbiqi yüklə</button>
          </div>
          <div className="mobileProject-hero-image">
            <img src={image1} alt="Image 4" />
            <button className="mobileProject-btn">Mobil tətbiqi yüklə</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
