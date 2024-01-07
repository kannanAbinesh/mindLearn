import React from 'react';
import './faculty.css';
import data from '../../helpers/helper';

class Faculty extends React.Component {
    render() {
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
                                <div><img src={i.image} alt='profile' /></div>
                                <div className='flex'>
                                    <h3 className='nameHeader'>{i.name}</h3>
                                    <p className='data'>{i.profileGrowth}</p>
                                    <button className='facultyButton'>Read more...</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
};

export default Faculty;