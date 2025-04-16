import React from 'react';
import '../../../assets/css/style.css';

const Index = () => {
  return (
    <div className="quote-form">
      <h2 className="title">Qiymət təklifi</h2>
      <p className="subtitle">
        Vebsayt və ya mobil tətbiq üçün dizayn qiymətinin hesablanması istəyirsinizsə
        bizə yazın və qiymət təklifi alın
      </p>

      <form className="form">
        <div className="form-group">
          <div className="input-field">
            <label htmlFor="first-name">Adınızı və soyadınızı daxil edin</label>
            <input
              id="first-name"
              type="text"
              placeholder="Adınızı və soyadınızı daxil edin"
              className="input"
            />
          </div>
          <div className="input-field">
            <label htmlFor="contact-number">Əlaqə nömrənizi daxil edin</label>
            <input
              id="contact-number"
              type="text"
              placeholder="Əlaqə nömrənizi daxil edin"
              className="input"
            />
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="product-info">Məhsul haqqında</label>
          <textarea id="product-info" className="textarea" placeholder="Məhsul haqqında"></textarea>
        </div>
        <button type="submit" className="submit-button">
          Göndər
        </button>
      </form>
    </div>
  );
};

export default Index;
