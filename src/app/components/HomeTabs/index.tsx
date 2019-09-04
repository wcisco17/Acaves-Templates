import { AWS_PUB_IMAGE, Images } from 'app/assets/config';
import classnames from "classnames";
import React from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";


const HomeTabs = () => {
    const [tabs, setTabs] = React.useState<number>(1);

    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        setTabs(index);
    };

    return (
        <>
            <div className="nav-wrapper">
                <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            aria-selected={tabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: tabs === 1
                            })}
                            onClick={e => toggleNavs(e, "tabs", 1)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-active-40 mr-2" />
                            Pick your favorite cuisines
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            aria-selected={tabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: tabs === 2
                            })}
                            onClick={e => toggleNavs(e, "tabs", 2)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-bell-55 mr-2" />
                            Choose your  favorite Restaurants
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            aria-selected={tabs === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                                active: tabs === 3
                            })}
                            onClick={e => toggleNavs(e, "tabs", 3)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-calendar-grid-58 mr-2" />
                            Schedule a meet up
            </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <Card className="shadow">
                <CardBody >
                    <TabContent activeTab={"tabs" + tabs}>

                        <TabPane tabId="tabs1">
                            <div className="d-flex mx-5 ">
                                <Col className="order-md-1" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        style={{
                                            width: '50%',
                                        }}
                                        src={`${AWS_PUB_IMAGE}${Images.IPHONE}`}
                                    />
                                </Col>
                                <Col className="d-flex align-items-center order-md-3" md="6">
                                    <div className="pr-md-5">
                                        <p className="h5 mb-3">Choose your favorite type of cuisines</p>
                                        <p className='mission' >
                                            TungTied's mission is not only about food, our aim is to uplift communties by using food as the ice breaker,
                                             fight the gap for inequality in Asia, reduce polution, and create an open minded space
                                            for everyone regardless of gender affiliation or color.
                                </p>
                                    </div>
                                </Col>
                            </div>
                        </TabPane>


                        <TabPane tabId="tabs2">
                            <div className="d-flex mx-5 ">
                                <Col className="order-md-1" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        style={{
                                            width: '50%',
                                        }}
                                        src={`${AWS_PUB_IMAGE}${Images.IPHONE}`}
                                    />
                                </Col>
                                <Col className="d-flex align-items-center order-md-3" md="6">
                                    <div className="pr-md-5">
                                        <p className="h5 mb-3">Pick your favorite Restaurants</p>
                                        <p className='mission' >
                                            TungTied's mission is not only about food, our aim is to uplift communties by using food as the ice breaker,
                                             fight the gap for inequality in Asia, reduce polution, and create an open minded space
                                            for everyone regardless of gender affiliation or color.
                                </p>
                                    </div>
                                </Col>
                            </div>
                        </TabPane>

                        <TabPane tabId="tabs3">
                            <div className="d-flex mx-5 ">
                                <Col className="order-md-1" md="6">
                                    <img
                                        alt="..."
                                        className="img-fluid floating"
                                        style={{
                                            width: '50%',
                                        }}
                                        src={`${AWS_PUB_IMAGE}${Images.IPHONE}`}
                                    />
                                </Col>
                                <Col className="d-flex align-items-center order-md-3" md="6">
                                    <div className="pr-md-5">
                                        <p className="h5 mb-3">Meet with people</p>
                                        <p className='mission' >
                                            TungTied's mission is not only about food, our aim is to uplift communties by using food as the ice breaker,
                                             fight the gap for inequality in Asia, reduce polution, and create an open minded space
                                            for everyone regardless of gender affiliation or color.
                                </p>
                                    </div>
                                </Col>
                            </div>
                        </TabPane>

                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}

export default HomeTabs
