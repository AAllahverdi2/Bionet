import React from 'react'
import "../../../assets/css/style.css"
import '../../../assets/css/style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import image1 from '../../../assets/image/image18.png'
import { Navigation } from 'swiper/modules';
const Index = () => {
    return (
        <div className='services-hero-all container'>
            <div className="services-hero-title">
                <h2>Xidmətlərimiz</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt dicta
                    nihil delectus, praesentium quam sequi eaque inventore!
                </p>
            </div>

            <div className="products-tabs-bottom">
                <div className="products-tabs-bottom-left">
                    <h3>+50 hazırlanmış vebsayt</h3>
                    <p>
                        Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik.
                        Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                    </p>
                    <p>
                        Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik.
                        Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                    </p>
                </div>
                <div className="products-tabs-bottom-right">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Index
