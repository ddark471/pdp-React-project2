import React from 'react';
import './style.css'

const Appearances = () =>{
    return(
        <div className="wrap__appearances">
            <div className="appearances__text">
                <span className="text__main">See Upcoming Appearances</span>
                <span className="text__subtext">I'm a paragraph. Click here to add your own
                text and edit me. It's easy.</span>
            </div>

            <div className="appearances__table">
                <div className="table__text">
                    <span className="text">January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM-8PM EST</span>
                </div>
                <a href="www.google.com" className="table__button">Join</a>
            </div>

            <div className="appearances__table">
                <div className="table__text">
                    <span className="text">January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</span>
                </div>
                <a href="www.google.com" className="table__button">Join</a>
            </div>

            <div className="appearances__table">
                <div className="table__text">
                    <span className="text">March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</span>
                </div>
                <a href="www.google.com" className="table__button">Join</a>
            </div>
        </div>
    )
}

export default Appearances;