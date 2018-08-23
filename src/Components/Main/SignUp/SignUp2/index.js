import React, { Component } from "react";
import './SignUp2.css';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import BackAndNext from "../../../SmallComponents/Card/BackAndNext";
import Header from '../../../Header';
import Footer from '../../../Footer';
import { NavLink } from 'react-router-dom';

export default class SignUp2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="Gradient">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX">
                            <Col className="p-xs-0 px-md-0 pr-0">
                                <span className="Your-Grant-Dashboard">Signup</span>
                                <div className="Line-su1"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX mt-4 mb-5">
                            <Col className="p-xs-0 px-md-0">
                                <Card className="BBottom">
                                    <Row className="justify-content-center">
                                        <Col md="8" className="mt-40 text-center">
                                            <p><span className="Step-1-Setup-your-G">Step 2:</span><span className="Step-1-Setup-your-B"> Setup your account details</span></p>
                                            <p className="Follow-the-process-t my-4">Please configure your account details</p>
                                        </Col>
                                    </Row>

                                    {/* <Row className="justify-content-center my-5 px-5">
                                        <Col md="6" className="">
                                            <div className="d-flex justify-content-around">
                                                <div className="">
                                                    <div className="Oval-9 " >
                                                        <div className="layer-su2 text-white">1</div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="Oval-9-outer" >
                                                        <div className="Oval-9-center">
                                                            <div className="Oval-9-Gradient">
                                                                <div className="layer-active-su2">2</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="Oval-9-3_4 " >
                                                        <div className="layer-su2">3</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line-behind-oval-su2"> </div >
                                            <div className="line-behind-oval-blue-su2"> </div >
                                        </Col>
                                    </Row> */}
                                    <div className="m-auto w-83">
                                        <div className="row justify-content-center justify-content-center mt-3 mb-5 px-5">
                                            <div className="col-md-5 stepper-media">
                                                <div className="d-flex justify-content-between">
                                                    <NavLink to="/signup1">
                                                        <div className="Oval-9 " >
                                                            <div className="OffNumber text-white">1</div>
                                                        </div>
                                                    </NavLink>
                                                    <div className="Oval-9-outer" >
                                                        <div className="Oval-9-center">
                                                            <div className="Oval-9-Gradient">
                                                                <div className="OnNumber">2</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber">3</div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="line-behind-oval"> </div >
                                                <div className="line-behind-oval-blue-signup"> </div >
                                            </div>
                                        </div>
                                    </div>
                                    <Row className="px-md-5 px-2">
                                        <Col md="" className="my-5">
                                            <span className="Basic-Information">Provide your account details</span>
                                            <div className="Line-4-su2-1"></div>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 px-2">
                                        <Col md="4" className="font-tab">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="FirstName">User ID</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="firstname" id="FirstName" placeholder="James.Kennedy" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="pt-xs-10 font-tab">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="MiddleName">Password</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="middlename" id="MiddleName" placeholder="**********" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="pt-xs-10 font-tab">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="LastName">Re-Enter password</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="lastname" id="LastName" placeholder="**********" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="mt-5 mb-4 px-md-5 px-2 ">
                                        <Col md="" className="">
                                            <span className="Basic-Information">Contact details</span>
                                            <div className="Line-4-su2-2"></div>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 pt-4 px-2">
                                        <Col md="4" className="font-tab">
                                            <FormGroup className="pb-2">
                                                <Label className="Input-Heading" for="FirstName">Phone number</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="firstname" id="FirstName" placeholder="484-382-0738" />
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label className="Input-Heading" check className="Use-my-Phone-Number-su2" >
                                                    <Input className="CheckBoxRectangle form-check-input-su2 " type="checkbox" />{' '}
                                                    Use my phone number for communication
                                                </Label>
                                            </FormGroup>
                                            <div className="my-md-4 mb-4 pt-xs-10 d-flex">
                                                <img src={require('../../../../assets/images/add_account_advisor.png')} className="Add-oval" />
                                                <span className="ADD-ACCOUNT-ADVISOR-su1">ADD NUMBER</span>
                                            </div>

                                        </Col>
                                        <Col md="4" className="font-tab">
                                            <FormGroup className="pb-2">
                                                <Label className="Input-Heading" for="MiddleName">Address line 1</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="middlename" id="MiddleName" placeholder="205  Horseshoe Lane" />
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label className="Input-Heading" check className="Use-my-Phone-Number-su2" >
                                                    <Input className="CheckBoxRectangle form-check-input-su2 " type="checkbox" />{' '}
                                                    Send Paper correspondence to this address
                                                </Label>
                                            </FormGroup>
                                            <div className="my-md-4 mb-4 pt-xs-10 d-flex">
                                                <img src={require('../../../../assets/images/add_account_advisor.png')} className="Add-oval" />
                                                <span className="ADD-ACCOUNT-ADVISOR-su1">ADD ADDRESS</span>
                                            </div>
                                        </Col>
                                        <Col md="4" className="font-tab">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="LastName">Address line 2</Label>
                                                <Input className="BRadius Input-text-su1" type="text" name="lastname" id="LastName" placeholder="PA, Pennsylvania 97205" />
                                            </FormGroup>
                                        </Col>
                                    </Row>



                                    <Row className="mt-5 mb-4 px-md-5 px-2">
                                        <Col md="" className="">
                                            <span className="Basic-Information">Security questions</span>
                                            <div className="Line-4-su2-3"></div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3 mb-40 px-md-5 px-2">
                                        <Col md="8" className="">
                                            <Row className="">
                                                <Col md="6" className="font-tab">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="exampleSelect" >Question 1</Label>
                                                        <Input className="BRadius Input-text-su1 DownCaret h-100" type="select" name="select" id="exampleSelect" placeholder="Select from answers here">
                                                            <option>Select a question</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="pt-xs-10 font-tab">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN">Your answer</Label>
                                                        <Input className="BRadius Input-text-su1" type="text" name="SSN" id="SSN" placeholder="Type in your answer" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4 pt-3">
                                                <Col md="6" className="font-tab">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="exampleSelect" >Question 2</Label>
                                                        <Input className="BRadius Input-text-su1 DownCaret h-100" type="select" name="select" id="exampleSelect" placeholder="Select from answers here">
                                                            <option>Select a question</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="pt-xs-10 font-tab">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN">Your answer</Label>
                                                        <Input className="BRadius Input-text-su1" type="text" name="SSN" id="SSN" placeholder="Select from answers here" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <BackAndNext pathb="signup1" pathn="signup3" />
                                </Card>
                            </Col>
                        </Row >
                        <Footer />
                    </Col>
                </Row>
            </div >
        );
    }
}