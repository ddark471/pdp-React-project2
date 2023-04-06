import React from 'react'
import './style.css'

const Books = () => {
    return (
        <div className="wrap__books">
            <div className="books__background">
                <img src="https://static.wixstatic.com/media/ad420a_0966fded081b4a12988a616e305424d1~mv2.jpg/v1/fill/w_2798,h_1866,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_0966fded081b4a12988a616e305424d1~mv2.jpg" className="background__image" alt=""/>
            </div>
            <div className="books__main">
                <div className="main__info">
                    <div className="info__bookmark">
                        <div className="bookmark__image">
                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="15 87.5 170 25" viewBox="15 87.5 170 25" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-labelledby="svgcid--nqusff267y1d">
                                <path d="M185 87.5l-170 .003V112.5h170l-10.339-12.502L185 87.5z"></path>
                            </svg>
                        </div>
                        <span className="info__text">New Release</span>
                    </div>
                    <div className="info__heading">
                        <span className="heading__text">The Swan Isle</span>
                        <br/>
                        <span className="heading__date">(2035)</span>
                    </div>
                    <div className="info__paragraph">
                        <span className="paragraph__text">
                            I'm a paragraph. 
                            Click here to add your own text and edit me. 
                            It’s easy.
                            Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </span>
                    </div>
                    
                    <div className="info__order">
                        <span className="order__text">Order Now</span>
                    </div>
                    
                    <div className="info__links">
                        <a href="www.amazon.com" target="_blank" className="links">Amazon</a>
                        <a href="www.google.com" target="_blank" className="links">Google</a>
                        <a href="www.apple.com/apple-books/" target="_blank" className="links">ibooks</a>
                    </div>
                </div>
                <div className="main__book">
                    <img src={"https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"} className="book__image" alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Books