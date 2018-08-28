import React, { Component } from "react";
import './SignUp1.css';
import { Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import BackAndNext from "../../../SmallComponents/Card/BackAndNext";
import Header from '../../../Header';
import Footer from '../../../Footer';

export default class SignUp1 extends Component {
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
                            <Col className="px-md-0 pr-0">
                                <span className="Your-Grant-Dashboard">Signup</span>
                                <div className="Line-su1"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX mt-4 mb-5">
                            <Col className=" px-md-0">
                                <Card className="BBottom">
                                    <Row className="justify-content-center">
                                        <Col md="7" className="mt-40 text-center">
                                            <p><span className="Step-1-Setup-your-G">Step 1:</span><span className="Step-1-Setup-your-B"> Setup your account</span></p>
                                            <p className="Follow-the-process-t my-4">Follow the process to setup your Vangaurd Charitable account</p>
                                        </Col>
                                    </Row>

                                    {/* <Row className="justify-content-center my-5 px-5">
                                        <Col md="6" className="">
                                         <div className="d-flex justify-content-around">

                                                <div className="">
                                                    <div className="Oval-9-outer" >
                                                        <div className="Oval-9-center">
                                                            <div className="Oval-9-Gradient">
                                                                <div className="layer_2">1</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="Oval-9-3_4 " >
                                                        <div className="layer-su1">2</div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="Oval-9-3_4 " >
                                                        <div className="layer-su1">3</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line-behind-oval-su1"></div> 
                                               </Col>
                                    </Row> */}
                                    <div className="m-auto w-83">
                                        <div className="row justify-content-center justify-content-center mt-3 mb-5 px-5">
                                            <div className="col-md-5 stepper-media">
                                                <div className="d-flex justify-content-between">
                                                    <div className="">
                                                        <div className="Oval-9-outer" >
                                                            <div className="Oval-9-center">
                                                                <div className="Oval-9-Gradient">
                                                                    <div className="OnNumber">1</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4" >
                                                            <div className="OffNumber">2</div>
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber">3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-behind-oval"> </div >
                                            </div>
                                        </div>
                                    </div>

                                    <Row className="px-md-5 px-2">
                                        <Col className="my-5">
                                            <span className="Basic-Information">Basic information</span>
                                            <div className="Line-4-su1"></div>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 px-2 font-tab">
                                        <Col md="4" className="mar-bottom">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="FirstName">First name</Label>
                                                <Input className="BRadius Input-text-su1 " type="text" name="firstname" id="FirstName" placeholder="James" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="mar-bottom">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="MiddleName">Middle name</Label>
                                                <Input className="BRadius Input-text-su1 " type="text" name="middlename" id="MiddleName" placeholder="Paul" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="LastName">Last name</Label>
                                                <Input className="BRadius Input-text-su1 " type="text" name="lastname" id="LastName" placeholder="Kennedy" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="my-5 px-md-5 px-2 font-tab font-14">
                                        <Col md="4" className="mar-bottom">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="exampleSelect">Suffix</Label>
                                                <Input className="BRadius Input-text-su1 DownCaret h-100" type="select" name="select" id="exampleSelect">
                                                    <option>Mr.</option>
                                                    <option>Mrs.</option>
                                                    <option>Master</option>
                                                    <option>Miss</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="mar-bottom">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="exampleEmail">Email</Label>
                                                <Input className="BRadius Input-text-su1" type="email" name="email" id="exampleEmail" placeholder="james@gmail.com" />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4" className="mar-bottom">
                                            <FormGroup>
                                                <Label className="Input-Heading" for="DOB">Date of birth</Label>
                                                <Input className="BRadius Input-text-su1 calendar-s1" type="text" name="dob" id="DOB" placeholder="23/07/1990" />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4 px-md-5 px-2 font-tab font-14">
                                        <Col md="8" className="">
                                            <Row className="">
                                                <Col md="6" className="mar-bottom mb-3">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN">Last four digits of SSN</Label>
                                                        <Input className="BRadius Input-text-su1 " type="text" name="SSN" id="SSN" placeholder="2345" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="mar-bootom">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="LSSN">Re-enter last four digits of SSN</Label>
                                                        <Input className="BRadius Input-text-su1 " type="text" name="LSSN" id="LSSN" placeholder="2345" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <div className="mt-md-2 mb-3 mt-1 d-flex px-md-5 px-2">
                                        <img src={require('../../../../assets/images/add_account_advisor.png')} className="Add-oval" />
                                        <span className="ADD-ACCOUNT-ADVISOR-su1">ADD ACCOUNT ADVISOR</span>
                                    </div>

                                    <Row className="pt-5 pb-5 px-md-5 px-2 ">
                                        <Col md="" className="">
                                            <span className="Basic-Information">Fund details</span>
                                            <div className="Line-4-su1-2"></div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3 pb-4 px-md-5 px-2">
                                        <Col md="4" className="">
                                            <Row className="font-tab">
                                                <Col md="12" className="">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN">Fund name</Label>
                                                        <Input className="BRadius Input-text-su1 " type="text" name="SSN" id="SSN" placeholder="The Kennedy Eco Fund" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="mb-40 px-md-5 px-2">
                                        <Col className="">
                                            <Label className="Input-Heading" for="SSN">Craft you legacy</Label>
                                            <p className="Lorem-ipsum-dolor-su1">Your enrollment includes recommending a succession plan, which you may, at any time in the future, amend or update by completing the Establish a succession plan form. Check the boxes below to expand the associated section and enter required information. You may choose any combination of the options below and assign a percentage of your account's remaining assets to each. Percentages must add up to 100%. Learn more about our legacy options.</p>

                                            <Table border="1" rules="none" className="border-color mt-4" responsive>
                                                <thead>
                                                    <tr className="Rectangle-15">
                                                        <th className="Percentage-su1 pl-4">Title</th>
                                                        <th className="Percentage-su1 ">Percentage (%)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="w-83">
                                                            <FormGroup check className="ml-3">
                                                                <Label className="Input-Heading" check>
                                                                    <Input className="CheckBoxRectangle form-check-input-su1" type="checkbox" name="checkbox1" />{' '}
                                                                    <p className="Lorem-ipsum-dolor-su1">Retain this percentage of remaining assets in the existing philanthropic account and recognize the successor advisor(s) named below. Check the box to add this information. You may enter a maximum of two.</p>
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <td><Input className="BRadius  Percentage-Input-su1 Lorem-ipsum-dolor-su1_per" type="text" name="percentage" id="examplePercentage" placeholder="25%" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="w-83">
                                                            <FormGroup check className="ml-3">
                                                                <Label className="Input-Heading" check>
                                                                    <Input className="CheckBoxRectangle form-check-input-su1 " type="checkbox" name="checkbox1" />{' '}
                                                                    <p className="Lorem-ipsum-dolor-su1">Use this percentage of remaining assets to create a separate new philanthropic account for each successor advisor(s) named below. Check the box to add this information.</p>
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <td><Input className="BRadius   Percentage-Input-su1 Lorem-ipsum-dolor-su1_per" type="text" name="percentage" id="examplePercentage" placeholder="25%" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="w-83">
                                                            <FormGroup check className="ml-3">
                                                                <Label className="Input-Heading" check>
                                                                    <Input className="CheckBoxRectangle form-check-input-su1 " type="checkbox" name="checkbox1" />{' '}
                                                                    <p className="Lorem-ipsum-dolor-su1">Transfer this percentage of remaining assets to Vanguard Charitable's Philanthropic Impact Fund. The Philanthropic Impact Fund supports charities chosen by our board of trustees.</p>
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <td><Input className="BRadius   Percentage-Input-su1 Lorem-ipsum-dolor-su1_per" type="text" name="percentage" id="examplePercentage" placeholder="25%" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="w-83">
                                                            <FormGroup check className="ml-3">
                                                                <Label className="Input-Heading" check>
                                                                    <Input className="CheckBoxRectangle form-check-input-su1 " type="checkbox" name="checkbox1" />{' '}
                                                                    <p className="Lorem-ipsum-dolor-su1">Use this percentage of remaining assets for recommended grants to public charities in equal amounts. Check the box to add this information.</p>
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <td><Input className="BRadius   Percentage-Input-su1 Lorem-ipsum-dolor-su1_per " type="text" name="percentage" id="examplePercentage" placeholder="25%" /></td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="w-83">
                                                            <FormGroup check className="ml-3">
                                                                <Label className="Input-Heading" className="" check>
                                                                    <p className="Lorem-ipsum-dolor-su1">Total (must equal 100%) </p>
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <td ><Input className="BRadius  Percentage-Input-su1 Lorem-ipsum-dolor-su1_per" type="text" name="percentage" id="examplePercentage" placeholder="100%" /></td>
                                                    </tr>
                                                </tbody>

                                            </Table>
                                            <div className="table_line_s1"></div>
                                        </Col>
                                    </Row>
                                    <BackAndNext pathb="newconcept" pathn="signup2" />
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