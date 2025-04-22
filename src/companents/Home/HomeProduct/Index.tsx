import { useState } from 'react';
import '../../../assets/css/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation } from 'swiper';
import image1 from '../../../assets/image/image18.png';

const tabs = [
    'Vebsaytlar',
    'IOS üçün mobil tətbiq',
    'Android üçün mobil tətbiq',
    'Oyun üçün məhsullar',
];

const tabContent = [
    {
        title: '+50 hazırlanmış vebsayt',
        description:
            'Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.',
    },
    {
        title: '+30 IOS tətbiqi',
        description:
            'IOS platforması üçün optimallaşdırılmış müasir və funksional mobil tətbiqlər hazırlayırıq. Bizim məqsədimiz istifadəçi təcrübəsini ön planda tutmaqdır.',
    },
    {
        title: '+40 Android tətbiqi',
        description:
            'Android cihazlar üçün güclü və etibarlı mobil tətbiqlər təqdim edirik. Tətbiqlərimiz sürətli, istifadəçi dostu və hər cihazla uyğunlaşdırılır.',
    },
    {
        title: '+10 oyun tətbiqi',
        description:
            'Fərqli kateqoriyalarda oyun tətbiqləri hazırlayırıq. İstifadəçilərimizə daha maraqlı və əyləncəli təcrübələr təqdim etmək üçün daim yeniliklər edirik.',
    },
];

const Index = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="product-tabs container">
            <h2 className="product-tabs__title">Məhsullarımız</h2>
            <div className="product-tabs__buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`product-tabs__button ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="products-tabs-bottom">
                <div className="products-tabs-bottom-left">
                    <h3>{tabContent[activeTab].title}</h3>
                    <p>{tabContent[activeTab].description}</p>
                </div>
                <div className="products-tabs-bottom-right">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 3" /></SwiperSlide>
                        <SwiperSlide><img src={image1} alt="Slide 4" /></SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev">
                        <i className="fa-solid fa-left-long"></i>
                    </div>
                    <div className="swiper-button-next">
                        <i className="fa-solid fa-right-long"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;