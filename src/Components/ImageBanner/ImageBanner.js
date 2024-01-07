import React from 'react';
import banner from '../../Images/banner.png';
import './ImageBanner.css'

class ImageBanner extends React.Component {
    render() {
        return (
            <div className='imageContainer' style={{backgroundImage: `url(${banner})`}}>
                <div className='bannerContainer'>
                    <div className='bannerHeading'>
                        <div>NEET Crash Course by MindLearn:</div>
                        <div>Your GateWay to Success</div>
                    </div>
                    <div className='contentOne'>Enroll Now and Crack</div>
                    <div className='contentTwo'>CRACK<br />NEET IN JUST<br /><span>45 DAYS!</span></div>
                    <div className='contentOne'>Limited Seats Available.</div>
                    <div className='mainContent'>
                        Are you preparing for NEET and seeking a last-minute comprehensive revision course?
                        MindLearn brings you an exclusive NEET Crash Course starting on january 17<sup>th</sup>,2024, with 
                        additional batches commencing on March 4<sup>th</sup>,2024. With limited seats available, 
                        now is the time to secure the spot!
                    </div>
                </div>
            </div>
        )
    }
};

export default ImageBanner;