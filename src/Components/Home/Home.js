import React from 'react';

import NavBar from '../NavBar/NavBar';
import ImageBanner from '../ImageBanner/ImageBanner';
import AboutUs from '../AboutUs/AboutUs';
import WhyUs from '../WhyUs/WhyUs';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Contact from '../ContactUs/Contact';
import Faculty from '../Faculty/Faculty';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <ImageBanner />
                <AboutUs />
                <WhyUs />
                <Faculty />
                <Register />
                <Contact />
                <Footer />
            </div>
        )
    }
};

export default Home;



// {/* --- nav bar --- */}
// <nav className='navBarContainer'>
// <div className='navBarLogo' style={{backgroundImage: `url(${homeLogo})`}}></div>
// <ul className='navBarContent'>
//     <Link to='/' className='navBarLink'>Home</Link>
//     <Link to='/aboutUs' className='navBarLink'>About us</Link>
//     <Link to='/faculty' className='navBarLink'>Faculty</Link>
//     <Link to='/contact' className='navBarLink'>Contact</Link>
// </ul>
// </nav>

// {/* --- Home page banner --- */}
// <div className='landingPageBanner' style={{backgroundImage: `url(${homePageBanner})`}}>
// <div className='bannerHeadingOne'>
//     <div>NEET Crash Course by MindLearn:</div>
//     <div>Your GateWay to Success</div>
// </div>
// <div className='bannerHeadingTwo'>
//     <div>Enroll Now and Crack</div>
// </div>
// <div className="bannerHeadingThree">
//     <div style={{fontFamily: 'sans-serif', height: '50px'}}>CRACK</div>
//     <div style={{fontFamily: 'sans-serif', height: '50px'}}>NEET IN JUST</div>
//     <div style={{fontFamily: 'auto'}}>45 DAYS!</div>
// </div>
// <div className="bannerHeadingFour">Limited Seats Available.</div>
// <div className="bannerHeadingFive">
//     <p>
//         Are you preparing for NEET and seeking a last-minute comprehensive revision course?
//         MindLearn brings you an exclusive NEET Crash Course starting on january 17<sup>th</sup>,2024, with 
//         additional batches commencing on March 4<sup>th</sup>,2024. With limited seats available, 
//         now is the time to secure the spot!
//     </p>
// </div>
// </div>

// {/* --- sub division one --- */}
// <div className='sessionTwoBanner'>
// <div className='sessionTwoContainerOne'>
//     <div className='sessionTwoHeaders'>
//         <p style={{height: '0px'}}>About Us: MindLearn</p>
//         <p>-Your One-Stop Solution</p>
//     </div>
//     <div className='sessionTwoContent'>
//         <p>At MindLearn, we understand the challenges students face in the preparing for NEET. Whether you are in 12<sup>th</sup> standard or a repeat candidate, our platform covers everything from counseling session, college shortlisting, and exam preparation to recruitmant and placement.</p>
//     </div>
// </div>
// <div className='sessionTwoImageBanner' style={{backgroundImage: `url(${placement})`}} />
// </div>

// {/* --- sub division two --- */}
// <div className='sessionThreeBanner' style={{backgroundImage: `url(${BannerTwo})`}}>
// <div>
//     <div className='innerDualFlex'>
//         <img src={whyUs} className='innerImages' />
//         <div style={{color: 'white'}}>
//             <p>Why Choose MindLearing?</p>
//             <sapn style={{fontWeight: 'bold'}}>Full Syllabus Coverage:</sapn>
//             <span> Our curriculum ensures complete and through preparation, leaving no stone untuned.</span>
//             <br />
//             <span style={{fontWeight: 'bold'}}>180+ Hours of Live Classes: </span>
//             <span>Engage in interactive sessions led by experienced faculty for a dynamic earning experience.</span>
//             <br />
//             <span style={{fontWeight: 'bold'}}>2000+ Chapter and Concept based MCQ's: </span>
//             <span>Reinforce your knowledge with a vast array of questions covering every aspect of the NEET.</span>
//         </div>
//     </div>
//     <p style={{borderBottom: '1px solid white'}}/>
//     <div className='innerDualFlex'>
//         <img src={doctorSymbol} className='innerImages'/>
//         <div style={{color: 'white', width: "80%"}}>
//             <p>MindLearn Specializes In:</p>
//             <sapn style={{fontWeight: 'bold'}}>End-to-End Admission counseling: </sapn>
//             <span>We provid comprehensive support for medical admission, including application guidance, result reporting and presonalized counseling.</span>
//             <br />
//             <span style={{fontWeight: 'bold'}}>Experienced Faculty: </span>
//             <span>Benefit from the expertise of renowed faculty members with a proven track record of metoring successful medical professional.</span>
//         </div>
//     </div>
// </div>
// <div className='secondFlex'>
    
