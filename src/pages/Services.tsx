import ServicesHeroSection from '../companents/Services/ServicesHeroSection/Index'
import ServicesSecondSection from '../companents/Services/ServicesSecondSection/Index'
import { Helmet } from 'react-helmet';
const Services = () => {
  return (
    <div>
<Helmet>
        <title>Xidmətlərimiz</title> 
      </Helmet>
      <ServicesHeroSection/>
      <ServicesSecondSection/>
    </div>
  )
}

export default Services
