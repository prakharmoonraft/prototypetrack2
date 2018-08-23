import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import './Step3.css';
import DetailsCard from '../../../MidComponents/TopCard';
import BackAndNext from '../../../SmallComponents/Card/BackAndNext';
import Card from '../../../SmallComponents/Card';
import Table3 from '../../../MidComponents/Table/Step3';
import Header from '../../../Header';
import Footer from '../../../Footer';
import { NavLink } from 'react-router-dom';

export default class Step3 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="Gradient">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX" >
                            <Col className="pr-0 px-md-0">
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
                                    <div className="Step-2-Grant-Alloca marginTop"><span className="text-style-1">Step 3:</span> Your granting plan</div>
                                    <div >
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
                                                    <div className="">
                                                        <div className="Oval-9-outer" >
                                                            <div className="Oval-9-center">
                                                                <div className="Oval-9-Gradient">
                                                                    <div className="OnNumber-G-2">3</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G-2">4</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-behind-oval"> </div >
                                                <div className="line-behind-oval-blue-3"> </div >
                                            </div>
                                        </div>

                                    </div>

                                    <div className="px-md-5 px-3 mt-60">
                                        <Table3 />
                                    </div>
                                    <BackAndNext pathb="step2" pathn="step4" />
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