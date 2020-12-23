import React from 'react'
import './Footer.css';
import  { Link }  from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure of amazing style
                    </p>
                    <p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                   

                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/home'>Home</Link>
                            <Link to='/home'>Women</Link>
                            <Link to='/home'>Men</Link>
                            <Link to='/home'>Kids</Link>
                            <Link to='/home'>Shoes</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/home'>Email</Link>
                            <Link to='/home'>Investors</Link>
                            <Link to='/home'>Phone</Link>
                            <Link to='/home'>Products</Link>
                        </div>
                    </div>

                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/review' className='social-logo'>
                                Leave comment
                            </Link>
                        </div>
                        <small className='website-rights'>Follow us on</small>
                        <div className="social-icons">
                            <Link className="social-icon-link facebook"
                                to='/home'
                                target='_blank'
                                aria-label='Facebook'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            <Link
                                className='social-icon-link instagram'
                                to='/home'
                                target='_blank'
                                aria-label='Instagram'>
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link
                                className='social-icon-link twitter'
                                to='/home'
                                target='_blank'
                                aria-label='Twitter'>
                                <i className='fab fa-twitter'></i>
                            </Link>
                            <Link
                                className='social-icon-link pinterest'
                                to='/home'
                                target='_blank'
                                aria-label='Pinterest'>
                                <i className='fab fa-pinterest'></i>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer