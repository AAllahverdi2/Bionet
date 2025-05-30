import "../../../assets/css/style.css";
import "../../../assets/css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { ServicesService } from "../../../services/service.service";
import { ServicesDataType, SiteData } from "../../../interface/site.interface";
import { useLanguage } from "../../../context/LanguageContext";
import { useSite } from "../../../context/SiteContext";
const Index = () => {
  const { language } = useLanguage();
  const { data } = useSite() as { data: SiteData };

  const [service, setService] = useState<ServicesDataType | null>(null);
  useEffect(() => {
    ServicesService.getServices().then((res) => {
      setService(res.data.data);
    });
  }, [language]);
  return (
    <div className="services-hero-all container">
      <div className="services-hero-title">
        <h2>{data?.services}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt
          dicta nihil delectus, praesentium quam sequi eaque inventore!
        </p>
      </div>

      {service && (
        <div className="products-tabs-bottom">
          <div className="products-tabs-bottom-left">
            <h3>{service.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: service.description }} />
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
              {service.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prev">
              <i className="fa-solid fa-left-long"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fa-solid fa-right-long"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
