import React, { Component } from "react";
import './NewConcept.css';
import 'react-circular-progressbar/dist/styles.css';
import { Row, Col } from 'reactstrap';
import SearchAndFilter from "../../SmallComponents/SearchAndFilter";
import Card from "../../SmallComponents/Card";
import GrantTable from "../../MidComponents/Table/GrantTable";
import InfoCard from "../../MidComponents/InfoCard";
import Tag from "../../SmallComponents/Tag";
import StyledProgressbar from "../../SmallComponents/Circle-progress-bar";
import Header from '../../Header';
import Footer from '../../Footer';

export default class GrantDashBoard extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="BgImage">
                    <Col>
                        <Header />
                        <Row className="mt-5 ContentMiddle paddingX">
                            <Col className="px-md-0">
                                <p className="Your-Grant-Dashboard">Your grant dashboard</p>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX">
                            <Col sm="4" className="pb-3 px-md-0">
                                <div className="d-inline-block radius mr-3">
                                    <StyledProgressbar
                                        percentage={2}
                                        text={`${2}%`}
                                    />
                                </div>
                                <div className="circleText d-inline-block">
                                    <p className="Grant-Per">Total Granted</p>
                                    <p className="dollar-amount">$100,000</p>
                                </div>
                            </Col>
                            <Col sm="4" className="pb-3">
                                <div className="d-inline-block radius mr-3">
                                    <StyledProgressbar
                                        percentage={60}
                                        text={`${60}%`}
                                    />
                                </div>
                                <div className="circleText d-inline-block">
                                    <p className="Grant-Per">Scheduled Grants</p>
                                    <p className="dollar-amount">$600,000</p>
                                </div>
                            </Col>
                            <Col sm="4" className="pb-3">
                                <div className="d-inline-block radius mr-3">
                                    <StyledProgressbar
                                        percentage={40}
                                        text={`${40}%`}
                                    />
                                </div>
                                <div className="circleText d-inline-block">
                                    <p className="Grant-Per">Available Balance</p>
                                    <p className="dollar-amount">$400,000</p>
                                </div>
                            </Col>
                        </Row >

                        <Row className="mt-4 ContentMiddle paddingX">
                            <Col className="p-xs-0 px-md-0">
                                <Card className="BBottom" >
                                    <Row>
                                        <Col className="table-padding" >
                                            <GrantTable />
                                        </Col>
                                    </Row>
                                    <div className="">
                                        <span className="d-inline-block VIEW-ALL-GRANT-GD"><i class="fas fa-arrow-left"></i>VIEW ALL GRANT </span>
                                        <span className="d-inline-block MAKE-A-GRANT-GD">MAKE A GRANT<i class="fas fa-arrow-right text-white"></i></span>
                                    </div>
                                </Card>
                            </Col>
                        </Row >

                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 pb-3 pr-0 mt-5">
                                <span className="SectionHeading">Charities</span>
                                <div className="LineCharities-GD"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 pb-3">
                                <SearchAndFilter />
                                <Tag />
                                <InfoCard title="GRANT" />
                                <div className="VIEW-MORE">VIEW MORE <br /> <i class="fas fa-caret-down"></i></div>
                            </Col>
                        </Row>

                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 pb-3 pr-0 mt-4">
                                <span className="Education-GD">Education</span>
                                <div className="LineCharities-GD-1"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 pb-3">
                                <InfoCard title="GRANT" />
                                <div className="VIEW-MORE">VIEW MORE <br /> <i class="fas fa-caret-down"></i></div>
                            </Col>
                        </Row>

                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 pb-3 pr-0 mt-4">
                                <span className="Education-GD">My community</span>
                                <div className="LineCharities-GD-2"></div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX mb-4">
                            <Col className="px-md-0 pb-3">
                                <InfoCard title="GRANT" />
                                <div className="VIEW-MORE">VIEW MORE <br /> <i class="fas fa-caret-down"></i></div>
                            </Col>
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </div >
        );
    }
}