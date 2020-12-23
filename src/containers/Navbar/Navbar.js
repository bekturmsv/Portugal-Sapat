import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Badge from '@material-ui/core/Badge';
import img from '../../img/logo.png'
import './Navbar.css';
import { productContext } from '../../contexts/ProductsContext'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const { productsCountInCart, productsCountInLiked } = useContext(productContext);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize, showButton', () => {
        console.log('sdsdsds');
    });

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="ham-menu">
                        <HamburgerMenu />
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : `fas fa-cog`} />

                    </div>
                    <div className="logo">
                        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={img} style={{ height: "70px", marginTop: "15px" }} />
                        </Link>
                    </div>
                    <div className="search-nav">
                        <Link to="/search" className="link">
                        <FontAwesomeIcon icon={faSearch} className="icon"></FontAwesomeIcon><span className="search-str">Search</span> 
                        </Link>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                                <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon> LOG IN
                    </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                                <Badge badgeContent={productsCountInCart} >

                                    <FontAwesomeIcon icon={faShoppingBag} className="icon"></FontAwesomeIcon>BASKET
              </Badge>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/wish' className='nav-links' onClick={closeMobileMenu}>
                                <Badge badgeContent={productsCountInLiked} >
                                    <FontAwesomeIcon icon={faHeart} className="icon"></FontAwesomeIcon> Liked
                                </Badge>
                    </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                                <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon> Admin
                    </Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </>

    )
}

export default Navbar
