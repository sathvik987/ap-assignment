import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faClose, faUserCircle, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faFacebook, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import Logo from './assets/ap-photo.png';
import Playstore from './assets/ic_googleplay.png';
import Appstore from './assets/ic_appstore.png';
import Button from 'react-bootstrap/Button';



function NavBar() {
    const [showMenu, toggleShowMenu] = useState(false);
    const [showMobileMenu, toggleShowMobileMenu] = useState(false);

    const handleShowMenu = () => {
        if (window.innerWidth >= 1060) {
            toggleShowMenu(true);
            toggleShowMobileMenu(false);
        } else {
            toggleShowMobileMenu(true);
            toggleShowMenu(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (showMenu || showMobileMenu) {
                handleShowMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMenu, showMobileMenu]);

    return (
        <Fragment>
            <Nav className='nav-bar'>
                <Nav.Item>
                    <Nav.Link>
                        <img className="mr-2 logo" src={Logo} alt="" /></Nav.Link>
                </Nav.Item>

                <Nav className='nav-left'>
                    <Nav.Item>
                        <Nav.Link>Home</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Live Sessions" >
                        <NavDropdown.Item>Bhagavad Gita</NavDropdown.Item>
                        <NavDropdown.Item>Sant Sarita</NavDropdown.Item>
                        <NavDropdown.Item>Vedant Samhita</NavDropdown.Item>
                        <NavDropdown.Item>Bodh Pratyusha</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link >Video Series</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>AP Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>AP Articles</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Invite" >
                        <NavDropdown.Item>For a talk</NavDropdown.Item>
                        <NavDropdown.Item>For an interview</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link>In Media</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Careers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Donate</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav className='nav-right'>
                    <Nav.Item className='donate'>
                        <Nav.Link>  <Button variant="outline-light" className='donate-btn' size="sm">Donate</Button>{' '} </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <svg
                            className='language'
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="21"
                            viewBox="0 0 28 21"
                            fill="white"
                        >
                            <path d="M24.193 0c1.27 0 2.22.301 2.855.904.59.56.905 1.372.947 2.437l.005.25v13.817c0 1.19-.317 2.085-.952 2.688-.589.56-1.452.86-2.588.9l-.267.004H3.807c-1.252 0-2.2-.301-2.843-.904-.597-.56-.916-1.372-.96-2.437L0 17.409V3.591C0 2.402.321 1.507.964.904c.597-.56 1.457-.86 2.58-.9L3.806 0h20.386Zm.435 1.5H3.346c-.598 0-1.055.153-1.371.458-.282.271-.438.66-.47 1.166l-.005.195v14.375c0 .593.158 1.043.475 1.348.281.271.673.422 1.177.452l.194.006h21.282c.597 0 1.059-.153 1.384-.458.29-.271.45-.657.482-1.156l.006-.192V3.319c0-.602-.163-1.056-.488-1.361-.325-.305-.787-.458-1.384-.458ZM11.905 5.559v1.6H7.511v2.533h4.128v1.498H7.511v2.65h4.394v1.599h-6.32v-9.88h6.32Zm3.236 0 4.35 6.572h.065V5.559h1.812v9.88h-1.61L15.391 8.83h-.057v6.609h-1.812v-9.88h1.618Z"></path>
                        </svg>
                        <NavDropdown title="" >
                            <NavDropdown.Item>हिन्दी</NavDropdown.Item>
                            <NavDropdown.Item>English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>


                    <Nav.Item className='phone-icon'>
                        <Nav.Link><FontAwesomeIcon icon={faPhone} className='icon' style={{ marginTop: "0.2em" }} /></Nav.Link>
                    </Nav.Item>

                    <Nav.Item onClick={handleShowMenu}>
                        <Nav.Link><FontAwesomeIcon icon={faBars} className='icon' style={{ marginTop: "0.2em" }} /> <span className='menu-text'>Menu</span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Nav>

            {/* Menu */}
            {
                showMenu ?
                    <Fragment>
                        <div className='menu-background' onClick={() => { toggleShowMenu(false); toggleShowMobileMenu(false); }}>
                        </div>
                        <div className='menu'>
                            <div className='menu-close-btn' onClick={() => { toggleShowMenu(false); toggleShowMobileMenu(false); }}>
                                <FontAwesomeIcon icon={faClose} className='icon' />
                            </div>
                            <div className='login-div'>
                                <FontAwesomeIcon icon={faUserCircle} className='login-icon' /> <span className='bold' style={{ marginLeft: "1em" }}>Login</span>
                            </div>
                            <hr />
                            <ul>
                                <li>
                                    Bhagavad Gita
                                </li>
                                <li>
                                    Sant Sarita
                                </li>
                                <li>
                                    Vedant Samhita
                                </li>
                                <li>
                                    Bodh Pratyusha
                                </li>
                                <li>
                                    AP Books
                                </li>
                                <li>
                                    AP Circle
                                </li>
                                <li>
                                    Invite For Talk
                                </li>
                                <li>
                                    Invite For an Interview
                                </li>
                                <li>
                                    Media and Public Interaction
                                </li>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Donate
                                </li>
                            </ul>

                            <hr />

                            <div className='bold small'>
                                MORE
                            </div>

                            <ul>
                                <li>
                                    PrashantAdvait Foundation
                                </li>
                                <li>
                                    Ghar Ghar Upanishad
                                </li>
                                <li>
                                    About Acharya Prashant
                                </li>
                            </ul>

                            <hr />
                            <div className='bold small'>
                                EXPLORE CATEGORIES
                            </div>

                            <ul>
                                <li>Vedant - Upanishads</li>
                                <li>Vedant - Bhagavad Gitas</li>
                                <li>Other Scriptures</li>
                                <li>Saints and Masters</li>
                                <li>Other streams</li>
                                <li>Life Questions</li>
                                <li>Technical Support</li>
                            </ul>
                        </div>
                    </Fragment>
                    : ""

            }




            {/* Mobile Menu */}
            {
                showMobileMenu ?
                    <div className='mobile-menu'>
                        <div className='mobile-menu-login-div'>
                            <Button variant="outline-light" className='donate-btn' >Login</Button>
                            <div className='mobile-menu-close-btn' onClick={() => { toggleShowMenu(false); toggleShowMobileMenu(false); }}>
                                <FontAwesomeIcon icon={faClose} className='icon' />
                            </div>
                        </div>
                        <div className='mobile-menu-div'>
                            <ul className='mobile-menu-contents'>
                                <li>Live Sessions</li>
                                <li>AP Books</li>
                                <li>AP Articles</li>
                                <li>Video Series</li>
                                <li>AP Circle</li>
                                <li>Invite For Talk</li>
                                <li>Invite For an Interview</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                            </ul>
                            <Button variant="light" style={{ color: "rgb(234, 88, 12)" }}><FontAwesomeIcon icon={faPrayingHands} /> Donate</Button>{' '}
                            <hr />
                            <ul>
                                <li>About Acharya Prashant</li>
                                <li>PrashantAdvait Foundation</li>
                                <li>In Media</li>
                            </ul>
                            <div>
                                <img src={Playstore} className='store' alt="" />  <img src={Appstore} className='store' alt="" />
                            </div>

                            <ul style={{ marginTop: "1em" }} >
                                <li>For English</li>
                                <li className='social-media-icons'><FontAwesomeIcon icon={faYoutube} /> <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faWikipediaW} /></li>
                                <li>For Hindi</li>
                                <li className='social-media-icons'><FontAwesomeIcon icon={faYoutube} /> <FontAwesomeIcon icon={faTwitter} />
                                    <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} /></li>
                            </ul>
                        </div>
                    </div> : ""

            }


        </Fragment>
    );
}

export default NavBar;