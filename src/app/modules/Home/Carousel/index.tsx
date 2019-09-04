import * as React from 'react';
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import { AWS_PUB_IMAGE, Images } from 'app/assets/config';
import "../index.css";
const items = [
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: `${AWS_PUB_IMAGE}${Images.MEET}`,
    altText: "",
    caption: "",
    header: ""
  }
];

interface IProps { };

const Carousel: React.FC<IProps> = () => {
    return (
        <section className="section section-shaped">
            <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                    <Col className="mb-4 mb-lg-0" lg="5">
                        <h1 className="font-weight-light">
                          Unique Experience Just for you
                        </h1>
                        <p className="lead mt-4">
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            Choose your favorite Cuisines 
                            <div style={{ paddingTop: '13px' }} />
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            We'll list out restaurants based on your
                            favorite food interest,
                            <div style={{ paddingTop: '13px' }} />
                            <i className="icons-carousel ni ni-check-bold mr-3" />
                            Get ready to meet with people who have the same food interest as you.
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