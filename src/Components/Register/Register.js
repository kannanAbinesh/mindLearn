import React from 'react';
import './register.css';
import BannerTwo from '../../Images/BannerTwo.png';
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'; /* @emailjs */

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            userName: '',
            phoneNumber: '',
            emailId: '',
            isError: false,
            publicKey: 'AQtrnsSaf7RNbAx3N',
            templateId: 'template_15kx2rk',
            serviceId: 'service_0lqclb5',
            errorMessage: ''
        };
    };

    handleSubmit = () => {
        const { userName, phoneNumber, emailId, publicKey, templateId, serviceId } = this.state;
        let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        console.log(regEx.test(emailId))
        if(!userName || !phoneNumber || !emailId) {
            this.setState({isError: true, errorMessage: 'please fill all the required fields', userName: '', emailId: '', phoneNumber: ''});
            return '';
        } else if (userName.length >= 16) {
            this.setState({isError: true, errorMessage: 'Username must be less than 16 characters', userName: '', emailId: '', phoneNumber: ''});
            return '';
        } else if(!regEx.test(emailId)) {
            this.setState({isError: true, errorMessage: 'Please enter valid mailId', userName: '', emailId: '', phoneNumber: ''});
            return '';
        } else if (!Number(phoneNumber) || phoneNumber.length == 10) {
            this.setState({isError: true, errorMessage: 'Please enter valid mobile number', userName: '', emailId: '', phoneNumber: ''});
            return '';
        }

        let templateParams = {
            from_name: userName,
            from_email: emailId,
            to_name: 'MindLearn',
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then(() => {
            alert('mail has been recieved, will reach you soon')
        })
        .catch(() => {
            console.log('Something went wrong, Try again later');
        });
        
        this.setState({isOpen: false})
    }

    render() {
        const { userName, phoneNumber, emailId, isError, errorMessage } = this.state;
        return (
            <div  style={{ backgroundImage: `url(${BannerTwo})`}} className='RegisterMainContainer' >
                <button className='buttonContainer' onClick={() => this.setState({isOpen: true})}>Register Now</button>
                <h2 className='registerHeader'>Don't Miss This Opportunity!</h2>
                <p className='registerHeader'>Secure your seat toaday for the ultimate NEET crash course experience!<br />Register now at</p>
                <button className='buttonContainerTwo'>MindLearn NEET Crash Course.</button>
                <Modal show={this.state.isOpen} onHide={() => this.setState({isOpen: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {isError && <p className='errorMessage'>{errorMessage}</p>}
                            <FloatingLabel controlId="floatingName" label="Enter your name" className="mb-3">
                                <Form.Control type="text" value={userName} placeholder="Enter your name." onChange={e => this.setState({userName: e.target.value})}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" value={emailId} placeholder="name@example.com" onChange={e => this.setState({emailId: e.target.value})}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingName" label="Enter your phone number." className="mb-3">
                                <Form.Control type="text" value={phoneNumber} placeholder="Enter your phone number." onChange={e => this.setState({phoneNumber: e.target.value})}/>
                            </FloatingLabel>
                            <Button variant='success' onClick={() => this.handleSubmit()}>Submit</Button> 
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
};

export default Register;