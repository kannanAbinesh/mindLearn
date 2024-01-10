import React from 'react';
import './faculty.css';
import data from '../../helpers/helper';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import Slider from 'react-slick';

class Faculty extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            id: '',
            facultyName: '',
            autoplay: false
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({autoplay: true})
        }, 5000)
    }

    render() {
        const { isOpen, facultyName, id } = this.state;
        let requiredFaculty = data.find((i) => i.id == id);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 850,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div id='faculty_view'>
                <div className='facultySubClass'>
                    <h2>Faculty Profile:</h2>
                    <div>Meet our experienced faculty members dedicated to your success.</div>
                </div>
                <div className='systemView'>
                    <Row>
                        {
                            data && data.map((i) => (
                                <Col md={4}>
                                    <Card style={{ width: '100%'}} className='facaltyCard'>
                                        <Card.Img variant='top' src={i.image}/>
                                        <Card.Body>
                                            <Card.Title style={{height: '3rem'}}>{i.name} - {i.degree}</Card.Title>
                                            <Card.Text className='textContainers'>{i.details}</Card.Text>
                                            <Button variant='warning' onClick={() => {this.setState({isOpen: true, id: i.id, facultyName: i.name})}}>Read More...</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <div className='displayCarousel'>
                    <Slider {...settings} style={{margin: '50px'}}>
                        {
                            data?.map((i) => (
                                <Col>
                                    <Card style={{ width: '100%'}} className='facaltyCard'>
                                        <Card.Img variant='top' src={i.image}/>
                                        <Card.Body>
                                            <Card.Title style={{height: '3rem'}}>{i.name} - {i.degree}</Card.Title>
                                            <Card.Text className='textContainers'>{i.details}</Card.Text>
                                            <Button variant='warning' onClick={() => {this.setState({isOpen: true, id: i.id, facultyName: i.name})}}>Read More...</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Slider>
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
                                    <p>{requiredFaculty?.details}</p>
                                </div>
                            }
                            {
                                requiredFaculty?.academicBackground && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Academic Background:</p> 
                                    <ul>
                                        <li>
                                            <p>{requiredFaculty?.academicBackground?.one}</p>
                                        </li>
                                        <li>
                                            <p>{requiredFaculty?.academicBackground?.two}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.professionalExperience && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Professional Experience:</p> 
                                    <ul>
                                        <li>
                                            <p>{requiredFaculty?.professionalExperience?.one}</p>
                                        </li>
                                        <li>
                                            <p>{requiredFaculty?.professionalExperience?.two}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.certifications && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Certifications:</p> 
                                    <ul>
                                        <li>
                                            <p>{requiredFaculty?.certifications?.one}</p>
                                        </li>
                                        <li>
                                            <p>{requiredFaculty?.certifications?.two}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.professionaleGrowth && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Professional Growth: </p>
                                    <ul>
                                        <li>
                                            {requiredFaculty?.professionaleGrowth?.one}
                                        </li>
                                    </ul>
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
                                requiredFaculty?.teachingExpertise && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Teaching Expertise: </p>
                                    <ul>
                                        <li>
                                            {requiredFaculty?.teachingExpertise?.one}
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.professionalRoles && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Professional Roles:</p>
                                    <ul>
                                        <li>
                                            {requiredFaculty?.professionalRoles?.one}
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
                                requiredFaculty?.beyondEducation && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Beyond Education:</p>
                                    <ul>
                                        <li>
                                            {requiredFaculty?.beyondEducation?.one}
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.specialNote && 
                                <div className='modalData'>
                                    <p className='subModalTitle'>Crack NEET with MindLearn:</p>
                                    <ul>
                                        <li>
                                            {requiredFaculty?.specialNote?.one}
                                        </li>
                                        <li>
                                            {requiredFaculty?.specialNote?.two}
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                requiredFaculty?.note && 
                                <div className='modalData'>
                                    <hr />
                                    <p>{requiredFaculty?.note}</p>
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