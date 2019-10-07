import '../index.css';

import pic04 from 'app/assets/img/icons/common/pic04.jpg';
import pic01 from 'app/assets/img/icons/common/pic1.jpg';
import * as React from 'react';
import { Col, Container, Row, UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: `${pic01}`,
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: `${pic04}`,
        altText: "",
        caption: "",
        header: ""
    }
];

const Carousel = () => {
    return (
        <section className="section section-shaped">
            <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                    <Col className="mb-4 mb-lg-0" lg="5">
                        <h1 className="font-weight-light">
                            Great Views
                        </h1>
                        <p className="lead mt-4">
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <div style={{ paddingTop: '13px' }} />
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            Amet consectetur adipisicing elit. Iusto, dolorum!
                           favorite food interest,
                            <div style={{ paddingTop: '13px' }} />
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            Lorem consectetur adipisicing elit. Iusto, dolorum.
                </p>
                    </Col>
                    <Col className="mb-lg-auto" lg="6">
                        <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                            <UncontrolledCarousel items={items} />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
            </div>
        </section>
    )
}

export default Carousel;