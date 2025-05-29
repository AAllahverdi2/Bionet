import { useEffect, useState } from "react";
import "../../../assets/css/style.css";
import { Link } from "react-router";
import {
  HomeHeraDataType,
  PartnersDataType,
} from "../../../interface/site.interface";
import { HomeService } from "../../../services/home.service";
import { useLanguage } from "../../../context/LanguageContext";
const Index = () => {
    const { language } = useLanguage();

  const [heroData, setHeroData] = useState<HomeHeraDataType[]>([]);
  const [partners, setpartners] = useState<PartnersDataType[]>([]);
  useEffect(() => {
    HomeService.getHomeHero(language).then((res) => {
      setHeroData([res.data.data]);
    });
    HomeService.getPartners().then((res) => {
      setpartners(res.data.data);
    });
  }, [language]);
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {heroData?.map((item, index) => {
            return (
              <div className="hero__container ">
                <h1 className="hero__title">
                  {item.title.split(" ").map((word, idx) => {
                    const cleanWord = word.replace(",", "").toLowerCase();
                    const highlightWords = ["nəsil", "həllər"];
                    const isHighlighted = highlightWords.includes(cleanWord);
                    return (
                      <span
                        key={idx}
                        className={isHighlighted ? "highlight-green" : ""}
                      >
                        {word + " "}
                      </span>
                    );
                  })}
                </h1>

                <p
                  className="hero__desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>

                <Link to="/projects" className="hero__btn">
                  PORTFOLİOMUZ
                </Link>
              </div>
            );
          })}
          {/* <h1 className="hero__title">
              Yeni <span className="highlight-green">nəsil</span>, yeni{" "}
              <span className="highlight-green">həllər</span>
            </h1>
            <p className="hero__desc">
              Together, We Create the Future at Bionet. We design and develop
              digital products that elevate <br />
              your brand and connect with your audience. Let’s innovate
              together.
            </p>
            <Link to="/projects" className="hero__btn">
              PORTFOLİOMUZ
            </Link>
          </div> */}

          <div className="partners" id="partners">
            <h2 className="partners__title">Partnyorlar</h2>
            <p className="partners__desc">
              Helping leaders to create and transform products, brand
              experiences, and <br />
              customer relationships.
            </p>
            <div className="partners__logos">
              {partners.map((item, indx) => {
                return <img src={item.logo} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