// </div>
// </div>
// <div style={{margin: 'auto', width: '80%', padding: '10px'}}>
// <h1 style={{fontWeight: 'bold', height: '15px', textAlign: 'center'}}>Faculty Profile:</h1>
// <p style={{fontSize: '25px', textAlign: 'center'}}>Meet our experienced faculty members dedicated to your success.</p>
// <div style={{display: 'flex', marginBottom: '30px'}}>
//     <img src={doctorsImages} alt='doctorOne' style={{marginLeft: '75px', width: '30%', height: '250px'}}/>
//     <div style={{width: '50%'}}>
//         <h2 style={{color: '#FFC300'}}>DR.SPOORTHI</h2>
//         <p>
//             <b>
//                 Dr.Spoorthi B C, a recent Biochemistry ph.D. graduate, stands as a dynamic educator and 
//                 researcher with a profound commited to both teachinf adn scientific inquiry. 
//                 With five years of rich education experience, Dr.Spoorthi seamlessly integrates research and 
//                 pedagogy to ignite a passion for learning in young minds.
//             </b>
//         </p>
//         <button style={{backgroundColor: '#FFC300', width: '100px', height: '25px', border: 'none'}}>Read More...</button>
//     </div>
// </div>
// <div style={{display: 'flex'}}>
//     <img src={doctorsImages} alt='doctorOne' style={{marginLeft: '75px', width: '30%', height: '250px'}}/>
//     <div style={{width: '50%'}}>
//         <h2 style={{color: '#FFC300'}}>DR.SPOORTHI</h2>
//         <p>
//             <b>
//                 Dr.Spoorthi B C, a recent Biochemistry ph.D. graduate, stands as a dynamic educator and 
//                 researcher with a profound commited to both teachinf adn scientific inquiry. 
//                 With five years of rich education experience, Dr.Spoorthi seamlessly integrates research and 
//                 pedagogy to ignite a passion for learning in young minds.
//             </b>
//         </p>
//         <button style={{backgroundColor: '#FFC300', width: '100px', height: '25px', border: 'none'}}>Read More...</button>
//     </div>
// </div>
// </div>
// <div style={{backgroundImage: `url(${lastChamber})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
// <div style={{margin: 'auto', width: '50%', padding: '10px'}}>
//     <button style={{border: 'none', backgroundColor: '#FFC300', width: '275px', height: '45px', fontSize: '25px', marginLeft: '300px', marginTop: '10px'}}><b>Register Now!</b></button>
//     <p style={{fontSize: '35px', marginLeft: '200px', height: '30px'}}><b>Don't Miss This Opportunity!</b></p>
//     <p style={{marginLeft: '90px', fontSize: '21px', height: '10px'}}>Secure your seat toaday for the ultimate NEET crash course experience!</p>
//     <p style={{marginLeft: '350px', fontSize: '21px'}}>Register now at</p>
//     <button style={{border: 'none', backgroundColor: 'white', width: '400px', height: '35px', fontSize: '25px', marginLeft: '250px'}}>MindLearn NEET Crash Course.</button>
// </div>
// </div>

// <div style={{marginTop: '25px', marginLeft: '450px', height: '200px', display: 'flex', gap: '10%', marginBottom: '100px'}}>
// <img src={hand} style={{height: '250px', borderRadius: '25px'}} alt='comtactus' />
// <div style={{display: 'block'}}>
//     <h1>Contact Us:</h1>
//     <a href='mailto:medical@mindlearn.in' style={{textDecoration: 'none', color: 'black', fontSize: '25px'}}>medical@mindlearn.in</a>
//     <br />
//     <br />
//     <a href='tel:+918197084849' style={{textDecoration: 'none', color: 'black', fontSize: '25px'}}>+91 819 708 4849</a>
// </div>
// </div>
