import React, { Component } from "react";
import './NewConcept.css';
import { Row, Col, Card } from 'reactstrap';
import SearchAndFilter from "../../SmallComponents/SearchAndFilter";
import InfoCard from "../../MidComponents/InfoCard";
import Tag from "../../SmallComponents/Tag";
import { NavLink } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

export default class NewConcept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            box1: false,
            box2: false,
            box3: false,
            box4: false,
            condition1: false,
            condition2: false,
            condition3: false
        };
        this.boxClick1 = this.boxClick1.bind(this);
        this.boxClick2 = this.boxClick2.bind(this);
        this.boxClick3 = this.boxClick3.bind(this);
        this.boxClick4 = this.boxClick4.bind(this);

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }
    boxClick1() {
        this.setState({
            box1: !this.state.box1
        });
    }
    boxClick2() {
        this.setState({
            box2: !this.state.box2
        });
    }
    boxClick3() {
        this.setState({
            box3: !this.state.box3
        });
    }
    boxClick4() {
        this.setState({
            box4: !this.state.box4
        });
    }
    handleClick1() {
        this.setState({
            condition1: !this.state.condition1,
            condition2: false,
            condition3: false
        });
    }
    handleClick2() {
        this.setState({
            condition2: !this.state.condition2,
            condition1: false,
            condition3: false
        });
    }
    handleClick3() {
        this.setState({
            condition3: !this.state.condition3,
            condition1: false,
            condition2: false
        });
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Row className="BgImage">
                    <Col className="">
                        <Header active={0} />
                        <Row className="ContentMiddle paddingX">
                            <Col md="6" className="pl-md-0">
                                <div>
                                    <p className="heading mt-3">Welcome James Kennedy,</p>
                                    <p className="headingName">The Kennedy Eco Fund</p>
                                    <p className="headingNumber">VCEP0012346</p>
                                    <p className="heading my-4">Your financial advisor sent you a<br /> new contribution suggestion</p>
                                    <div className="View_Suggestion"><span className="View_Suggestion_Text">VIEW SUGGESTION</span><img src={require('../../../assets/images/if_arrow_right.png')} className="arrow_right_NC" /></div>
                                </div>
                            </Col>
                            <Col md="6" className="box-margin-top pr-md-0">
                                <div className="Whole_Shadow">
                                    <div className="d-flex">
                                        <div onClick={this.boxClick1} className={this.state.box1 ? " d-hidden " : "d-show "}>
                                            <div className="RectangleBlue mouse">
                                                <p className="BoxTitle text-white">Available <br />to Grant</p>
                                                <p className="BoxValue text-white">$600,000</p>
                                            </div>
                                        </div>
                                        <div onClick={this.boxClick1} className={this.state.box1 ? "BoxHoverBlue d-show mouse" : "BoxHoverBlue d-hidden"}>
                                            <div className="">
                                                <i class="fa-times fas float-right ml-24 mt-4 text-white"></i>
                                                <p className="BoxContentPadding BoxClickGrant text-white">Available to Grants</p>
                                                <p className="BoxContentPadding BoxClickAmount text-white">$600,000</p>
                                                <p className="BoxContentPadding BoxClickBigText text-white">Top charities in your community</p>
                                                <div className="BoxContentPadding BoxClickWhiteLine" /><br />
                                                <NavLink to="/step1"><span className="BoxContentPadding BoxClickSmallText text-white">Jewish Social Service Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br /></NavLink>
                                                <div className="BoxContentPadding BoxClickWhiteLine" /><br />
                                                <NavLink to="/step1"><span className="BoxContentPadding BoxClickSmallText text-white">Social Science Research Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br /></NavLink>
                                                <div className="BoxContentPadding BoxClickWhiteLine" /><br />
                                                <NavLink to="/step1"><span className="BoxContentPadding BoxClickSmallText text-white">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br /></NavLink>
                                                <div className="BoxContentPadding BoxClickWhiteLine" /><br />
                                                <NavLink to="/step1"><span className="BoxContentPadding BoxClickSmallText text-white">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i></NavLink>
                                                <NavLink to="/grantdashboard">
                                                    <div className="BoxClickRectangle" >
                                                        <span className="BoxClickRectangleText mr-3">VIEW ALL GRANTS</span><i class="fas fa-arrow-right BoxClickArrow"></i>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="RectangleWhite">
                                            <p className="BoxTitle">Scheduled <br />Grants</p>
                                            <p className="BoxValue">$400,000</p>
                                        </div>
                                        {/* <div onClick={this.boxClick2} className={this.state.box2 ? "BoxHoverWhite d-hidden" : "d-show"}>
                                            <div className="RectangleWhite">
                                                <p className="BoxTitle">Scheduled <br />Grants</p>
                                                <p className="BoxValue">$400,000</p>
                                            </div>
                                        </div> */}
                                        {/* <div onClick={this.boxClick2} className={this.state.box2 ? "BoxHoverWhite d-show" : "d-hidden"}>
                                        <div className="BoxContentPadding">
                                            <i class="fa-times fas float-right ml-24 "></i>
                                            <p className="BoxClickGrant ">Available to Grants</p>
                                            <p className="BoxClickAmount ">$600,000</p>
                                            <p className="BoxClickBigText ">Top charities in your community</p>
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Jewish Social Service Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Social Science Research Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i>
                                        </div>
                                        <div className="BoxClickRectangle" >
                                            <span className="BoxClickRectangleText mr-3">VIEW ALL GRANTS</span><i class="fas fa-arrow-right BoxClickArrow"></i>
                                        </div>
                                        </div> */}
                                    </div>

                                    <div className="d-flex">
                                        <div className="RectangleWhite">
                                            <p className="BoxTitle">Total <br />Balance</p>
                                            <p className="BoxValue">$1,000,000</p>
                                        </div>
                                        {/* <div onClick={this.boxClick3} className={this.state.box3 ? "BoxHoverWhite d-hidden" : "d-show"}>
                                        <div className="RectangleWhite">
                                            <p className="BoxTitle">Total <br />Balance</p>
                                            <p className="BoxValue">$1,000,000</p>
                                        </div>
                                        </div> */}
                                        {/* <div onClick={this.boxClick3} className={this.state.box3 ? "BoxHoverWhite d-show" : "d-hidden"}>
                                        <div className="BoxContentPadding">
                                            <i class="fa-times fas float-right ml-24 "></i>
                                            <p className="BoxClickGrant ">Available to Grants</p>
                                            <p className="BoxClickAmount ">$600,000</p>
                                            <p className="BoxClickBigText ">Top charities in your community</p>
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Jewish Social Service Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Social Science Research Agency</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i><br />
                                            <div className="BoxClickDarkLine" /><br />
                                            <span className="BoxClickSmallText ">Interaction Institute for Social Change</span><i class="fas fa-arrow-right text-white BoxClickArrow"></i>
                                        </div>
                                        <div className="BoxClickRectangle" >
                                            <span className="BoxClickRectangleText mr-3">VIEW ALL GRANTS</span><i class="fas fa-arrow-right BoxClickArrow"></i>
                                        </div>
                                        </div> */}
                                        <div className="RectangleWhite text-center">
                                            <img className="BoxAdd" src={require('../../../assets/images/add_large.png')} />
                                            <p className="BoxAdd-title">START GIVING</p>
                                        </div>
                                        {/* <div onClick={this.boxClick4} className={this.state.box4 ? "BoxHoverWhite d-hidden" : "d-show"}>
                                        <div className="RectangleWhite">
                                            <i className="fas fa-plus BoxAdd"></i>
                                            <p className="BoxAdd-title">Start Giving</p>
                                        </div>
                                        </div> */}
                                        {/* <div onClick={this.boxClick4} className={this.state.box4 ? "BoxHoverWhite d-show" : "d-hidden"}>
                                        <div className="BoxContentPadding">
                                            <i class="fa-times fas float-right ml-24"></i>
                                            <i className="fas fa-plus BoxAddHover"></i>
                                            <p className="BoxAdd-title">Start Giving</p>                                            
                                        </div>
                                        <div className="BoxClickRectangle" >
                                            <span className="BoxClickRectangleText mr-3">VIEW ALL GRANTS</span><i class="fas fa-arrow-right BoxClickArrow"></i>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX mt-5">
                            <Col className="px-md-0">
                                <Row className="">
                                    <Col className="">
                                        <span className="SectionHeading">Impact</span>
                                        <div className="LineImpact" />
                                    </Col>
                                </Row>
                                <Row className="mb-5">
                                    <Col md="6" className="">
                                        <div className="">
                                            <div>
                                                <p className="mb-0 Youve-granted-a-tot">You’ve granted a total of</p>
                                                <p className="Amount Amount-mar-top">$ 100,000</p>
                                                <p className="VIEW-DETAILS ">VIEW DETAILS <i className="view-detail-arrow fas fa-arrow-right ml-4"></i> </p>
                                            </div>
                                            <div className="SmallLine" ></div>
                                            <div className="">
                                                <p className="mb-0 Youve-granted-a-tot-2">Granting Goal</p>
                                                <p className="Amount Amount-mar-top">$ 4,440,000 </p>
                                                <p className="since-that-past-year">to reach your goal in 5 years</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6" className="">
                                        <div className="d-flex mt-5 h-75">
                                            <Card className="card1" style={{ borderTop: "unset", borderRight: "unset", borderBottom: "unset", boxShadow: "unset" }}>
                                                <div onClick={this.handleClick1} className={this.state.condition1 ? "Hover1 d-hidden" : "d-show3C"}>
                                                    <div className="CardDesignLogos">
                                                        <img className="CardDesignLogos ml-md-4 ml-3 mt-5" src={require('../../../assets/images/education.png')} />
                                                    </div>
                                                    <div className="CardDesign ml-24">
                                                        <p className="m-0 LayerPercentage">25%</p>
                                                        <p className="m-0 Education">Education</p>
                                                        <p className="mt-2 if-arrow-right margin-14"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>

                                                <div onClick={this.handleClick1} className={this.state.condition1 ? "Hover1 d-show3C" : "d-hidden"}>
                                                    <div className=" ml-4 ">                                                    
                                                        <img className="CardDesignLogos mt-5" src={require('../../../assets/images/education_active.png')} />  
                                                        <img className="close-card mt-5" src={require('../../../assets/images/tag_cancel.png')} />                                                      
                                                        <p className="ClickCardPercentage">25%</p>
                                                        <p className="ClickCardHeading">Education</p>
                                                        <p className="ClickCardAmount">$25,000</p>
                                                    </div>
                                                    <div className=" ml-4 ClickCardLine" />
                                                    <div className=" ml-4 ">
                                                        <div className="d-flex">
                                                            <div className="mr-4">                                                            
                                                                <p className="ClickCardNumbers">03</p>
                                                                <p className="ClickCardNumbersText">Upcoming</p>
                                                            </div>
                                                            <div className="">
                                                                <p className="ClickCardNumbers">12</p>
                                                                <p className="ClickCardNumbersText">Granted</p>
                                                            </div>
                                                        </div>
                                                        <p className="ClickCardArrow"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>
                                            </Card>
                                            <Card className="card1" style={{ borderTop: "unset", borderRight: "unset", borderBottom: "unset", boxShadow: "unset" }} >
                                                <div onClick={this.handleClick2} className={this.state.condition2 ? "Hover2 d-hidden" : "d-show3C"}>
                                                    <div className="CardDesignLogos">
                                                        <img className="CardDesignLogos ml-md-4 ml-3 mt-5" src={require('../../../assets/images/community.png')} />                                                        
                                                    </div>
                                                    <div className="CardDesign  ml-24">
                                                        <p className="m-0 LayerPercentage">25%</p>
                                                        <p className="m-0 Education">Community</p>
                                                        <p className="mt-2 if-arrow-right margin-14"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>

                                                <div onClick={this.handleClick2} className={this.state.condition2 ? "Hover2 d-show3C" : "d-hidden"}>
                                                    <div className=" ml-4 ">
                                                        <img className="CardDesignLogos mt-5" src={require('../../../assets/images/community_active.png')} />
                                                        <img className="close-card mt-5" src={require('../../../assets/images/tag_cancel.png')} />
                                                        <p className="ClickCardPercentage">25%</p>
                                                        <p className="ClickCardHeading">Community</p>
                                                        <p className="ClickCardAmount">$25,000</p>
                                                    </div>
                                                    <div className=" ml-4 ClickCardLine" />
                                                    <div className=" ml-4 ">
                                                        <div className="d-flex">
                                                            <div className="mr-4">
                                                                <p className="ClickCardNumbers">03</p>
                                                                <p className="ClickCardNumbersText">Upcoming</p>
                                                            </div>
                                                            <div className="">
                                                                <p className="ClickCardNumbers">12</p>
                                                                <p className="ClickCardNumbersText">Granted</p>
                                                            </div>
                                                        </div>
                                                        <p className="ClickCardArrow"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>
                                            </Card>

                                            <Card className="card1" style={{ borderTop: "unset", borderBottom: "unset", boxShadow: "unset" }}>
                                                <div onClick={this.handleClick3} className={this.state.condition3 ? "Hover3 d-hidden" : "d-show3C"}>
                                                    <div className="CardDesignLogos">
                                                        <img className="CardDesignLogos ml-md-4 ml-3 mt-5" src={require('../../../assets/images/church.png')} />
                                                    </div>
                                                    <div className="CardDesign  ml-24">
                                                        <p className="m-0 LayerPercentage">50%</p>
                                                        <p className="m-0 Education">Churches</p>
                                                        <p className="mt-2 if-arrow-right margin-14"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>

                                                <div onClick={this.handleClick3} className={this.state.condition3 ? "Hover3 d-show3C" : "d-hidden"}>
                                                    <div className=" ml-4 ">
                                                        <img className="CardDesignLogos mt-5" src={require('../../../assets/images/church_active.png')} />
                                                        <img className="close-card mt-5" src={require('../../../assets/images/tag_cancel.png')} />
                                                        <p className="ClickCardPercentage">50%</p>
                                                        <p className="ClickCardHeading">Churches</p>
                                                        <p className="ClickCardAmount">$50,000</p>
                                                    </div>
                                                    <div className=" ml-4 ClickCardLine" />
                                                    <div className=" ml-4 ">
                                                        <div className="d-flex">
                                                            <div className="mr-4">
                                                                <p className="ClickCardNumbers">03</p>
                                                                <p className="ClickCardNumbersText">Upcoming</p>
                                                            </div>
                                                            <div className="">
                                                                <p className="ClickCardNumbers">12</p>
                                                                <p className="ClickCardNumbersText">Granted</p>
                                                            </div>
                                                        </div>
                                                        <p className="ClickCardArrow"><i class="fas fa-arrow-right"></i></p>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="BgGrayNC p-xs-10">
                            <Row className="ContentMiddle paddingX">
                                <Col className="pb-5 px-md-0 mt-5">
                                    <span className="SectionHeading">Charities</span>
                                    <div className="LineCharities"></div>
                                </Col>
                            </Row>
                            <Row className="ContentMiddle paddingX">
                                <Col className="px-md-0 pb-3">
                                    <SearchAndFilter />
                                    <Tag />
                                    <InfoCard title="GRANT" />
                                    <div className="VIEW-MORE my-3">VIEW MORE <br /> <i class="fas fa-caret-down"></i></div>
                                </Col>
                            </Row>
                        </div>
                        <Row className="ContentMiddle paddingX">
                            <Col className="px-md-0 my-5">
                                <span className="SectionHeading">Latest news</span>
                                <div className="LineHead"></div>
                                <div className="mt-4">
                                    <div>
                                        <img src={require('../../../assets/images/news.png')} className="img-responsive icon-news" />
                                        <span className="NewsHead">Vanguard charitable & <span className="LeftSpace">summer reading list</span></span>
                                        <p className="NewsSubHead">If you have time this summer to read one (or many!) of the titles below</p>
                                        <div className="LineDivider"></div>
                                    </div>
                                    <div className="mt-2">
                                        <img src={require('../../../assets/images/news.png')} className="img-responsive icon-news" />
                                        <span className="NewsHead">Grant to charities to aid <span className="LeftSpace"> disaster relief efforts in</span> <span className="LeftSpace"> Guatemala</span></span>
                                        <p className="NewsSubHead">On June 3, two major eruptions from the Volcán del Fuego in Guatemala occurred which have devastated local communities</p>
                                        <div className="LineDivider"></div>
                                    </div>
                                    <div className="mt-2">
                                        <img src={require('../../../assets/images/news.png')} className="img-responsive icon-news" />
                                        <span className="NewsHead">Tax reform and its impact <span className="LeftSpace"> on philanthropy</span></span>
                                        <p className="NewsSubHead">Una was also gracious enough to spend a few extra minutes with us talking about other topics that are important to our donors.</p>
                                        <div className="LineDivider"></div>
                                    </div>
                                    <div className="mt-2">
                                        <img src={require('../../../assets/images/news.png')} className="img-responsive icon-news" />
                                        <span className="NewsHead">Lowering costs to <span className="LeftSpace">increase impact</span></span>
                                        <p className="NewsSubHead">Vanguard Charitable is committed to offering a low-cost, high-value donor-advised fund</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Footer />
                    </Col>
                </Row >
            </div >
        );
    }
}