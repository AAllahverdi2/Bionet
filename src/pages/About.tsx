import { useEffect, useState } from "react";
import AboutHerosection from "../companents/About/AboutHeroSection/Index";
import AboutSecondsection from "../companents/About/AboutSecondSection/Index";
import AboutTeamSection from "../companents/About/AboutTeamSection/Index";
import { Helmet } from "react-helmet";
import { AboutService } from "../services/about.service";
import { AboutData } from "../interface/site.interface";

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData[]>([]);
  useEffect(() => {
    AboutService.getAboutData().then((res) => {
      console.log([res.data.data]);
      setAboutData([res.data.data])
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Haqqimizda</title>
      </Helmet>
      <AboutHerosection  aboutData={aboutData}/>
      <AboutSecondsection aboutData={aboutData} />
      <AboutTeamSection />
    </div>
  );
};

export default About;
