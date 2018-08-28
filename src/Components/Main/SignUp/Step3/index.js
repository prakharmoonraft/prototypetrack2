import React, { Component } from "react";
import '../Onboarding.css';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import BackAndCreate from "../../../SmallComponents/Card/BackAndCreate";


export default class SignUp3 extends Component {

    render() {
        return (
            <div className="mb-150">
                <Row className="mt-5">
                    <Col className="paddingL">
                        <div>
                            <p className="Set-up-your-vanguard">Review</p>
                            <div className="Number-1-4"><span className="layer-text-style-1">3</span><span className="layer">/4</span></div>
                            <p className="VCEP0012346">VCEP0012346</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="paddingX">
                        <Card className="">
                            <p className="Provide-your-basic-i">Review your information </p>
                            <hr className="Path-top" />
                            <span className="Basic-information pl-4">Basic information:</span><div className="Line-4"></div>
                            <div className="pl-4 mb-3 mt-4">
                                <span className="Field">User ID:</span>  <span className="Value">Patricksmith</span>
                                <span className="Field ml-5 pl-5">Password: </span>  <span className="Value">*************</span>
                            </div>
                            <div className="Line-5 m-auto"></div>
                            <Row className="pl-4">
                                <Col md="5" className="mt-3">
                                    <div className="mb-3"><span className="Field">Date of birth:</span>  <span className="Value"> Predefined Purpose</span></div>
                                    <div className="mb-3"><span className="Field">Address:</span>  <span className="Value">Residential</span></div>
                                    <div className="mb-3"><p className="Value">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporincididunt ut labor</p></div>
                                    <div className="mb-3"><p className="Value">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporincididunt ut labor</p></div>
                                    <div className="mb-3"><span className="Field">Phone number:</span>  <span className="Value">Residential</span></div>
                                    <div className="mb-5"><p className="Value">Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporincididunt ut labor</p></div>
                                </Col>
                            </Row>

                            <span className="Basic-information pl-4">Fund details</span><div className="Line-6"></div>
                            <div className="mt-5">
                                <div className="percentage-3">%</div>
                                <hr className="Path-30-3" />
                                <FormGroup tag="fieldset">
                                    <FormGroup className="mx-4">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                    <div className="Path-30-3" />
                                    <FormGroup className="mx-4">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                    <div className="Path-30-3" />
                                    <FormGroup className="mx-4">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                    <div className="Path-30-3" />
                                    <FormGroup className="mx-4">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                    <div className="Path-30-3" />
                                    <FormGroup className="mx-4">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                    <div className="Path-30-3" />
                                    <FormGroup className="mx-4 mb-2">
                                        <Label>
                                            <p className="dolor">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </Label>
                                        <p className="Percentage-Value">10%</p>
                                    </FormGroup>
                                </FormGroup>
                            </div>
                            <BackAndCreate/>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}