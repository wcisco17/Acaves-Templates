import './index.css';

import header from 'app/assets/img/icons/common/header.png';
import themes from 'app/assets/themes';
import Footer from 'app/components/Footer';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

import Carousel from './Carousel';
import ContactUs from './ContactUs';
import Features from './Features';
import Owner from './Owner';

interface Props {
    messages?: any;
};

export const Home: React.FC<Props> = ({ messages }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => scrollToBottom, [messages]);

    return (
        <>
            <div className="home-container">
                <div className="position-relative">
                    <section className="section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1" style={{
                            background: `url(${header})`,
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
                                <Col sm='7'>
                                    <div className="containers">
                                        <p className="h1" >Architecture done right, with care</p>
                                        <div className="mt-3">
                                            <Button
                                                onClick={() => scrollToBottom()}
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
                <Owner />
                <ContactUs />
                <div style={{ marginBottom: 60 }} />
                <Footer />
            </div>
        </>
    );
}

export default Home;
