import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <nav className="wrap__navbar">
            <div className="navbar__items">
                <div className="items__name">
                    <span className="name__text">K. Griffith</span>
                </div>
                <div className="items__button">
                    <a href="#" className="button">APPEARANCES</a>
                    <a href="#" className="button">BOOKS</a>
                    <a href="#" className="button">NEWS</a>
                    <a href="#" className="button">ABOUT</a>
                    <a href="#" className="button">CONTACT</a>
                </div>
            </div>
            <div className="navbar__hr"/>
            <div className="navbar__elems">
                <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" className="elems__image"/>
                <div className="elems__text">
                    <span className="text__name">Kayla Griffith</span>
                    <span className="text__sub">Award Winning Author</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar