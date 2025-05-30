import { useEffect, useState } from "react";
import "../../../assets/css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation } from "swiper";
import image1 from "../../../assets/image/image18.png";
import { HomeProducts, SiteData } from "../../../interface/site.interface";
import { HomeService } from "../../../services/home.service";
import { useLanguage } from "../../../context/LanguageContext";
import { useSite } from "../../../context/SiteContext";

const Index = () => {
  const { language } = useLanguage();
  const { data } = useSite() as { data: SiteData };

  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState<HomeProducts[]>([]);

  useEffect(() => {
    HomeService.getHomeProducts().then((res) => {
      setProducts(res.data.data);
    });
  }, [language]);

  return (
    <div className="product-tabs container">
      <h2 className="product-tabs__title">{data?.our_products}</h2>
      <div className="product-tabs__buttons">
        {products?.map((tab, index) => (
          <button
            key={index}
            className={`product-tabs__button ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="products-tabs-bottom">
        <div className="products-tabs-bottom-left">
          <h3>{products[activeTab]?.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: products[activeTab]?.description ?? "",
            }}
          />
        </div>

        <div className="products-tabs-bottom-right">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="mySwiper"
          >
            {products[activeTab]?.images?.length ? (
              products[activeTab].images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`Slide ${idx + 1}`} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img src={image1} alt="Default slide" />
              </SwiperSlide>
            )}
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
