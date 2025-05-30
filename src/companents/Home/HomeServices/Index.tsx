import card1 from "../../../assets/image/image11.png";
import card2 from "../../../assets/image/image14.png";
import card3 from "../../../assets/image/image12.png";
import "../../../assets/css/style.css";
import { useEffect, useState } from "react";
import { HomeServicesDataType, SiteData } from "../../../interface/site.interface";
import { HomeService } from "../../../services/home.service";
import { useLanguage } from "../../../context/LanguageContext";
import { data } from "react-router";
import { useSite } from "../../../context/SiteContext";
const Index = () => {
  const { language } = useLanguage();
  const { data } = useSite() as { data: SiteData };

  const [homeServices, setHomeServices] = useState<HomeServicesDataType[]>([]);
  const colorClasses = ["green", "lightgreen", "blue"];

  useEffect(() => {
    HomeService.getHomeServices().then((res) => {
      setHomeServices(res.data.data);
    });
  }, [language]);
  return (
    <section className="services ">
      <div className="container">
        <div className="row">
          <div className="services__top">
            <h2 className="services__title">{data?.services}</h2>
            <p className="services__desc">
             {data?.services_description}
            </p>
          </div>

          <div className="services__cards">
            {homeServices.map((item, index) => {
              const colorClass = colorClasses[index % colorClasses.length];
              return (
                <div className={`card ${colorClass}`} key={index}>
                  <div className="card__icon">
                    <img src={item.image} alt="icon" />
                  </div>
                  <h3 className="card__title">{item.title}</h3>
                  <p
                    className="card__desc"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
