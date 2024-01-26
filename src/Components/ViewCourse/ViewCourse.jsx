import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./viewcourse.css";
import { useEffect, useState } from 'react';

function ViewCourse(props) {

    const [course, setCourse] = useState({});
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetchCourse();
    }, []);

    useEffect(() => {
        fetchFaqs();
    }, [props.language]);

    const fetchCourse = async () => {
        try {
            let res = await (await fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")).json();
            setCourse(res);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFaqs = async () => {
        try {
            let res = await (await fetch(`https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=${props.language}`)).json();
            setFaqs(res);
        } catch (error) {
            console.log(error);
        }
    };

    const convertDecimalToTime = (decimalValue) => {
        if (!decimalValue) {
            return null;
        }
        const hours = Math.floor(decimalValue);
        const minutes = Math.round((decimalValue - hours) * 60);

        let result;
        if (hours) {
            result = `${hours} hours ${minutes} minutes`;
        } else {
            result = `${minutes} minutes`;
        }

        return result;
    };

    return (
        <div className="view-course" style={{ margin: "1em 2em" }}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                    <span className='go-to-home'><span className='home-btn'>Home</span> &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                    <span className='go-to-home-mobile'><span className='home-btn-arrow'><FontAwesomeIcon icon={faArrowLeft} /></span></span>
                    &nbsp; &nbsp;
                    <span>{course?.details?.title}</span>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='course-title'>
                    {course?.details?.title}
                </Col>

                <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5} style={{ marginTop: "1em" }}>
                    {
                        course?.details?.thumbnail
                            ? <img className='course-image' src={`${course.details.thumbnail.domain}/${course.details.thumbnail.basePath}/10/image.jpg`} alt="" /> : ""
                    }
                </Col>


                <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7} style={{ marginTop: "1em" }}>
                    <p className='subtitle'>
                        {
                            course?.details?.subtitle
                        }
                    </p>
                    <p>
                        {
                            course?.details?.description
                        }
                    </p>
                </Col>

                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='share-icons'>
                    <p style={{ fontSize: '0.9em', marginBottom: "0.5em" }}>Share this series:</p>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} className='share' /> <FontAwesomeIcon icon={faTwitter} className='share' />
                        <FontAwesomeIcon icon={faWhatsapp} className='share' /> <FontAwesomeIcon icon={faLinkedin} className='share' />
                    </div>
                </Col>

                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ marginTop: "2em" }} className='videos-title'>
                    Video Series ({course?.courses ? course.courses.length : 0})
                    <hr />
                </Col>

                {
                    course?.courses ? course.courses.map((item, index) => {
                        return <Col key={item.id} xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='video-details'>
                            <div>
                                <span className='svelte'>भाग {index + 1}</span>
                            </div>
                            <div className='video-title'>{item.title}</div>
                            <div className='video-info'>
                                {item.subtitle}
                            </div>
                            <div className='video-info'>
                                {convertDecimalToTime(item.courseHours)}
                            </div>
                            <div className='video-info'>
                                Contribution: ₹ {item.amount} <span style={{ textDecoration: "line-through" }}>{item.originalAmount}</span>
                            </div>
                            <div className='video-info'>
                                <span className='video-language'>{item.language}</span>
                            </div>
                            <div className='video-info add-to-cart'>
                                <span className='btns'>ADD TO CART</span> <span className='btn-seperator'>|</span> <span className='btns'>ENROL</span>
                            </div>
                        </Col>;
                    }) : ""
                }
            </Row>


            <div className='faqs-parent'>
                <Row className='faqs-row'>
                    <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                        <div style={{ fontSize: "1.2em", fontWeight: 700 }}>
                            FAQs
                        </div>
                        <div style={{ fontSize: "1em", fontWeight: 500 }}>
                            Can’t find the answer you’re looking for? Reach out to our <span className='support'>support</span> team.
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={9} xl={9} xxl={9} className='faqs'>


                        <Accordion defaultActiveKey="0">

                            {
                                faqs?.length ? faqs.map((item, index) => {
                                    return <Accordion.Item key={index} eventKey={index}>
                                        <Accordion.Header>{item.question}</Accordion.Header>
                                        <Accordion.Body>
                                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                        </Accordion.Body>
                                    </Accordion.Item>;
                                }) : ""
                            }

                        </Accordion>
                    </Col>
                </Row>
            </div>
        </div >
    );
}

export default ViewCourse;