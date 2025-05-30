import { useEffect, useState } from "react";
import "../../../assets/css/style.css";
import {
  HomeServiceSectionData,
  ServiceStatistic,
  SiteData,
} from "../../../interface/site.interface";
import { HomeService } from "../../../services/home.service";
import { useLanguage } from "../../../context/LanguageContext";
import { useSite } from "../../../context/SiteContext";

const Index = () => {
  const { language } = useLanguage();
  const { data } = useSite() as { data: SiteData };

  const [activities, setActivities] = useState<HomeServiceSectionData[]>([]);
  const [statistics, setStatics] = useState<ServiceStatistic[]>([]);
  const colors = ["green", "purple", "blue", "orange"];

  useEffect(() => {
    HomeService.getHomeActivity().then((res) => {
      setActivities([res.data.data]);
      setStatics(res.data.data.statistics);
    });
  }, [language]);
  return (
    <section className="activity_all">
      <h2 className="activities__title">{data?.activity}</h2>
      <div className="home-activity-color">
        <div className="activities container">
          <div className="activities__wrapper">
            {activities.map((item, index) => {
              return (
                <div className="activities__left">
                  <h3 className="activities__heading">{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              );
            })}

            <div className="activities__right">
              {statistics.map((item, index) => (
                <div
                  className={`stat-box ${colors[index % colors.length]}`}
                  key={index}
                >
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
