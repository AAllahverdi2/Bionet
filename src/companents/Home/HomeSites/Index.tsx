import { useEffect, useState } from "react";
import "../../../assets/css/style.css";
import card1 from "../../../assets/image/image15.png";
import card2 from "../../../assets/image/image16.png";
import card3 from "../../../assets/image/image17.png";
import {
  HomeWebDevelopmentDataType,
  SiteData,
} from "../../../interface/site.interface";
import { HomeService } from "../../../services/home.service";
import { useLanguage } from "../../../context/LanguageContext";
import { useSite } from "../../../context/SiteContext";
const Index = () => {
  const { language } = useLanguage();
  const { data } = useSite() as { data: SiteData };

  const [webDevelopment, setWebDevelopment] = useState<
    HomeWebDevelopmentDataType[]
  >([]);
  useEffect(() => {
    HomeService.getHomeDevelopMent().then((res) => {
      setWebDevelopment(res.data.data);
    });
  }, [language]);
  return (
    <section className="web-all">
      <div className="web-dev container">
        <h2 className="web-dev__title">{data?.web_dev}</h2>
        <div className="web-dev__wrapper">
          {webDevelopment.map((item, index) => {
            return (
              <div className="web-dev__step">
                <div className="web-dev__icon">
                  <img src={item.image} alt="Bazar Araşdırması" />
                </div>
                <h3>{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
                />
              </div>
            );
          })}
        </div>
        {/* <div className="web-dev__wrapper">
          <div className="web-dev__step">
            <div className="web-dev__icon">
              <img src={card1} alt="Bazar Araşdırması" />
            </div>
            <h3>1. Bazar Araşdırması</h3>
            <p>
              Bazar araşdırması, şirkətlərin və ya təşkilatların müəyyən bir
              sektorda mövcud olan rəqabət mühiti, müştəri tələbləri və bazar
              trendi haqqında dərin...
            </p>
          </div>
          <div className="web-dev__step">
            <div className="web-dev__icon">
              <img src={card2} alt="UX/UI Dizayn" />
            </div>
            <h3>2. UX/UI Dizayn</h3>
            <p>
              UX/UI dizaynın çəkilməsi, istifadəçi təcrübəsini və interfeysini
              nəzərə alaraq funksional və vizual olaraq cəlbedici bir məhsul
              yaratmaq prosesidir.
            </p>
          </div>
          <div className="web-dev__step">
            <div className="web-dev__icon">
              <img src={card3} alt="Məhsulun təhvili" />
            </div>

            <h3>3. Məhsulun təhvil verilməsi</h3>
            <p>
              Veb saytın təhvil verilməsi, layihənin tamamlanma mərhələsində
              müştəriyə və ya layihə sahibinə işlək vəziyyətdə təqdim olunması
              prosesidir.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Index;
