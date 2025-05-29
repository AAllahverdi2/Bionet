import "../../../assets/css/style.css";
import { AboutData } from "../../../interface/site.interface";

interface Props {
  aboutData: AboutData[];
}

const Index = ({ aboutData }: Props) => {
  const hero = aboutData[0]; 

  return (
    <div className="about-hero-all">
      <div className="container">
        <h2>{hero?.hero_title}</h2>
        <div dangerouslySetInnerHTML={{ __html: hero?.hero_description }} />
      </div>
    </div>
  );
};

export default Index;
