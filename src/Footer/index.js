import React from 'react';
import './style.css'

const Footer = () => {
    return(
        <div className="wrap__footer">
            <div className="footer__image">
                <img src={"https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg"} alt="" className="image"/>
            </div>

            <div className="footer__bookmark">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="156.9 23 261.9 506.7" viewBox="156.9 23 261.9 506.7" height="30" width="56" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-ka93rn-dkrz8k">
                    <path fill="#ef7d5f" d="M287.8 398.7l131 131V23H156.9v506.7l130.9-131z" data-color="1"></path>
                </svg>
            </div>
            <div className="footer__content">
                <div className="content__text">
                    <span className="text__heading">About Kayla Griffith</span>
                    <br/>
                    <span className="text__paragraph">I'm a paragraph. Click here to add your own text and
                    edit me. It’s easy. Just click “Edit Text” or double click
                    me to add your own content and make changes to the
                    font. I’m a great place for you to tell a story and let
                    your users know a little more about you.
                    </span>
                </div>    
                <a href="https://www.wix.com" className="content__button">Read More</a>
            </div>
        </div>
    )
}

export default Footer;