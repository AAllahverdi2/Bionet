import React from 'react';
import '../../../assets/css/style.css';
import teamMember1 from '../../../assets/image/ellipse1.png'; // Şəkil yolu
import teamMember2 from '../../../assets/image/ellipse2.png'; // Şəkil yolu

const Index = () => {
    return (
        <section className='team-all'>
            <div className="team-container container">
                <div className="team-header">
                    <h2>Komandamız</h2>
                    <p>
                        Fəaliyyətimiz müddətində çox sahiblərlə işləyib, uğurlu layihələr arxa arxaya gətrmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik. Fəaliyyətimiz müddətində çox sahiblərlə işləyib, uğurlu layihələr arxa arxaya gətrmişik. Sizin üçün istədiyiniz vebsaytları və mobil tətbiqləri dizayn edirik.
                    </p>
                </div>

                <div className="team-members">
                    <div className="team-member">
                        <div className="member-photo">
                            <img src={teamMember1} alt="Ali Ali" />
                        </div>
                        <div className="member-info">
                            <h4>Ali Ali</h4>
                            <p>Back End Developer</p>
                        </div>
                    </div>

                    <div className="team-member">
                        <div className="member-photo">
                            <img src={teamMember1} alt="Ali Ali" />
                        </div>
                        <div className="member-info">
                            <h4>Ali Ali</h4>
                            <p>Front End Developer</p>
                        </div>
                    </div>

                    <div className="team-member">
                        <div className="member-photo">
                            <img src={teamMember2} alt="UX/UI Dizayner" />
                        </div>
                        <div className="member-info">
                            <h4>UX/UI Dizayner</h4>
                            <p>UX/UI Dizayner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
