import chef from 'app/assets/img/icons/common/chef-cut.png';
import themes from 'app/assets/themes';
import Footer from 'app/components/Footer';
import * as React from 'react';
import TextLoop from "react-text-loop";
import { Badge, Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import Content from './Content';
import ExampleDashboard from './ExampleDashboard';
import './index.css';
interface IProps { };

const Restaurant: React.FC<IProps> = () => {
    return (
        <>
            <div className="position-relative">
                <section className="section restaurant section-lg section-hero section-shaped">
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
                    <Container className='tainer' >
                        <Row>
                            <Col sm='7'>
                                <div className="wrappers-mission">
                                    <p style={{
                                    }} className="h1 rest-header text-white">
                                        <strong>
                                            For restaurants
                                    </strong>
                                    </p>
                                    <p style={{
                                        position: 'absolute',
                                        top: '50px',
                                    }} className="lead rest-customer text-white">
                                        Let us worry about your {" "}
                                        <TextLoop interval={1000} >{" "}
                                            <span style={{ fontWeight: "bold" }} >Customers</span>
                                            <span style={{ fontWeight: "bold" }} >Marketing</span>
                                            <span style={{ fontWeight: "bold" }} >Loyalty Programs</span>
                                            <span style={{ fontWeight: "bold" }} >Social Presence</span>
                                        </TextLoop>
                                    </p>
                                    <div className="my-5 content-button">
                                        <Button
                                            onClick={() => 'scrollToBottom()'}
                                            style={{
                                                backgroundColor: themes.primaryPink,
                                                color: themes.white,
                                                border: 'none'
                                            }} >
                                            <span className="nav-link-inner--text ml-1">
                                                Sign Up
                                        </span>
                                        </Button>
                                    </div>
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
                        <Col className='mb-5' lg="10">
                            <h2 className="display-3">What you'll get</h2>
                            <p className="lead">
                                We understand customers are your number one priority, let us take care of it for
                                you.
                             </p>
                        </Col>
                        <Col lg="12">
                            <Row className="row-grid">
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="ni ni-istanbul" />
                                            </div>
                                            <h6 className="text-success text-uppercase">
                                            scalable business
                                        </h6>
                                            <p className="description mt-3">
                                                TungTied can help your business scale and target that specific audience your looking
                                                for.
                          </p>
                                            <div>
                                                <Badge color="success" pill className="mr-1">
                                                    business
                            </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    vision
                            </Badge>
                                                <Badge color="success" pill className="mr-1">
                                                    success
                            </Badge>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="ni ni-check-bold" />
                                            </div>
                                            <h6 className="text-primary text-uppercase">
                                                Issues Solved
                          </h6>
                                            <p className="description mt-3">
                                                Any issues you may face can be solved and taken care by us.
                          </p>
                                            <div>
                                                <Badge color="primary" pill className="mr-1">
                                                    24/7 on call
                            </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    system
                            </Badge>
                                                <Badge color="primary" pill className="mr-1">
                                                    creative
                            </Badge>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="ni ni-planet" />
                                            </div>
                                            <h6 className="text-warning text-uppercase">
                                                Social Platform
                                        </h6>
                                            <p className="description mt-3">
                                                We help restaurant launch safely and give them a platform to market their business.
                                        </p>
                                            <div>
                                                <Badge color="warning" pill className="mr-1">
                                                    marketing
                                            </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    product
                                            </Badge>
                                                <Badge color="warning" pill className="mr-1">
                                                    launch
                                           </Badge>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ExampleDashboard />
                    <Content />
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant;