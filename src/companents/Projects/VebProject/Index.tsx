import React from 'react'
import '../../../assets/css/style.css'
import image1 from '../../../assets/image/Aser.png'
import image2 from '../../../assets/image/Dostex.png'

const Index = () => {
    return (
        <div className="webProject-section">
            <div className="webProject-hero-title">
                Layihələrimiz
            </div>
            <div className="webProject-hero-all">
                {/* Left Column */}
                <div className="webProject-hero-all-left">
                    <div className="webProject-hero-image">
                        <img src={image1} alt="Image 1" />
                        <button className="webProject-btn">Veb sayta keçid</button>
                    </div>
                    <div className="webProject-hero-image">
                        <img src={image2} alt="Image 2" />
                        <button className="webProject-btn">Veb sayta keçid</button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="webProject-hero-all-right">
                    <div className="webProject-hero-image">
                        <img src={image2} alt="Image 3" />
                        <button className="webProject-btn">Veb sayta keçid</button>
                    </div>
                    <div className="webProject-hero-image">
                        <img src={image1} alt="Image 4" />
                        <button className="webProject-btn">Veb sayta keçid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
