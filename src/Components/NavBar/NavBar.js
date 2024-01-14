import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

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
            <div >
                <header>
                    <nav className="navContainer">
                        <div className="logoContainer">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                        <div>
                            {
                                !isOpen ? 
                                <IoMdMenu size={75} className="menuIcon" onClick={() => {this.setState({isOpen: !this.state.isOpen}); document.getElementsByClassName('navContent')[0].style.display = 'block'}} />
                                :
                                <MdOutlineCancel size={75} className="menuIcon" onClick={() =>  {this.setState({isOpen: !this.state.isOpen}); document.getElementsByClassName('navContent')[0].style.display = 'none'}} />
                            }
                        </div>
                        <ul className="navContent">
                            <p className="link">Home</p>
                            <p className="link">About us</p>
                            <p className="link">Faculty</p>
                            <p className="link">Contact</p>
                        </ul>
                    </nav>
                </header>
                {/* <nav className="navBar">
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
                            <IoMdMenu 
                            className="menuIcon" 
                            onClick={() => this.setState({isOpen: true})}
                            />
                            : 
                            <MdOutlineCancel 
                            className="menuIcon"
                            onClick={() => this.setState({isOpen: false})}
                            />
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
                }    */}
            </div>
        )
    }
};

export default NavBar;