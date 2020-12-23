import React from 'react';
import '../../App.css';
import './HomeBody.css';
import video from '../../Video/video-2.mp4';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const HomeBody = () => {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted className="video"/>

            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' className='btn--outline' className='btn--large'>GET STARTED</Button>
            </div>
            <h5>Be yourself, feel comfort</h5>
            <div className="hero-btns">
                <Link to='/list' style={{textDecoration: 'none', fontSize:'1.3em'}}>
                    <Button className='btns' 
                    className='btn--large'
                    >VIEW</Button>
                </Link>
            </div>
        </div>
    )
}

export default HomeBody;
