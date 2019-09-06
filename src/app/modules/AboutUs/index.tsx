import { AWS_PUB_IMAGE, Images } from 'app/assets/config';
import Footer from 'app/components/Footer';
import * as React from 'react';
import { Fragment } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './index.css';

interface IProps { };

const Mission: React.FC<IProps> = () => {
    return (
        <Fragment>
            <div className="position-relative">
                <section className="section section-lg section-hero section-shaped">
                    <div className="shape shape-style-1" style={{
                        background: `url(${AWS_PUB_IMAGE}${Images.ABOUT_US})`,
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
                    <Container>
                        <Row>
                            <Col sm='7'>
                                <div className="wrappers-mission">
                                    <p style={{
                                        fontSize: '3.2rem',
                                    }} className="h1 text-white">
                                        <strong>
                                            Our Mission
                                    </strong>
                                    </p>
                                    <p style={{
                                        position: 'absolute',
                                        top: '50px',
                                        fontSize: '26px'
                                    }} className="lead text-white">
                                        We're commited to provide you with a seemlest experience based on your
                                        favorite food interest, connecting you with events and people near you.
                                </p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>

                <Container className='py-md' >
                    <Row>
                        <Col lg="7">
                            <h1 style={{ fontWeight: 500 }} >
                                Our Story
                        </h1>
                            <p className="lead">
                                We started in 2019, and TungTied's mission is not only about food, our aim is to uplift communties by using food as the ice breaker, fight the gap for inequality in Asia, reduce polution, and create an open minded space for everyone regardless of gender affiliation or color.
                        </p>
                        </Col>
                    </Row>
                </Container>
                <div className="divider-1">
                    <hr />
                </div>
                <section className="section section-lg">
                    <Container>
                        <Row className="justify-content-center text-center mb-lg">
                            <Col lg="8">
                                <h2 className="display-3">Check out our Amazing Team</h2>
                                <p className="lead text-muted">

                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                <div className="px-4">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                        src={require('app/assets/img/icons/common/will.png')}
                                        style={{ width: "200px" }}
                                    />
                                    <div className="pt-4 text-center">
                                        <h5 className="title">
                                            <span className="d-block mb-1">Williams Sissoko</span>
                                            <small className="h6 text-muted">Founder and CEO</small>
                                        </h5>
                                        <div className="mt-3">
                                            <Button
                                                className="btn-icon-only rounded-circle"
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-dribbble" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                <div className="px-4">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                        src={require("app/assets/img/icons/common/jade.jpg")}
                                        style={{ width: "200px" }}
                                    />
                                    <div className="pt-4 text-center">
                                        <h5 className="title">
                                            <span className="d-block mb-1">Jade Pookongchana</span>
                                            <small className="h6 text-muted">
                                               Co-COO Co-Founder
                                            </small>
                                        </h5>
                                        <div className="mt-3">
                                            <Button
                                                className="btn-icon-only rounded-circle"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-dribbble" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                <div className="px-4">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                        src={require("app/assets/img/icons/common/ann.jpg")}
                                        style={{ width: "200px" }}
                                    />
                                    <div className="pt-4 text-center">
                                        <h5 className="title">
                                            <span className="d-block mb-1">Anntonia Porsild</span>
                                            <small className="h6 text-muted">Chief Marketing Officer</small>
                                        </h5>
                                        <div className="mt-3">
                                            <Button
                                                className="btn-icon-only rounded-circle"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="info"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-dribbble" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                <div className="px-4">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                        src={require("app/assets/img/icons/common/russell.png")}
                                        style={{ width: "200px" }}
                                    />
                                    <div className="pt-4 text-center">
                                        <h5 className="title">
                                            <span className="d-block mb-1">Russell Surrel Mkahanana</span>
                                            <small className="h6 text-muted">Head Of Finance</small>
                                        </h5>
                                        <div className="mt-3">
                                            <Button
                                                className="btn-icon-only rounded-circle"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-dribbble" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="my-5 mb-lg-0" lg="3" md="6">
                                <div className="px-4">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                        src={require("app/assets/img/icons/common/liam.png")}
                                        style={{ width: "200px" }}
                                    />
                                    <div className="pt-4 text-center">
                                        <h5 className="title">
                                            <span className="d-block mb-1">Liam Esparza</span>
                                            <small className="h6 text-muted">Risk & Management</small>
                                        </h5>
                                        <div className="mt-3">
                                            <Button
                                                className="btn-icon-only rounded-circle"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-twitter" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-facebook" />
                                            </Button>
                                            <Button
                                                className="btn-icon-only rounded-circle ml-1"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-dribbble" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <div className="position-relative">
                    <section className="mb-5 section section-lg section-hero section-shaped">
                        <div className="shape shape-style-1" style={{
                            background: `url('https://images.unsplash.com/photo-1553484771-4e29a68540f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1144&q=80')`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
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
                                <Col>
                                    <p>Founders</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div> */}
            </div>

            <Footer />
        </Fragment>
    )
}

export default Mission;