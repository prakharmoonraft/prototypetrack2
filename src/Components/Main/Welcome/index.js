import React, { Component } from "react";
import './Welcome.css';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../SmallComponents/Card";
import InfoCard from "../../MidComponents/InfoCard";
import SearchAndFilter from "../../SmallComponents/SearchAndFilter";
import Tag from "../../SmallComponents/Tag";
import { NavLink } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

export default class Welcome extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="BgImage">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX mt-5">
                            <Col className="px-md-0">
                                <div>
                                    <p className="Welcome-to-vanguard">Welcome to Vanguard Charitable James Kennedy!</p>
                                    <p className="VCEP0012346-w my-4">Set your account preferences</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0">
                                <Card className="px-md-5 px-3 py-4">
                                    <span className="Basic-Information">Build your philanthopic preferences</span>
                                    <div className="Path-top" />
                                    <Row className="pt-4 pb-5">
                                        <Col md="12" className="">
                                            <Row >
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="exampleSelect" >Interest</Label>
                                                        <Input className="BRadius Input-text-su1 DownCaret h-100" type="select" name="select" id="exampleSelect" placeholder="Select from answers here">
                                                            <option>Select your interest</option>
                                                            <option>10%</option>
                                                            <option>25%</option>
                                                            <option>50%</option>
                                                            <option>100%</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="8" className="d-flex">
                                                    <div className="Rectangle-tag-Education mr-2"><span className="Churche">Education </span><img src={require('../../../assets/images/tag_cancel.png')} className="tag-cross-w" /></div>
                                                    <div className="Rectangle-tag-Religious"><span className="Churche">Religious organization  </span><img src={require('../../../assets/images/tag_cancel.png')} className="tag-cross-w" /></div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <span className="Basic-Information">Granting goal</span>
                                    <div className="Path-top-2" />
                                    <Row className="pt-4">
                                        <Col>
                                            <Row>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN">Enter amount</Label>
                                                        <Input className="BRadius Input-text-su1" type="text" name="SSN" id="SSN" placeholder="$5,000,000" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="exampleSelect" className="mt-3" ></Label>
                                                        <Input className="BRadius Input-text-su1 DownCaret h-100" type="select" name="select" id="exampleSelect" placeholder="Select from answers here">
                                                            <option>Years</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label className="Input-Heading" for="SSN" className="mt-3" ></Label>
                                                        <Input className="BRadius Input-text-su1" placeholder="10" type="text" name="SSN" id="SSN" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-5 ContentMiddle paddingX ">
                            <Col className="px-md-0">
                                <span className="SectionHeading">Charities of interest</span><div className="LineCharities-wc"></div>
                                <div className="mt-3">
                                    <SearchAndFilter />
                                    <Tag />
                                    <InfoCard title="GRANT" />
                                    <div className="VIEW-MORE mt-3 mb-4">VIEW MORE <br /> <i class="fas fa-caret-down"></i></div>
                                    <NavLink to={{ pathname: "/step1" }}>
                                        <div className="Rectangle-3 m-auto">GET STARTED <img src={require('../../../assets/images/if_arrow_right.png')} class="ml-2 if_arrow-right" /></div>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}