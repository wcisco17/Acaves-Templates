import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const uri = 'https://images.unsplash.com/photo-1519288997835-7ae47de1b588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

const Restaurants = () => {
    return (
        <>
            <section className="section pb-0 bg-gradient-red">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col className="order-lg-2 ml-lg-auto" md="6">
                            <div className="position-relative pl-md-5">
                                <img
                                    alt={uri.slice(5,9)}
                                    className="img-center img-fluid"
                                    style={{
                                        borderRadius: 10
                                    }}
                                    src={uri}
                                />
                            </div>
                        </Col>
                        <Col className="order-lg-1" lg="6">
                            <div className="d-flex px-3">
                                <div className="pl-4">
                                    <h4 className="display-3 text-white">Are you a Restaurant owner?</h4>
                                    <p className="text-white">
                                        Focus on your craft, let us worry about the customers. We work with selected restaurants in ways to monitize their platform, an end to end customer suppport that is constantly for their needs.
                                <br />
                                <br />
                                        <p>
                                            <strong>Our mission is to create long lasting partnerships.</strong>
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <Card className="shadow shadow-lg--hover mt-5">
                                <CardBody>
                                    <div className="d-flex px-3">
                                        <div>
                                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                <i className="ni ni-satisfied" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h5 className="title text-success">
                                                Awesome Support
                      </h5>
                                            <p>
                                                We suppport restaurants on our app by providing ways to scale to a wider audience, create events, and keep track of those loyal customers.
                      </p>
                                            <a
                                                className="text-success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Learn more
                      </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
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
        </>
    )
}

export default Restaurants;