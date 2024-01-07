import React from "react";
import one from '../../Images/one.png';
import two from '../../Images/two.png';
import './whyUs.css';
import BannerTwo from '../../Images/BannerTwo.png';

class WhyUs extends React.Component {
    constructor() {
        super();
        this.state = {
            readMoreOne: true,
            readMoreTwo: true
        }
    }
    render() {
        return (
            <div style={{backgroundColor:"black",paddingLeft:30,paddingRight:30,backgroundImage: `url(${BannerTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div style={{color: 'white', width:"100%",display:"flex",flexDirection:"row",flex:1}} className="">
                    <div style={{width:"70%"}}>
                    <div style={{gap: '5%', display:"flex",flexDirection:"row",borderBottomWidth:2, borderBottomColor:"white",borderBottomStyle:"solid", margin: '50px 250px 0 50px'}}>
                        <div style={{margin: '15px 0 0 0'}}>
                            <img alt='one' src={one} style={{borderRadius: '25px'}}/>
                        </div>
                        <div className="dataDisplay">
                            <p style={{fontWeight: 'bold'}}>Why Choose MindLearn?</p>
                            <div>
                                <b>Full Syllabus Coverage:</b> Our curriculum ensures complete and thorough preparation, leaving no stone unturned.
                            </div>
                            <div>
                                <b>180+ Hours of Live Classes:</b> Engage in interactive sessions led by experienced faculty for a dynamic learning experience.
                            </div>
                            <div>
                                <b>12000+ Chapter and Concept based MCQ’s:</b> Reinforce your knowledge with a vast array of questions
                                covering every aspect of the NEET syllabus.
                            </div>
                            <div id="moreOne">
                                <b>Experienced Expert Faculties: </b>Learn from seasoned mentors with over 10 years of experience in their
                                respective fields.
                                <b>Live Doubt-Solving Sessions:</b> Clear your doubts with special doubt-solving classes for personalized
                                attention.
                                <b>5+ Mock Test Series & Paper Discussions:</b> Practice and refine your skills with mock tests and detailed
                                discussions.
                                <b>Solving 10 Years of Previous Question Papers:</b> Gain insights and familiarity with the NEET exam pattern.
                                <b>Personalized Mentorship for Repeat Candidates:</b> Receive one-on-one guidance for those reappearing or
                                seeking improvement.
                            </div>
                            {
                                this.state.readMoreOne ? 
                                <p onClick={() => {document.getElementById('moreOne').style.display = 'block'; this.setState({readMoreOne: !this.state.readMoreOne})}}>Read more...</p>
                                :
                                <p onClick={() => {document.getElementById('moreOne').style.display = 'none'; this.setState({readMoreOne: !this.state.readMoreOne})}}>Read less...</p>
                            }
                        </div>
                    </div>
                    <div style={{gap: '5%',display:"flex",flexDirection:"row",  margin: '10px 250px 10px 50px'}}>
                        <div>
                            <img alt='two' src={two} style={{borderRadius: '25px'}}/>
                        </div>
                        <div className="dataDisplay">
                            <div>
                                <b>Full Syllabus Coverage:</b> Our curriculum ensures complete and thorough preparation, leaving no stone unturned.
                            </div>
                            <div>
                                <b>180+ Hours of Live Classes:</b> Engage in interactive sessions led by experienced faculty for a dynamic learning experience.
                            </div>
                            <div>
                                <b>12000+ Chapter and Concept based MCQ’s:</b> Reinforce your knowledge with a vast array of questions
                                covering every aspect of the NEET syllabus.
                            </div>
                            <div id="moreTwo">
                                <b>Experienced Expert Faculties: </b>Learn from seasoned mentors with over 10 years of experience in their
                                respective fields.
                                <b>Live Doubt-Solving Sessions: </b>Clear your doubts with special doubt-solving classes for personalized
                                attention.
                                <b>5+ Mock Test Series & Paper Discussions: </b>Practice and refine your skills with mock tests and detailed
                                discussions.
                                <b>Solving 10 Years of Previous Question Papers: </b>Gain insights and familiarity with the NEET exam pattern.
                                <b>Personalized Mentorship for Repeat Candidates: </b>Receive one-on-one guidance for those reappearing or
                                seeking improvement.
                            </div>
                            {
                                this.state.readMoreTwo ? 
                                <p onClick={() => {document.getElementById('moreTwo').style.display = 'block'; this.setState({readMoreTwo: !this.state.readMoreTwo})}}>Read more...</p>
                                :
                                <p onClick={() => {document.getElementById('moreTwo').style.display = 'none '; this.setState({readMoreTwo: !this.state.readMoreTwo})}}>Read less...</p>
                            }
                        </div>
                    </div>
                       
                 </div>

                 <div style={{width:"30%",backgroundColor:"white",borderRadius:5,marginTop:50,color:"black",marginBottom:50 }}>
                    <div>
                        <div>
                        <h3 style={{backgroundColor: '#FFC300', width: '50%', height: '30px', textAlign: 'center'}}>Course timings:</h3>
                        <div style={{display: 'flex', gap: '5%', margin: '10%'}}>
                                <div style={{backgroundColor: '#FFC300', display: 'flex', margin: 'auto', width: '50%', height: '80px', borderRadius: '100%',textAlign:"center",alignItems:"center",justifyContent:"center"}}>Batches:</div>
                                <div><b>Weekdays</b> - 6 days a week, morning and Afternoon batches (20 students per batch)</div>
                            </div>
                            <div style={{display: 'flex', gap: '5%', margin: '10%'}}>
                            <div style={{backgroundColor: '#FFC300', display: 'flex', margin: 'auto', width: '36%', height: '80px', borderRadius: '100%',textAlign:"center",alignItems:"center",justifyContent:"center"}}>{`Class\nTimings:`}</div>
                                <div><b>Weekdays</b><br />Morning 9,30 am to 1.30 pm Afternoon 2.00 pm to 6.00pm</div>
                            </div>
                        </div>
                        <div>
                            <h3 style={{backgroundColor: '#FFC300', width: '50%', height: '30px', textAlign: 'center'}}>Class Starting From:</h3>
                            <ul style={{display: 'flex', gap: '10%'}}>
                                <li>January 17th, 2024</li>
                                <li>March 4th, 2024</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{backgroundColor: '#FFC300', width: '50%', height: '30px', textAlign: 'center'}}>Test:</h3>
                            <ul className="bottomUl">
                                <li>Week Tests</li>
                                <li>Revision Tests</li>
                                <li>Mock Test</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        )
    }
};

export default WhyUs;