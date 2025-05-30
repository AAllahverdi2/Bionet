import { useEffect, useState } from "react";
import AboutHerosection from "../companents/About/AboutHeroSection/Index";
import AboutSecondsection from "../companents/About/AboutSecondSection/Index";
import AboutTeamSection from "../companents/About/AboutTeamSection/Index";
import { Helmet } from "react-helmet";
import { AboutService } from "../services/about.service";
import { AboutData } from "../interface/site.interface";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const [aboutData, setAboutData] = useState<AboutData[]>([]);
  useEffect(() => {
    AboutService.getAboutData().then((res) => {
      setAboutData([res.data.data]);
    });
  }, [language]);
  return (
    <div>
      <Helmet>
        <title>Haqqimizda</title>
      </Helmet>
      <AboutHerosection aboutData={aboutData} />
      <AboutSecondsection aboutData={aboutData} />
      <AboutTeamSection />
    </div>
  );
};

export default About;
