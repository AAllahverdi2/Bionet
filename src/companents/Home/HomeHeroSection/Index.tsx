import React from 'react';
import '../../../assets/css/style.css'
import bp from '../../../assets/image/image 2.png'
import azal from '../../../assets/image/image 3.png'
import irshad from '../../../assets/image/image 5.png'
import rabite from '../../../assets/image/image6.png'
import kapital from '../../../assets/image/image7.png'
import { Link } from 'react-router';
const Index = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="hero__container ">
            <h1 className="hero__title">
              Yeni <span className="highlight-green">nəsil</span>, yeni <span className="highlight-green">həllər</span>
            </h1>
            <p className="hero__desc">
              Together, We Create the Future at Bionet. We design and develop digital products that elevate <br />
              your brand and connect with your audience. Let’s innovate together.
            </p>
            <Link to='/projects' className="hero__btn">PORTFOLİOMUZ</Link>
          </div>

          <div className="partners">
            <h2 className="partners__title">Partnyorlar</h2>
            <p className="partners__desc">
              Helping leaders to create and transform products, brand experiences, and <br />
              customer relationships.
            </p>
            <div className="partners__logos">
              <img src={bp} alt="bp" />
              <img src={azal} alt="Azerbaijan Airlines" />
              <img src={irshad} alt="İrşad" />
              <img src={rabite} alt="Rabitabank" />
              <img src={kapital} alt="Kapital Bank" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
