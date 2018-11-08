import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

export class RegisterDatasourceForm extends React.Component  {
    render() {
        return(
            <Container>
                <Row>
                    <Col md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                                <Input label="Your name"  group type="text" validate error="wrong" success="right"/>
                                <Input label="Your email"  group type="email" validate error="wrong" success="right"/>
                                <Input label="Confirm your email" group type="text" validate error="wrong" success="right"/>
                                <Input label="Your password"  group type="password" validate/>
                            </div>
                            <div className="text-center">
                                <Button color="primary">Register</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
};
