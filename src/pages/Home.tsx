import { Helmet } from 'react-helmet';
import Index from '../companents/Home/HomeHeroSection/Index';
import HomeServices from '../companents/Home/HomeServices/Index';
import HomeActivity from '../companents/Home/HomeActivity/Index';
import Homeweb from '../companents/Home/HomeSites/Index';
import HomeProducts from '../companents/Home/HomeProduct/Index';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ana Səhifə</title> 
      </Helmet>
      <Index />
      <HomeServices />
      <HomeActivity />
      <Homeweb />
      <HomeProducts />
    </div>
  );
};

export default Home;
