import './index.css';

import { team } from 'app/assets/config';
import mission from 'app/assets/img/icons/common/pic04.jpg';
import Footer from 'app/components/Footer';
import * as React from 'react';
import { Fragment } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

interface IProps { };

const Mission: React.FC<IProps> = () => {
    return (
        <Fragment>
            <div className="position-relative">
                <section className="section aboutUs section-lg section-hero section-shaped">
                    <div className="shape shape-style-1" style={{
                        background: `url(${mission})`,
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
                                    <p className="abouus-mission h1 text-white">
                                        <strong>
                                            Our Mission
                                    </strong>
                                    </p>
                                    <p style={{
                                        position: 'absolute',
                                        top: '50px',
                                    }} className="commited lead text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magni nam error corporis blanditiis similique ratione obcaecati.
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
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsa dignissimos facilis repudiandae necessitatibus porro, rerum ratione commodi. Expedita quae, nostrum nesciunt assumenda voluptate adipisci quis provident ex iure corrupti!
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
                            {
                                team.map(({
                                    id,
                                    name,
                                    people,
                                    occupationTitle,
                                }, key) => (
                                        <Col key={id || key} className="mb-5 mb-lg-0" lg="3" md="6">
                                            <div className="px-4">
                                                <img
                                                    alt="..."
                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                    src={people}
                                                    style={{ width: "200px" }}
                                                />
                                                <div className="pt-4 text-center">
                                                    <h5 className="title">
                                                        <span className="d-block mb-1">{name}</span>
                                                        <small className="h6 text-muted">{occupationTitle}</small>
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
                                    ))
                            }

                        </Row>
                    </Container>
                </section>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Mission;