import React from 'react';
import './register.css';
import BannerTwo from '../../Images/BannerTwo.png';

class Register extends React.Component {
    render() {
        return (
            //
            <div  style={{ backgroundImage: `url(${BannerTwo})`}} className='RegisterMainContainer' >
                <button className='buttonContainer'>Register Now</button>
                <h2 className='registerHeader'>Don't Miss This Opportunity!</h2>
                <p className='registerHeader'>Secure your seat toaday for the ultimate NEET crash course experience!<br />Register now at</p>
                <button className='buttonContainerTwo'>MindLearn NEET Crash Course.</button>
            </div>
        )
    }
};

export default Register;