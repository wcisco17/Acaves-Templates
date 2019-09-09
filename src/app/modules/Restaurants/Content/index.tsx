import * as React from 'react';
import { Container, Card, Row, Col, FormGroup, Input, Button } from 'reactstrap';

const uri = 'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

const Content: React.FC = () => {
  return (
    <React.Fragment>
         <div className="position-relative restaurant-content">
                        <section className="section section-lg section-hero section-shaped">
                            <div className="shape shape-style-1" style={{
                                background: `url(${uri})`,
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
                                <Card className="bg-gradient-red shadow-lg border-0">
                                    <div className="p-5">
                                        <Row className="align-items-center">
                                            <Col lg="8">
                                                <h3 className="text-white">
                                                    Interested?
                                            </h3>
                                                <p className="lead text-white mt-3">
                                                    Enter your email to be a part of the demo launch, we'll work with you personally to create your social precense with TungTied Solutions.
                                            </p>
                                            </Col>
                                            <Col className="ml-lg-auto" lg="4">
                                                <FormGroup>
                                                    <Input
                                                        className="form-control-alternative"
                                                        placeholder="Email.."
                                                        type="text"
                                                    />
                                                </FormGroup>
                                                <Button
                                                    block
                                                    className="btn-white"
                                                    color="default"
                                                    onClick={() => ''}
                                                    size="lg"
                                                >
                                                    Launch
                                            </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Container>
                        </section>
                    </div>
    </React.Fragment>
  );
}

export default Content;
