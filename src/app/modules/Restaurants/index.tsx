import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import chef from 'app/assets/img/icons/common/chef-cut.png'
import TextLoop from "react-text-loop";
import themes from 'app/assets/themes';

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
            <Container className="shape-container d-flex align-items-center py-lg">
                <Row>
                    <Col row='7'>
                        <div className="content">
                            <h3 style={{
                                color: themes.white,
                                fontWeight: 500
                            }} >Curated For Restaurants</h3>
                            <h1 className='lead' style={{
                                color: 'white',
                                fontSize: '2rem'
                            }} >
                                Let us worry about your..
                                <TextLoop>{" "}
                                        <span>Customers</span>
                                        <span>Marketing</span>
                                        <span>Loyalty Programs</span>
                                </TextLoop>
                            </h1>
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
    </div>
    )
}

export default Restaurant;