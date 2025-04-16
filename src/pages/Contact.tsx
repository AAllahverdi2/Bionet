import React from 'react'
import ContactHeroSection from '../companents/Contact/ContactHeroSection/Index'
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Əlaqə</title> 
      </Helmet>
     <ContactHeroSection/> 
      
    </div>
  )
}

export default Contact
