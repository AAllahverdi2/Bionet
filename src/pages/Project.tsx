import ProjectsHeroSection from '../companents/Projects/PeojectsHeroSection/Index'
import { Helmet } from 'react-helmet';

const Project = () => {
  return (
    <div>
      <Helmet>
        <title>Layihələrimiz</title> 
      </Helmet>
      <ProjectsHeroSection/>
    </div>
  )
}

export default Project
