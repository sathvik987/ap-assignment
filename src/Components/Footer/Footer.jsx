import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Header/assets/ap-photo.png';
import Playstore from '../Header/assets/ic_googleplay.png';
import Appstore from '../Header/assets/ic_appstore.png';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faFacebook, faInstagram, faWikipediaW, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>LIVE EVENTS</span>
                        <div>
                            <div className='list'>Bhagavad Gita</div>
                            <div className='list'>Sant Sarita</div>
                            <div className='list'>Vedant Samhita</div>
                            <div className='list'>Bodh Pratyusha</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>WISDOM CONTENT</span>
                        <div>
                            <div className='list'>Video Series</div>
                            <div className='list'>AP Books</div>
                            <div className='list'>AP Articles</div>
                            <div className='list'>AP Circle</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>MORE</span>
                        <div>
                            <div className='list'>About Acharya Prashant</div>
                            <div className='list'>Invite Him</div>
                            <div className='list'>Interview Him</div>
                            <div className='list'>Ghar Ghar Upanishad</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>SOCIAL MEDIA</span>
                        <div>
                            <div style={{ marginTop: "1em" }}>For English</div>
                            <div className='social-media'>
                                <FontAwesomeIcon icon={faYoutube} className='social-media-icon' />
                                <FontAwesomeIcon icon={faTwitter} className='social-media-icon' />
                                <FontAwesomeIcon icon={faFacebook} className='social-media-icon' />
                                <FontAwesomeIcon icon={faInstagram} className='social-media-icon' />
                                <FontAwesomeIcon icon={faWikipediaW} className='social-media-icon' />
                            </div>
                            <div style={{ marginTop: "1em" }}>For Hindi</div>
                            <div className='social-media'>
                                <FontAwesomeIcon icon={faYoutube} className='social-media-icon' />
                                <FontAwesomeIcon icon={faTwitter} className='social-media-icon' />
                                <FontAwesomeIcon icon={faFacebook} className='social-media-icon' />
                                <FontAwesomeIcon icon={faInstagram} className='social-media-icon' />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>DOWNLOAD APP</span>
                        <div>
                            <div style={{ marginTop: "1em" }}><img className="ap-logo" src={Logo} alt="" ></img>Acharya Prashant</div>
                            <div style={{ marginTop: "1em" }}><img className="store-logo" src={Playstore} alt="" ></img></div>
                            <div style={{ marginTop: "1em" }}><img className="store-logo" src={Appstore} alt="" ></img></div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='footer-col'>
                        <span className='heading'>CONTACT US</span>
                        <div>
                            <div className='list'><FontAwesomeIcon icon={faEnvelope} className='contact-icon' /> support@advait.org</div>
                            <div className='list'> <FontAwesomeIcon icon={faWhatsapp} className='contact-icon' /> +91 9650585100</div>
                            <div className='list'> <FontAwesomeIcon icon={faPhone} className='contact-icon' /> +91 9650585100</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='seperator'>
                        <hr style={{ width: "80%" }} />
                    </Col>
                </Row>

                <Row style={{ marginTop: "1em", fontSize: "0.9em", marginBottom: "4em" }}>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='copy-right' >
                        Copyright © 2022 PrashantAdvait Foundation
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} style={{ textAlign: 'left' }}>
                        <span className='list'>Terms & Conditions</span> | <span className='list'>Privacy Policy</span> | <span className='list'>Undertaking</span>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Footer;