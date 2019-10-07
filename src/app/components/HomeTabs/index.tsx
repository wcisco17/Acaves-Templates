import { Tabs } from 'app/assets/config';
import classnames from 'classnames';
import React from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const HomeTabs = () => {
    const [tabs, setTabs] = React.useState<number>(1);

    const toggleNavs = (e, state, index) => {
        e.preventDefault();
        setTabs(index);
    };

    return (
        <>
            <div className="nav-wrapper featured-nav">
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
                            Lorem ipsum dolor sit amet consectetur.
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
                            Lorem ipsum dolor sit amet consectetur.
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
                            Lorem ipsum dolor sit amet consectetur.
            </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <Card className="shadow">
                <CardBody >
                    <TabContent activeTab={"tabs" + tabs}>
                        {
                            Tabs.map((tab, key) => (
                                <TabPane key={key || tab.id} tabId={`tabs${tab.id}`}>
                                    <div className="home__container-1 d-flex mx-5 ">
                                        <Col className="order-md-1" md="6">
                                            <img
                                                alt="..."
                                                className="img-fluid floating featured-iphone"
                                                style={{
                                                    width: '50%',
                                                }}
                                                src={`${tab.image}`}
                                            />
                                        </Col>
                                        <Col className="d-flex align-items-center order-md-3" md="6">
                                            <div className="pr-md-5">
                                                <p className="h5 mb-3">{tab.title}</p>
                                                <p className='mission' >
                                                    {tab.text}
                                                </p>
                                            </div>
                                        </Col>
                                    </div>
                                </TabPane>
                            ))
                        }
                    </TabContent>
                </CardBody>
            </Card>
        </>
    )
}

export default HomeTabs
