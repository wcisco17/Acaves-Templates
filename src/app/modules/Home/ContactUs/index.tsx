import React from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const ContactUs = () => {
    const [nameFocused, setNameFocused] = React.useState(false);
    const [emailFocused, setEmailFocused] = React.useState(false);
  console.log(
    nameFocused,
    emailFocused
  )
    return (
        <Container>
            <Row className="justify-content-center mt-5 text-center mb-3">
                <Col lg="8">
                    <h2 className="display-3">Contact Us</h2>
                    <p className="lead text-muted">
                        Be a part of a platform that cares. All goodies promise.
                  </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <FormGroup
                        className='mt-3'
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => setNameFocused(true)}
                            onBlur={e => setNameFocused(false)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => setEmailFocused(true)}
                            onBlur={e => setEmailFocused(false)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
        </Container>
    )
}

export default ContactUs;