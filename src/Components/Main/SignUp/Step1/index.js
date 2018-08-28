import React, { Component } from "react";
import '../Onboarding.css';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import { Link } from 'react-router-dom';


export default class SignUp1 extends Component {
    render() {
        return (
            <div className="mb-150">
                <Row className="mt-5">
                    <Col className="paddingL">
                        <div>
                            <p className="Set-up-your-vanguard">Set up your vanguard charitable account</p>
                            <div className="Number-1-4"><span className="layer-text-style-1">1</span><span className="layer">/4</span></div>
                            <p className="VCEP0012346">VCEP0012346</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="paddingX">
                        <Card className="">
                            <p className="Provide-your-basic-i">Provide your basic information </p>
                            <hr className="Path-top" />
                            <Form className="p-md-4">
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" />
                                </FormGroup>
                                <div className="d-flex justify-content-between my-3">
                                    <FormGroup>
                                        <Label for="FirstName">First Name</Label>
                                        <Input type="text" name="firstname" id="FirstName" className="w-135" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="MiddleName">Middle Name</Label>
                                        <Input type="text" name="middlename" id="MiddleName" className="w-135" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="LastName">Last Name</Label>
                                        <Input type="text" name="lastname" id="LastName" className="w-135" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSelect">Suffix</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                            <option>Master</option>
                                            <option>Miss</option>
                                        </Input>
                                    </FormGroup>
                                </div>
                                <div className="d-flex justify-content-between w-83">
                                    <FormGroup>
                                        <Label for="DOB">Date of birth</Label>
                                        <Input type="text" name="dob" id="DOB" className="w-135" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="SSN">Last four digits of SSN</Label>
                                        <Input type="text" name="SSN" id="SSN" className="w-135" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="LSSN">Re-enter last four digits of SSN</Label>
                                        <Input type="text" name="LSSN" id="LSSN" className="w-121-5" />
                                    </FormGroup>
                                </div>
                                <div className="Rectangle-8">
                                    <p className="Add-Acount-Advisor">
                                        Add Acount Advisor
                                        <div className="Blue-Circle">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </p>
                                </div>
                            </Form>
                        </Card>

                        <Card className="mt-4 mb-5">
                            <p className="Provide-your-basic-i">Fund details </p>
                            <hr className="Path-top" />
                            <Form >
                                <FormGroup className="px-4 pb-3">
                                    <Label for="exampleFundName">Fund name </Label>
                                    <Input type="text" name="fundname " id="exampleFundName " />
                                </FormGroup>
                                <div className="Rectangle">
                                    <p className="px-4 pt-4 Craft-your-legacy">Craft your legacy</p>
                                    <p className="px-4 mt-3 mb-5 dolor-sit-amet-cons">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
                                    <p className="percentage">%</p>
                                    <hr className="Path-30" />
                                    <FormGroup tag="fieldset">
                                        <FormGroup check className="mx-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox1" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                        <div className="Path-30" />
                                        <FormGroup check className="mx-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox2" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                        <div className="Path-30" />
                                        <FormGroup check className="mx-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox3" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                        <div className="Path-30" />
                                        <FormGroup check className="mx-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox3" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                        <div className="Path-30" />
                                        <FormGroup check className="mx-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox3" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                        <div className="Path-30" />
                                        <FormGroup check className="mx-4 mb-4">
                                            <Label check>
                                                <Input type="checkbox" name="checkbox3" />{' '}
                                                <p className="dolor-sit-multi">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </Label>
                                            <Input className="Percentage-Input" type="text" name="percentage" id="examplePercentage" />
                                        </FormGroup>
                                    </FormGroup>
                                </div>
                                <div className="Rectangle-2-Copy-2">
                                    <Link to={{pathname: "/signup2"}}>
                                        <div className="d-flex justify-content-center">
                                            <p className="Create-account mt-2">Create account<i class="fas fa-arrow-right ml-3"></i></p>
                                        </div>
                                    </Link>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}