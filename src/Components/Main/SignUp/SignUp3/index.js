import React, { Component } from "react";
import './SignUp3.css';
import { Row, Col, Label, Table } from 'reactstrap';
import Card from "../../../SmallComponents/Card";
import BackAndNext from "../../../SmallComponents/Card/BackAndNext";
import Header from '../../../Header';
import Footer from '../../../Footer';
import { NavLink } from 'react-router-dom';

export default class SignUp3 extends Component {
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
                            <Col className="pr-0 p-xs-0 px-md-0">
                                <span className="Your-Grant-Dashboard">Signup</span>
                                <div className="Line-su1"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX mt-4 mb-5">
                            <Col className="p-xs-0 px-md-0"  >
                                <Card className="BBottom">
                                    <Row className="justify-content-center">
                                        <Col md="7" className="mt-40 text-center">
                                            <p><span className="Step-1-Setup-your-G">Step 3:</span><span className="Step-1-Setup-your-B">Summary</span></p>
                                            <p className="Follow-the-process-t my-4">Please Review your information before creating the account</p>
                                        </Col>
                                    </Row>

                                    {/* <Row className="justify-content-center my-5 px-5">
                                        <Col md="6" sm="10"  className="">
                                            <div className="d-flex justify-content-around">

                                                <div className="">
                                                    <div className="Oval-9 " >
                                                        <div className="layer-su2 text-white">1</div>
                                                    </div>
                                                </div>
                                                <hr className="line-behind-oval-blue-su3"></hr>
                                                <div className="">
                                                    <div className="Oval-9 " >
                                                        <div className="layer-su2 text-white">2</div>
                                                    </div>
                                                </div>
                                                <hr className="line-behind-oval-blue-su3"></hr>
                                                <div className="">
                                                    <div className="Oval-9-outer" >
                                                        <div className="Oval-9-center">
                                                            <div className="Oval-9-Gradient">
                                                                <div className="layer-active-su2">3</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                                    <NavLink to="/signup2">
                                                        <div className="Oval-9 " >
                                                            <div className="OffNumber text-white">2</div>
                                                        </div>
                                                    </NavLink>
                                                    <div className="">
                                                        <div className="Oval-9-outer" >
                                                            <div className="Oval-9-center">
                                                                <div className="Oval-9-Gradient">
                                                                    <div className="OnNumber">3</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="line-behind-oval"> </div >
                                                <div className="line-behind-oval-blue-signup-3"> </div >
                                            </div>
                                        </div>
                                    </div>
                                    <Row className="py-5 px-md-5 px-3">
                                        <Col md="" className="">
                                            <span className="Basic-Information">Basic information</span>
                                            <div className="Line-4-su3"></div>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 px-3">
                                        <Col md="4" xs="6" className=" mar-bottom">
                                            <p className="Heading-su3"> First name </p>
                                            <p className="Value-su3 mt-md-3"> James </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3"> Middle name </p>
                                            <p className="Value-su3 mt-md-3"> Paul </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3"> Last name </p>
                                            <p className="Value-su3 mt-md-3"> Kennedy </p>
                                        </Col>
                                    </Row>

                                    <Row className="py-md-5 px-md-5 px-3">
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3"> Suffix </p>
                                            <p className="Value-su3 mt-md-3"> Mr. </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3"> Email </p>
                                            <p className="Value-su3 mt-md-3"> james@gmail.com </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3"> Date of birth </p>
                                            <p className="Value-su3 mt-md-3"> 23/07/1990 </p>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 px-3">
                                        <Col md="8" className="">
                                            <Row className="">
                                                <Col md="6" xs="6" className="mar-bottom">
                                                    <p className="Heading-su3"> Last four digits of SSN </p>
                                                    <p className="Value-su3 mt-md-3"> 2345 </p>
                                                </Col>
                                                <Col md="6" xs="6" className="">
                                                    <p className="Heading-su3"> Fund name </p>
                                                    <p className="Value-su3 mt-md-3"> The Kennedy Eco Fund </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="mb-4 mt-4 mt-md-5 px-md-5 px-3 row">
                                        <Col className="">
                                            <Label for="SSN">Craft you legacy</Label>
                                            <p className="Lorem-ipsum-dolor-su1">Your enrollment includes recommending a succession plan, which you may, at any time in the future, amend or update by completing the Establish a succession plan form. Check the boxes below to expand the associated section and enter required information. You may choose any combination of the options below and assign a percentage of your account's remaining assets to each. Percentages must add up to 100%. Learn more about our legacy options.</p>

                                            <table border="1" rules="none" className="table border-color mt-4" responsive>
                                                <thead className="thead-light">
                                                    <tr className="">
                                                        <th className="Percentage-su1 pl-5">Title</th>
                                                        <th className="Percentage-su1-per ml-auto">Percentage (%)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="pl-md-5 w-83" scope="row"><span className="Lorem-ipsum-dolor-su1">Retain this percentage of remaining assets in the existing philanthropic account and recognize the successor advisor(s) named below. Check the box to add this information. You may enter a maximum of two.</span></td>
                                                        <td className="Percentage-Input-su3-1 pl-5 pr-5">25%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-md-5 w-83" scope="row"><span className="Lorem-ipsum-dolor-su1">Use this percentage of remaining assets to create a separate new philanthropic account for each successor advisor(s) named below. Check the box to add this information.</span></td>
                                                        <td className="Percentage-Input-su3-2 pl-5 pr-5">25%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-md-5 w-83" scope="row"><span className="Lorem-ipsum-dolor-su1">Transfer this percentage of remaining assets to Vanguard Charitable's Philanthropic Impact Fund. The Philanthropic Impact Fund supports charities chosen by our board of trustees.</span></td>
                                                        <td className="Percentage-Input-su3-3 pl-5 pr-5">25%</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pl-md-5 w-83" scope="row"><span className="Lorem-ipsum-dolor-su1">Use this percentage of remaining assets for recommended grants to public charities in equal amounts. Check the box to add this information.</span></td>
                                                        <td className="Percentage-Input-su3-4 pl-5 pr-5">25%</td>
                                                    </tr>
                                                    <tr className="hr-line"><td colSpan="2"><hr></hr></td></tr>
                                                    <tr>
                                                        <td></td>
                                                        <td className="Percentage-Input-su3-5 pl-5 pr-5">100%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* <div className="table_line"></div> */}

