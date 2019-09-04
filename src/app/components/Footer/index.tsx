import * as React from 'react'
import { Container, Row, Col, Button, UncontrolledTooltip, Nav, NavItem, NavLink } from 'reactstrap';

interface IProps {};

const Footer: React.FC<IProps> = () => {
    return (
        <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Thank you for checking us out!
              </h3>
              <h4 className=" mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className=" text-lg-center btn-wrapper" lg="6">
              <Button
                className=" btn-neutral btn-icon-only btn-round ml-1"
                color="facebook"
                href="https://www.facebook.com/"
                id="tooltip383967593"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip383967593">
                Like us
              </UncontrolledTooltip>

              <Button
                className=" btn-neutral btn-icon-only btn-round ml-1"
                color="instagram"
                href="https://www.facebook.com/"
                id="tooltip383967594"
                size="lg"
                target="_blank"
              >
                <i className=" fa fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip383967594">
                Follow us
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                  inspiration: Creative Tim
                  <br/>
                  Created by Williams Sissoko.
              </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer;