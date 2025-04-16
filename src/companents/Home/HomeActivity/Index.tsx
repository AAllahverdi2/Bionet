import React from 'react';
import '../../../assets/css/style.css';

const Index = () => {
  return (
    <section  className='activity_all'>
      <h2 className="activities__title">Fəaliyyətimiz</h2>
      <section className="activities container">
        <div className="activities__wrapper">
          <div className="activities__left">
            <h3 className="activities__heading">Xidmətlərimizdən yararlanın</h3>
            <p>
              Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. 
              Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
            </p>
            <p>
              Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. 
              Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
            </p>
          </div>
          <div className="activities__right">
            <div className="stat-box green">
              <span>Təhlil verilmiş layihələr</span>
              <strong>50+</strong>
            </div>
            <div className="stat-box purple">
              <span>Müştəri məmnuniyyəti</span>
              <strong>92%</strong>
            </div>
            <div className="stat-box blue">
              <span>Komanda</span>
              <strong>10+</strong>
            </div>
            <div className="stat-box orange">
              <span>Bizim fəaliyyətimiz</span>
              <strong>5 il+</strong>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Index;
