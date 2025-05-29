import "../../../assets/css/style.css";
import { AboutData } from "../../../interface/site.interface";

interface Props {
  aboutData: AboutData[];
}

const Index = ({ aboutData }: Props) => {
  const data = aboutData[0];

  return (
    <div className="about-second-container container">
      <div className="about-second-all">
        <div className="about-second-left">
          <h2>{data?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
        <div className="about-second-right">
          <img src={data?.image} alt="Haqqımızda şəkil" />
        </div>
      </div>

      <div className="about-section-bottom">
        {data?.icons?.map((item, index) => (
          <div className="about-item" key={index}>
            <div className="icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <div className="item-label">
              {index + 1}. {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
