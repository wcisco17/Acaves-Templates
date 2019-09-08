import chef from 'app/assets/img/icons/common/chef-cut.png';
import * as React from 'react';
import TextLoop from "react-text-loop";
import { Col, Container, Row } from 'reactstrap';

import blob from 'app/assets/img/icons/common/blob-shape.svg';
interface IProps { };

const Restaurant: React.FC<IProps> = () => {
    return (
        <div className="position-relative">
            <section className="section section-lg section-hero section-shaped">
                <div className="shape shape-style-1" style={{
                    background: `url(${chef})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
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
                <Container>
                    <Row>
                        <Col sm='7'>
                            <div className="wrappers-mission">
                                <p style={{
                                    fontSize: '3.2rem',
                                }} className="h1 text-white">
                                    <strong>
                                        Curated For Restaurants
                                    </strong>
                                </p>
                                <p style={{
                                    position: 'absolute',
                                    top: '50px',
                                    fontSize: '26px'
                                }} className="lead text-white">
                                    Let us worry about your {" "}
                                    <TextLoop interval={1000} >{" "}
                                        <span style={{ fontWeight: "bold" }} >Customers</span>
                                        <span style={{ fontWeight: "bold" }} >Marketing</span>
                                        <span style={{ fontWeight: "bold" }} >Loyalty Programs</span>
                                    </TextLoop>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
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
                <Container className="pt-lg pb-300">
                    <Row className="text-center justify-content-center">
                        <Col lg="10">

                        <img src={require('app/assets/img/icons/common/blob-shape.svg')} alt="blob" className="img-fluid"/>
                            <h2 className="display-3">What you will get</h2>
                            <p className="lead">
                                Customers are your number one priority
                             </p>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Restaurant;