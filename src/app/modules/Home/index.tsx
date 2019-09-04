import { AWS_PUB_IMAGE, Images } from 'app/assets/config';
import themes from 'app/assets/themes';
import * as React from "react";
import { useRef } from 'react';
import { Button, Col, Container, Row } from "reactstrap";
import Carousel from './Carousel';
import ContactUs from './ContactUs';
import Features from './Features';
import './index.css';
import Restaurants from './Restaurants';
import Footer from 'app/components/Footer';

interface Props {
    messages?: any;
}

/**
 * 
 * TungTied's mission is not only about food, our aim is to uplift communties by using food as the ice breaker,
  fight the gap for inequality in Asia, reduce polution, and create an open minded space
  for everyone regardless of gender affiliation or color.
 */

export const Home = ({ messages }: Props) => {
    const messagesEndRef = useRef(null)

    // const scrollToBottom = () => {
    //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    // }
    // useEffect(scrollToBottom, [messages]);
    return (
        <>
            <div className="position-relative">
                <section className="section section-lg section-hero section-shaped">
                    <div className="shape shape-style-1" style={{
                        background: `url(${AWS_PUB_IMAGE}${Images.FRONT_PAGE})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }} >
                        <div className="dark">
                            <span className="span-150" />
                            <span className="span-50" />
                            <span className="span-50" />
                            <span className="span-75" />
                            <span className="span-100" />
                            <span className="span-75" />
                            <span className="span-50" />
                            <span className="span-100" />
                            <span className="span-50" />
                            <span className="span-100" />
                        </div>
                    </div>
                    <Container className="shape-container d-flex align-items-center py-lg">
                        <Row>
                            <Col sm='7' >
                                <div className="containers">
                                    <p className="h1" >Building a community, one meal at a time</p>
                                    <div className="mt-3">
                                        <Button
                                            onClick={() => 'scrollToBottom'}
                                            style={{
                                                backgroundColor: themes.primaryPink,
                                                color: themes.white,
                                                border: 'none'
                                            }} >
                                            <span className="nav-link-inner--text ml-1">
                                                Learn More
                                        </span>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew zindex-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
            </div>
            <Carousel />
            <Features messagesEndRef={messagesEndRef} />
            <Restaurants />
            <ContactUs />
            <div style={{ marginBottom: 60 }} />
            <Footer />
        </>
    );
}

export default Home;
