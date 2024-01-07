import React from 'react';
import './contact.css';
import { FaMailBulk, FaMobile } from "react-icons/fa";
import hands from '../../Images/hands.png';

class Contact extends React.Component {
    render() {
        return (
            <div id='contact_view' className='contactContainer'>
                <div className='contactImageContainer'>
                    <img src={hands} alt='hands'/>
                </div>
                <div className='contentContainer'>
                    <h1>Contact Us</h1>
                    <div className='containerDiv'>
                        <FaMailBulk size={25} className='icons'/>
                        <a  className='innerDiv' href='mailto:medical@mindlearn.in' >medical@mindlearn.in</a>
                    </div>
                    <div className='containerDiv'>
                        <FaMobile className='icons'/>
                        <a className='innerDiv' href='tel:+918197084849' >+91 819 708 4849</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;