import React from 'react';
import './faculty.css';
import data from '../../helpers/helper';
import { Modal } from 'react-bootstrap';

class Faculty extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            id: '',
            facultyName: ''
        }
    };

    render() {
        const { isOpen, facultyName, id } = this.state;
        let requiredFaculty = data.find((i) => i.id == id);
        return (
            <div id='faculty_view'>
                <div className='facultySubClass'>
                    <h2>Faculty Profile:</h2>
                    <div>Meet our experienced faculty members dedicated to your success.</div>
                </div>
                <div>
                    {
                        data && data.map((i) => (
                            <div className='dataFlex'>
                                <div className='facultyImage'><img src={i.image} alt='profile' /></div>
                                <div className='flex'>
                                    <h3 className='nameHeader'>{i.name} - {i.degree}</h3>
                                    <p className='data'>{i.details}</p>
                                    <button className='facultyButton' onClick={() => {this.setState({isOpen: true, id: 1, facultyName: i.name})}}>Read more...</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Modal show={isOpen} onHide={() => this.setState({isOpen: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title className='modalTitle'>{facultyName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <img src={requiredFaculty?.image} className='modalImage' />
                            <div className='modalData'>
                               <p className='subModalTitle'>Degree:</p> <p>{requiredFaculty?.degree}</p>
                            </div>
                            {
                                requiredFaculty?.details && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Profile Growth:</p> <p>{requiredFaculty?.details}</p>
                                </div>
                            }
                            {
                                requiredFaculty?.professionalBackGround && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Professional Background:</p>
                                    <ul>
                                        <li>
                                            <p className='subModalTitle'>Educational Experience: </p><p>{requiredFaculty?.professionalBackGround?.education}</p>
                                        </li>
                                        <li>
                                            <p className='subModalTitle'>Content Development Leadership: </p><p>{requiredFaculty?.professionalBackGround?.leaderShip}</p>
                                        </li>
                                        <li>
                                            <p className='subModalTitle'>University Teaching and Research: </p><p>{requiredFaculty?.professionalBackGround?.university}</p>
                                        </li>
                                        <li>
                                            <p className='subModalTitle'>Current Role as Junior Research Fellow: </p><p>{requiredFaculty?.professionalBackGround?.role}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.research && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Research Achievements:</p>
                                    <ul>
                                        <li>
                                            <p className='subModalTitle'>Publication: </p><p>{requiredFaculty?.research?.publication}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.teaching && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Teaching Philosophy: </p> 
                                    <ul>
                                        {
                                            requiredFaculty?.teaching?.one && <li>
                                                <p>{requiredFaculty?.teaching?.one}</p>
                                            </li>
                                        }
                                        {
                                            requiredFaculty?.teaching?.two && <li>
                                                <p>{requiredFaculty?.teaching?.two}</p>
                                            </li>
                                        }
                                        {
                                            requiredFaculty?.teaching?.three && <li>
                                                <p>{requiredFaculty?.teaching?.three}</p>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
};

export default Faculty;