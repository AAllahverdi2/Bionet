import AboutHerosection from '../companents/About/AboutHeroSection/Index'
import AboutSecondsection from '../companents/About/AboutSecondSection/Index'
import AboutTeamSection from '../companents/About/AboutTeamSection/Index'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
              <title>Haqqimizda</title> 
            </Helmet>
      <AboutHerosection/>
      <AboutSecondsection/>
      <AboutTeamSection/>
      
      
    </div>
  )
}

export default About
