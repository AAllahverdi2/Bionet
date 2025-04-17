import "../../../assets/css/style.css"
import '../../../assets/css/style.css';
// Import Swiper React components

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Düzəldilmiş import
// import { Navigation } from 'swiper/modules'; 

import { Navigation } from 'swiper'; // Swiper-ın Navigation modulunu düzgün idxal edin


// import './styles.css';
import image1 from '../../../assets/image/image18.png'
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
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-prev',
                            prevEl: '.swiper-button-next',
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 3" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 4" /></SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev">
                        <i className="fa-solid fa-right-long"></i>
                    </div>
                    <div className="swiper-button-next">
                        <i className="fa-solid fa-left-long"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
