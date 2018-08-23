import React, { Component } from 'react';
import { Row, Col, Button, Table } from 'reactstrap';
import './Step4.css';
import DetailsCard from '../../../MidComponents/TopCard';
import Submit from '../../../SmallComponents/Card/Submit';
import Card from '../../../SmallComponents/Card';
import { NavLink } from 'react-router-dom';
import Header from '../../../Header';
import Footer from '../../../Footer';

export default class Step3 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="Gradient pb-5">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX" >
                            <Col className="px-md-0 pr-0">
                                <span className="Make-a-New-Grant">Make a new grant</span>
                                <hr className="Line-g-s2" />
                            </Col>
                        </Row>

                        <Row className="ContentMiddle paddingX pb-64" >
                            <Col className="px-md-0">
                                <DetailsCard />
                            </Col>
                        </Row>

                        <Row className="ContentMiddle paddingX margin-to-footer" >
                            <Col className="px-md-0">
                                <Card className="BBottom">
                                    <div className="Step-2-Grant-Alloca pt-5"><span className="text-style-1">Step 4:</span> Summary</div>

                                    <div className="row justify-content-center">
                                        <div className="col-md-6 mb-3 stepper-media">
                                            <div className="d-flex justify-content-between">
                                                <NavLink to="/step1">
                                                    <div className="Oval-9 " >
                                                        <div className="OffNumber-G-2 text-white">1</div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="/step2">
                                                    <div className="Oval-9 " >
                                                        <div className="OffNumber-G-2 text-white">2</div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="/step3">
                                                    <div className="Oval-9" >
                                                        <div className="OffNumber-G-2 text-white">3</div>
                                                    </div>
                                                </NavLink>
                                                <div className="">
                                                    <div className="Oval-9-outer" >
                                                        <div className="Oval-9-center">
                                                            <div className="Oval-9-Gradient">
                                                                <div className="OnNumber-G-2">4</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line-behind-oval"> </div >
                                            <div className="line-behind-oval-blue-4"> </div >
                                        </div>
                                    </div>

                                    <Row className="Summary-top px-md-5 px-3" >
                                        <Col className="">
                                            <span className="Basic-Information">Grant details:</span>
                                            <div className="Line-gd" />
                                        </Col>
                                    </Row>
                                    <Row className="px-md-5 px-3 pt-5">
                                        <Col md="4" xs="6" className="">
                                            <p className="Input-Heading">Grant amount </p>
                                            <p className="Value-su3 mt-3"> $5000 </p>
                                        </Col>
                                        <Col md="4" xs="6" className="">
                                            <p className="Input-Heading"> Frequency </p>
                                            <p className="Value-su3 mt-3"> Monthly </p>
                                        </Col>
                                        <Col md="4" xs="6" className="pt-576">
                                            <p className="Input-Heading">Number of frequency </p>
                                            <p className="Value-su3 mt-3"> 6 </p>
                                        </Col>
                                    </Row>

                                    <Row className="py-5 px-md-5 px-3">
                                        <Col md="4" xs="6" className="">
                                            <p className="Input-Heading"> Scheduled date </p>
                                            <p className="Value-su3 mt-3">22/06/2018 </p>
                                        </Col>
                                        <Col md="4" xs="6" className="">
                                            <p className="Input-Heading"> Last date </p>
                                            <p className="Value-su3 mt-3"> 22/12/2018 </p>
                                        </Col>

                                    </Row>

                                    <Row className="Summary-Padding px-md-5 px-3">
                                        <Col className="Input-Heading ">
                                            <span className="pr-5">Grant purpose</span><img className="i" src={require('../../../../assets/images/more_info_popup.png')} />
                                        </Col>
                                    </Row>
                                    <Row className="topMargin Summary-Padding sum-val px-md-5 px-3" >
                                        <Col className="">
                                            Is this grant to a religious organization?
                                </Col>
                                        <Col className="yes_position pl-0 Value-yes" xs="6" md="8">
                                            Yes
                                </Col>
                                    </Row>
                                    <Row className="topMargin Summary-Padding px-md-5 px-3 sum-val mb-5 pb-1 " >
                                        <Col className="">
                                            Is this grant for a specific purpose?
                                </Col>
                                        <Col className="yes_position pl-0 Value-yes" xs="6" md="8" >
                                            Yes
                                </Col>
                                    </Row>

                                    <Row className="px-md-5 px-3">
                                        <Col md="4" xs="6" className="">
                                            <p className="Input-Heading">Define purpose* </p>
                                            <p className="Value-su3-81 mt-3">Charity Event  </p>
                                        </Col>
                                        <Col md="4" xs="6" className="pl-5">
                                            <p className="Input-Heading"> Enter details of purpose </p>
                                            <p className="Value-su3-81 mt-3"> Annual fundraiser </p>
                                        </Col>
                                    </Row>



                                    <div className="Summary-Padding px-md-5 px-3 py-4">
                                        <p className="Input-Heading pb-3">Grant recognition</p>
                                        <p className="Account-advisor-name">Account advisor name(s) address(s), and philanthropic account name</p>
                                    </div>
                                    <Row className="Summary-top px-md-5 px-3" >
                                        <Col>
                                            <span className="Basic-Information">Grant allocation:</span>
                                            <hr className="Line-s" />
                                        </Col>
                                    </Row>

                                    <Row className="topMargin Summary-Padding px-md-5 px-3" >
                                        <Col className="Grant-Amount al-r">
                                            Investment preference
                                        </Col>
                                        <Col className="sum-val al-l" >
                                            My preference 1
                                        </Col>
                                    </Row>

                                    <div className="px-md-5 px-3">
                                        <Table border="1" rules="none" className="border-color" responsive>
                                            <thead>
                                                <tr className="Rectangle-15">
                                                    <th className="Categories-Investment w-25">Investment option</th>
                                                    <th className="CategoriesPer w-25">Percentage</th>
                                                    <th className="CategoriesAmt w-25">Amount</th>
                                                    <th className="Values-Available-Balanace w-md-25">Available balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="Values w-25" >Gift preservation</th>
                                                    <td><span className=""><span className="layer-per-4">25%</span></span></td>
                                                    <td><span className="-A"><span className="layer-per-4">$250</span></span></td>
                                                    <td className="Values-5000"><span>$5000</span><span class="Left-Padding Expand">
                                                    </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="Values w-25" scope="row">Short term bond</th>
                                                    <td><span className=""><span className="layer-per-4">25%</span></span></td>
                                                    <td><span className="-A"><span className="layer-per-4">$250</span></span></td>
                                                    <td className="Values-5000 "><span>$5000</span><span class="Left-Padding Expand">
                                                    </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="Values w-25" scope="row">Money market</th>
                                                    <td><span className=""><span className="layer-per-4">25%</span></span></td>
                                                    <td><span className="-A"><span className="layer-per-4">$250</span></span></td>
                                                    <td className="Values-5000 "><span>$5000</span><span class="Left-Padding Expand">
                                                    </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="Values w-25" scope="row">Total bond</th>
                                                    <td><span className=""><span className="layer-per-4">25%</span></span></td>
                                                    <td><span className="-A"> <span className="layer-per-4">$250</span></span></td>
                                                    <td className="Values-5000"><span>$5000</span><span class="Left-Padding Expand">
                                                    </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="Values w-25 Total" scope="row">Total</th>
                                                    <td></td>
                                                    <td className="TotalValues"><span>$1000</span></td>
                                                    <td className="TotalValuesEnd">$20000</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                        <div className="Line-4-T"> </div>
                                    </div>
                                    <Row className="Summary-top px-md-5 px-3" >
                                        <Col>
                                            <span className="Basic-Information">Your granting plan:</span>
                                            <hr className="Line-yp" />
                                        </Col>
                                    </Row>

                                    <div className="mt-4 px-md-5 px-3">
                                        <Table border="1" rules="none" className="border-color" responsive>
                                            <thead>
                                                <tr className="Rectangle-15">
                                                    <th className="Categories-Investment w-25">Grant name</th>
                                                    <th className="Categories-3 w-25">Amount</th>
                                                    <th className="Categories-3-s w-25">Scheduled on</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="Values w-25" >Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td><span className="layer-Date">22/07/18</span></td>

                                                </tr>
                                                <tr>
                                                    <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td><span className="layer-Date">22/08/18</span></td>

                                                </tr>
                                                <tr>
                                                    <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td><span className="layer-Date">22/09/18</span></td>

                                                </tr>

                                                <tr>
                                                    <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td> <span className="layer-Date">22/10/18</span></td>

                                                </tr>

                                                <tr>
                                                    <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td> <span className="layer-Date">22/11/18</span></td>

                                                </tr>

                                                <tr>
                                                    <th className="Values w-25" scope="row">Jewish Social Service Agency</th>
                                                    <td className="Values-5000-3"><span>$5000</span><span class="Left-Padding-3 Expand">
                                                    </span>
                                                    </td>
                                                    <td> <span className="layer-Date">22/12/18</span></td>

                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row className="pt-5" >
                                        <Col>
                                            <Submit pathn="grantdashboard" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}