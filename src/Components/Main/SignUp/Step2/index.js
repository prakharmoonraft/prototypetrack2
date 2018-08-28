import React, { Component } from "react";
import '../Onboarding.css';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import BackAndNext from "../../../SmallComponents//Card/BackAndNext";

export default class SignUp2 extends Component {

    render() {
        return (
            <div className="mb-5">
                <Row className="mt-5">
                    <Col className="paddingL">
                        <p className="Set-up-your-vanguard">Account details</p>
                        <div className="Number-1-4">
                            <span className="layer-text-style-1">2</span>
                            <span className="layer">/4</span>
                        </div>
                        <p className="VCEP0012346">VCEP0012346</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="paddingX">
                        <Card className="">
                            <p className="Provide-your-basic-i">Provide your account details </p>
                            <hr className="Path-top" />
                            <Row>
                                <Col md="10">
                                    <Form className="p-4">
                                        <Row>
                                            <Col md="4">
                                                <FormGroup>
                                                    <Label for="FirstName">User ID</Label>
                                                    <Input type="text" name="firstname" id="FirstName" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <Label for="examplePassword">Password</Label>
                                                    <Input type="password" name="password" id="examplePassword" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <Label for="exampleRePassword">Re-enter password</Label>
                                                    <Input type="password" name="password" id="exampleRePassword" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="mt-4 mb-5">
                            <p className="Provide-your-basic-i">Contact details </p>
                            <hr className="Path-top" />
                            <Row className="px-4 pt-2">
                                <Col md="5">
                                    <FormGroup>
                                        <Label for="examplePhoneNumber">PhoneNumber</Label>
                                        <Input type="text" name="phone" id="examplePhoneNumber" />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Use my phone number for communication
                                        </Label>
                                    </FormGroup>
                                    <div className="Rectangle-8">
                                        <p className="Add-Acount-Advisor">
                                            Add number
                                        <div className="Blue-Circle">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                        </p>
                                    </div>
                                </Col>
                                <Col md="5">
                                    <FormGroup>
                                        <Label for="exampleAddress">Address</Label>
                                        <Input type="text" name="text" id="exampleAddress" className="mb-3" />
                                        <Input type="text" name="text" id="exampleAddress" />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Send paper correstpondence to this address
                                        </Label>
                                    </FormGroup>
                                    <div className="Rectangle-8 mb-5">
                                        <p className="Add-Acount-Advisor">
                                            Add address
                                        <div className="Blue-Circle">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="">
                            <p className="Provide-your-basic-i">Security questions</p>
                            <hr className="Path-top" />
                            <Row>
                                <Col md="10">
                                    <Form className="p-4">
                                        <div>
                                            <Label for="exampleSelect" className="Question">Question one?</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="Question-Rectangle" placeholder="Select from answers here">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                            <Input type="text" name="ansone" id="exampleAnsOne" placeholder="Your answers....." className="mt-2 mb-4 Answer" />
                                        </div>
                                        <div>
                                            <Label for="exampleSelect" className="Question">Question one?</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="Question-Rectangle" placeholder="Select from answers here">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                            <Input type="text" name="ansone" id="exampleAnsOne" placeholder="Your answers....." className="mt-2 mb-4 Answer" />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <BackAndNext />
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}