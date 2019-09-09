import * as React from 'react'
import { Container, Row, Col, Badge, UncontrolledCarousel } from 'reactstrap';
import dash from 'app/assets/img/icons/common/dashboard.png';
import social from 'app/assets/img/icons/common/social.png';
import metrics from 'app/assets/img/icons/common/metrics.png';

const ExampleDashboard = () => {
    return (
        <section className="section section-lg">
            <Container className="py-md">
            <Row className="justify-content-between align-items-center">
                    <Col className="mb-4 mb-lg-0" lg="5">
                        <div className="pr-md-5">
                            <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                <i className="ni ni-settings-gear-65" />
                            </div>
                            <h3>TungTied Solutions</h3>
                            <p>
                                The dashboard comes with metrics, stats, to keep track of your bookings.
                                Get ready to create events, send out special invtations.
                </p>
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-settings-gear-65" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Stats on your customers
                        </h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-check-bold" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Expert Solutions</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="success"
                                            >
                                                <i className="ni ni-active-40" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Create events to engage your audience
                        </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className="my-5 mb-lg-auto" lg="6">
                        <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                            <UncontrolledCarousel items={[
                                {
                                    src: dash,
                                    altText: "",
                                    caption: "",
                                    header: ""
                                },
                                {
                                    src: social,
                                    altText: "",
                                    caption: "",
                                    header: ""
                                },
                                {
                                    src: metrics,
                                    altText: "",
                                    caption: "",
                                    header: ""
                                },
                            ]} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default ExampleDashboard;
