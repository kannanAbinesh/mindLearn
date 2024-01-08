import React from "react";
import { FaCube } from "react-icons/fa";

/* images */
import logo from '../../Images/logo.png';

/* style */
import './NavBar.css';


class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    };

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <nav className="navBar">
                    <div className="navDiv">
                        <div className="logoContainer">
                            <img alt='logo' src={logo} className="logo"/>
                        </div>
                        <ul className="navContent">
                            <div className="link" onClick={() => window.location.href = '#imageBanner_view'}>Home</div>
                            <div className="link" onClick={() => window.location.href = '#aboutUs_view'}>About us</div>
                            <div className="link" onClick={() => window.location.href = '#faculty_view'}>Faculty</div>
                            <div className="link" onClick={() => window.location.href = '#contact_view'}>Contact</div>
                        </ul>
                        {
                            !isOpen 
                            ? 
                            <FaCube 
                            className="menuIcon" 
                            onClick={() => this.setState({isOpen: true})}
                            />
                            : 
                            <div 
                            className="menuIcon" 
                            style={{fontSize: '35px', fontWeight: 'bold'}}
                            onClick={() => this.setState({isOpen: false})}
                            >X</div>
                        }
                    </div>
                </nav>
                {
                    isOpen 
                    ?
                    <div className="mobileMenu">
                        <div className="link">Home</div>
                        <div className="link" onClick={() => window.location.href = '#aboutUs_view'}>About us</div>
                        <div className="link" onClick={() => window.location.href = '#faculty_view'}>Faculty</div>
                        <div className="link" onClick={() => window.location.href = '#contact_view'}>Contact</div>
                    </div>
                    :
                    null
                }   
            </div>
        )
    }
};

export default NavBar;