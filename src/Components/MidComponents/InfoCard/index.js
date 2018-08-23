import React, { Component } from "react";
import './InfoCard.css';
import { Row, Col, Card } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class InfoCard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="4">
                        <div className="Black">
                            <p className="StarText text-white p-2"><i className="fas fa-star text-white pr-2"></i>PEER PROMOTED</p>
                        </div>
                        <Card className="p-3">
                            <p className="card-tag mb-0 mt-2">Churches</p>
                            <p className="card-head">Jewish social service <br/> agency</p>
                            <div className="d-flex mt-3 justify-content-between">
                                <div className="Rectangle-Gray1">
                                    <p className="card-location p-1">Rockville, MD </p>
                                </div>
                                <div className="ml-2 Rectangle-Gray">
                                    <p className="card-location p-1">EIN: 53-0196598</p>
                                </div>
                            </div>
                            <p className="card-para mt-4">Montgomery County, Maryland and Northern Virginia meet emotional, social, and physical challenges for more than 120 years. JSSA serves.</p>
                            <div className="justify-content-between d-flex mt-3 mb-5">
                                <p className="card-money">
                                    <img src={require('../../../assets/images/gross_receipts.png')} className="receipt mr-2" />$48,564,283
                                </p>
                                <p className="card-money">
                                    <img src={require('../../../assets/images/profile.png')} className="profile mr-2" />Education and Health
                                </p>
                            </div>
                        </Card>
                        <NavLink to={{ pathname: "/step1" }}>
                            <div className="Rectangle-16 pt-2 px-4"><p className="Grant p-1">{this.props.title}<img src={require('../../../assets/images/grant_cta.png')} className="RotatedArrow"/></p></div>
                        </NavLink>
                    </Col>

                    <Col md="4">
                        <div className="Silver">
                            <p className="StarText p-2"><i className="fas fa-star pr-2"></i>SILVER</p>
                        </div>
                        <Card className="p-3">
                            <p className="card-tag mb-0 mt-2">Community</p>
                            <p className="card-head">Social science research agency</p>
                            <div className="d-flex mt-3 justify-content-between">
                                <div className="Rectangle-Gray1">
                                    <p className="card-location p-1">Brooklyn, NY</p>
                                </div>
                                <div className="ml-2 Rectangle-Gray">
                                    <p className="card-location p-1">EIN: 13-1325070</p>
                                </div>
                            </div>
                            <p className="card-para mt-4">Montgomery County, Maryland and Northern Virginia meet emotional, social, and physical challenges for more than 120 years. JSSA serves.</p>
                            <div className="justify-content-between d-flex mt-3 mb-5">
                                <p className="card-money">
                                    <img src={require('../../../assets/images/gross_receipts.png')} className="receipt mr-2" />$48,564,283
                                </p>
                                <p className="card-money">
                                    <img src={require('../../../assets/images/profile.png')} className="profile mr-2" />Education and Health
                                </p>
                            </div>
                        </Card>
                        <NavLink to={{ pathname: "/step1" }}>
                            <div className="Rectangle-16 pt-2 px-4"><p className="Grant p-1">{this.props.title}<img src={require('../../../assets/images/grant_cta.png')} className="RotatedArrow"/></p></div>
                        </NavLink>
                    </Col>

                    <Col md="4">
                        <div className="Gold">
                            <p className="StarText p-2"><i className="fas fa-star pr-2"></i>GOLD</p>
                        </div>
                        <Card className="p-3">
                            <p className="card-tag mb-0 mt-2">Education</p>
                            <p className="card-head">Interaction institute for social change</p>
                            <div className="d-flex mt-3 justify-content-between">
                                <div className="Rectangle-Gray1">
                                    <p className="card-location p-1">Boston, MA</p>
                                </div>
                                <div className="ml-2 Rectangle-Gray">
                                    <p className="card-location p-1">EIN: 94-2928341 </p>
                                </div>
                            </div>
                            <p className="card-para mt-4">Montgomery County, Maryland and Northern Virginia meet emotional, social, and physical challenges for more than 120 years. JSSA serves.</p>
                            <div className="justify-content-between d-flex mt-3 mb-5">
                                <p className="card-money">
                                    <img src={require('../../../assets/images/gross_receipts.png')} className="receipt mr-2" />$48,564,283
                                </p>
                                <p className="card-money">
                                    <img src={require('../../../assets/images/profile.png')} className="profile mr-2" />Education and Health
                                </p>
                            </div>
                        </Card>
                        <NavLink to={{ pathname: "/step1" }}>
                            <div className="Rectangle-16 pt-2 px-4"><p className="Grant p-1">{this.props.title}<img src={require('../../../assets/images/grant_cta.png')} className="RotatedArrow"/></p></div>
                        </NavLink>
                    </Col>
                </Row>
            </div >
        );
    }
}