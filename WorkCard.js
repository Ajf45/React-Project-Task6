import './WorkCardStyles.css';

import React from 'react';
import pro1 from '../assets/project1.png';
import { NavLink } from 'react-router-dom';

const WorkCard = () => {
    return <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={props.imgsrc} alt='image' />
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btn'>
                        <NavLink to={props.view} className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default WorkCard;
