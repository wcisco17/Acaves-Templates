import HomeTabs from 'app/components/HomeTabs';
import * as React from 'react';
import { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Bounce from 'react-reveal/Bounce';

interface IProps {
    messagesEndRef: any
};

const Features: React.FC<IProps> = () => {
    return (
        <Fragment>
            <section className="section section-lg">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Bounce left>
                            <h1 style={{ color: '#172b4d' }} className="mb-3 display-3">
                                The TungTied Experience{" "}
                            </h1>
                        </Bounce>
                        <HomeTabs />
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default Features;