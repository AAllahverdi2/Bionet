import React from 'react'
import '../../../assets/css/style.css'
import card1 from '../../../assets/image/image23.png'
import card2 from '../../../assets/image/image24.png'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import image1 from '../../../assets/image/image18.png'
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const Index = () => {
    return (
        <section>
            <div className="myProject-hero-title">
                Lahiyələrimiz
            </div>
            <div className='myProject-hero-all'>
                <Link to="/vebproject" className="myProject-hero-all-left">
                    <div className="myProject-products-tabs-bottom-right">
                        <Swiper navigation={true} modules={[Navigation]} className="myProject-mySwiper">
                            <SwiperSlide><img src={card1} alt="Slide 1" /></SwiperSlide>
                            <SwiperSlide><img src={card1} alt="Slide 1" /></SwiperSlide>
                            <SwiperSlide><img src={card1} alt="Slide 1" /></SwiperSlide>
                            <SwiperSlide><img src={card1} alt="Slide 1" /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="myProject-content">
                        <h3>Veb Sayt</h3>
                        <p>Aser Kargo</p>
                    </div>
                </Link>
                <Link to="/mobileprojects" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Mobil Tetbiq Sayt</h3>
                        <p>Aser Kargo</p>
                    </div>
                </Link>

            </div>
            <div className="myProject-hero-title">
                Son Lahiyələrimiz
            </div>
            <div className='myProject-hero-all second-all'>
                <Link to="/vebproject" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image  second-right'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Veb Sayt</h3>
                        <p>Flyex Kargo</p>
                    </div>
                </Link>
                <Link to="/mobileproject" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image second-left'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Mobil Tetbiq Sayt</h3>
                        <p>Dostex Kargo</p>
                    </div>
                </Link>

            </div>

        </section>
    )
}

export default Index;
