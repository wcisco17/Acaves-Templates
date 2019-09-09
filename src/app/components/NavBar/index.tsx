import themes from 'app/assets/themes';
import Headroom from "headroom.js";
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, Row, UncontrolledCollapse, UncontrolledTooltip } from "reactstrap";
import logo from 'app/assets/img/icons/common/tung.png';

interface IPropsNavigation { };

class Navigation extends React.Component<IPropsNavigation> {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    render() {
        return (
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                            <img src={logo} alt={'logo'} />
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <UncontrolledCollapse navbar toggler="#navbar_global">
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <img src={logo} alt={'logos'} />
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavbarBrand>
                                    <Link to='/' >
                                        <span
                                            className="nav-link-inner--text link-navbar">Home</span>
                                    </Link>
                                </NavbarBrand>
                                <div className='activate' />
                                <NavbarBrand>
                                    <Link to='/mission' >
                                        <span
                                            className="nav-link-inner--text link-navbar">Who we are</span>
                                    </Link>
                                </NavbarBrand>
                            </Nav>

                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem className="d-none mr-4 d-lg-block ml-lg-4">
                                    <Link className='mr-4' to='/restaurant' >
                                        <Button
                                            onClick={() => ''}
                                            style={{
                                                backgroundColor: themes.primaryPink,
                                                color: themes.white,
                                                border: 'none'
                                            }} >
                                            <span className="nav-link-inner--text ml-1">
                                                For Restaurants
                                        </span>
                                        </Button>
                                    </Link>
                                    <Button
                                        style={{
                                            color: 'black',
                                            border: 'none'
                                        }}
                                    >
                                        <span className="nav-link-inner--text ml-1">
                                            Sign In
                    </span>
                                    </Button>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://www.facebook.com/"
                                        id="tooltip333589074"
                                        target="_blank"
                                    >
                                        <i className="fa fa-facebook-square" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Facebook
                    </span>
                                    </NavLink>
                                    <UncontrolledTooltip
                                        style={{ color: 'black', backgroundColor: themes.white }}
                                        delay={0} target="tooltip333589074">
                                        Like us on Facebook
                  </UncontrolledTooltip>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://www.instagram.com/"
                                        id="tooltip356693867"
                                        target="_blank"
                                    >
                                        <i className="fa fa-instagram" />
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                            Instagram
                    </span>
                                    </NavLink>
                                    <UncontrolledTooltip
                                        style={{ color: 'black', backgroundColor: themes.white }}
                                        delay={0} target="tooltip356693867">
                                        Follow us on Instagram
                  </UncontrolledTooltip>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default Navigation;