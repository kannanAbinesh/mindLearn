import React from "react";
import  './aboutUs.css';

import banner from '../../Images/secondDivision.png';

class AboutUs extends React.Component {
    render() {
        return (
            <div id="aboutUs_view">
                <div className="mainContainer">
                    <div className="firstContainer">
                        <div className="heading">About Us: MindLearn</div>
                        <div className="heading">-Your One-Stop Solution</div>
                        <div className="mainContents">
                            At MindLearn, we understand the challenges students face in the preparing for NEET. 
                            Whether you are in 12<sup>th</sup> standard or a repeat candidate, our platform covers everything 
                            from counseling session, college shortlisting, and exam preparation to recruitmant and placement support.
                        </div>
                    </div>
                    <div className="secondContainer">
                        <img className="imageContainers" alt='banner' src={banner} />
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutUs;