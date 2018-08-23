import React, { Component } from 'react';
import { Row, Col, Input } from 'reactstrap';
import './Step2.css';
import DetailsCard from '../../../MidComponents/TopCard';
import BackAndNext from '../../../SmallComponents/Card/BackAndNext';
import Card from '../../../SmallComponents/Card';
import Tables from '../../../MidComponents/Table';
import { NavLink } from 'react-router-dom';
import Header from '../../../Header';
import Footer from '../../../Footer';

export default class Step2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Row className="Gradient">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX" >
                            <Col className="pr-md-0 px-md-0">
                                <span className="Make-a-New-Grant">Make a new grant</span>
                                <hr className="Line-g-s2" />
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX pb-64" >
                            <Col className="px-md-0">
                                <DetailsCard />
                            </Col>
                        </Row>

                        <Row className="ContentMiddle paddingX my-5">
                            <Col className="px-md-0">
                                <Card className="BBottom" >
                                    <div className="Step-2-Grant-Alloca marginTop"><span className="text-style-1">Step 2:</span> Grant allocation</div>
                                    <div >
                                        <div className="row justify-content-center mb-5">
                                            <div className="col-md-6 stepper-media">
                                                <div className="d-flex justify-content-between mt-3">
                                                    <NavLink to="/step1">
                                                        <div className="Oval-9 " >
                                                            <div className="OffNumber-G-2 text-white">1</div>
                                                        </div>
                                                    </NavLink>
                                                    <div className="">
                                                        <div className="Oval-9-outer" >
                                                            <div className="Oval-9-center">
                                                                <div className="Oval-9-Gradient">
                                                                    <div className="OnNumber-G-2">2</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G-2">3</div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G-2">4</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-behind-oval"> </div >
                                                <div className="line-behind-oval-blue"> </div >
                                            </div>
                                        </div>
                                    </div>
                                    <Row className="justify-content-center mt-80" >
                                        <Col md="4" className="drop-pos">
                                            <div className="Input-Heading">Investment preference</div>
                                            <Input className="BRadius Input-text-su1 DownCaret h-68 w-93" type="select">
                                                <option >My preference 1</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                    <Row className="px-md-5 px-3 pt-4" >
                                        <Col>
                                            <Tables />
                                        </Col>
                                    </Row>
                                    <BackAndNext pathb="step1" pathn="step3" />
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