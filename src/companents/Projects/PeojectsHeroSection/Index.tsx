import '../../../assets/css/style.css'
import card2 from '../../../assets/image/image24.png'


// import './styles.css';
import image1 from '../../../assets/image/image18.png'
import { Link } from 'react-router';

const Index = () => {
    return (
        <section>
            <div className="myProject-hero-title">
                Layihələrimiz
            </div>
            <div className='myProject-hero-all'>
                <Link to="/vebproject" className="myProject-hero-all-right my-left ">
                    <div className='myProject-hero-all-right-image first-left'>
                        <img src={image1} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Veb Sayt</h3>
                        <p>Aser Kargo</p>
                    </div>
                </Link>
                <Link to="/mobileprojects" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Mobil Tetbiq Sayt</h3>
                        <p>Aser Kargo</p>
                    </div>
                </Link>

            </div>
            <div className="myProject-hero-title">
                Son Lahiyələrimiz
            </div>
            <div className='myProject-hero-all second-all'>
                <Link to="/vebproject" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image  second-right'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Veb Sayt</h3>
                        <p>Flyex Kargo</p>
                    </div>
                </Link>
                <Link to="/mobileprojects" className="myProject-hero-all-right">
                    <div className='myProject-hero-all-right-image second-left'>
                        <img src={card2} alt="" />
                    </div>
                    <div className="myProject-content">
                        <h3>Mobil Tetbiq Sayt</h3>
                        <p>Dostex Kargo</p>
                    </div>
                </Link>

            </div>

        </section>
    )
}

export default Index;
