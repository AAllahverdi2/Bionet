import React from 'react'
import '../../../assets/css/style.css'
const Index = () => {
    return (
        <div className="quote-form">
            <h2 className="title">Qiymət təklifi</h2>
            <p className="subtitle">
                Vebsayt və ya mobil tətbiq üçün dizayn qiymətinin hesablanması istəyirsinizsə
                bizə yazın və qiymət təklifi alın
            </p>

            <form className="form">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Adınızı və soyadınızı daxil edin"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Əlaqə nömrənizi daxil edin"
                        className="input"
                    />
                </div>
                <textarea
                    placeholder="Məhsul haqqında"
                    className="textarea"
                ></textarea>
                <button type="submit" className="submit-button">
                    Göndər
                </button>
            </form>
        </div>
    )
}

export default Index