                                        </Col>
                                    </Row>

                                    <Row className="py-5 px-md-5 px-3 account">
                                        <Col md="" className="">
                                            <span className="Basic-Information">Account details </span>
                                            <div className="Line-4-su3-2"></div>
                                        </Col>
                                    </Row>


                                    <Row className="px-md-5 px-3 ">
                                        <Col md="8" className="">
                                            <Row className="">
                                                <Col md="6" xs="6" className="mar-bottom">
                                                    <p className="Heading-su3 mb-3"> User ID </p>
                                                    <p className="Value-su3"> James.Paul </p>
                                                </Col>
                                                <Col md="6" xs="6" className="mar-bottom">
                                                    <p className="Heading-su3 mb-3"> Password </p>
                                                    <p className="Value-su3 "> ********** </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="py-md-5 px-md-5 px-3">
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3 mb-3"> Phone number </p>
                                            <p className="Value-su3 "> 484-382-0738 </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3 mb-3"> Address line 1 </p>
                                            <p className="Value-su3 "> 205  Horseshoe Lane </p>
                                        </Col>
                                        <Col md="4" xs="6" className="mar-bottom">
                                            <p className="Heading-su3 mb-3"> Address line 2 </p>
                                            <p className="Value-su3 "> PA, Pennsylvania 97205 </p>
                                        </Col>
                                    </Row>

                                    <Row className="px-md-5 px-3 mb-40">
                                        <Col md="8" className="mar-bottom">
                                            <Row className="">
                                                <Col md="6" xs="6" className="mar-bottom">
                                                    <p className="Heading-su3 mb-3"> What is your favourite color </p>
                                                    <p className="Value-su3 "> Blue </p>
                                                </Col>
                                                <Col md="6" xs="6" className="mar-bottom">
                                                    <p className="Heading-su3 mb-3"> What is you pets name </p>
                                                    <p className="Value-su3 "> Betty </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <BackAndNext pathb="signup2" pathn="signup4" />
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