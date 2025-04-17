import card1 from '../../../assets/image/image11.png';
import card2 from '../../../assets/image/image14.png';
import card3 from '../../../assets/image/image12.png';
import '../../../assets/css/style.css'
const Index = () => {
    return (
        <section className="services ">
            <div className='container'>
                <div className="row">
                    <div className="services__top">
                        <h2 className="services__title">Xidmətlərimiz</h2>
                        <p className="services__desc">
                            Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik. <br />
                            Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                        </p>
                    </div>

                    <div className="services__cards">
                        <div className="card green">
                            <div className="card__icon">
                                <img src={card1} alt="icon" />
                            </div>
                            <h3 className="card__title">+50 hazırlanmış vebsayt</h3>
                            <p className="card__desc">
                                Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik.
                                Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                            </p>
                        </div>

                        <div className="card lightgreen">
                            <div className="card__icon">
                                <img src={card2} alt="icon" />
                            </div>
                            <h3 className="card__title">+5 illik təcrübə</h3>
                            <p className="card__desc">
                                Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik.
                                Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                            </p>
                        </div>

                        <div className="card blue">
                            <div className="card__icon">
                                <img src={card3} alt="icon" />
                            </div>
                            <h3 className="card__title">Premium klass dizayn</h3>
                            <p className="card__desc">
                                Fəaliyyətimiz müddətində çox sahibkarlarla işləyib, uğurlu layihələr ərsəyə gətirmişik.
                                Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
