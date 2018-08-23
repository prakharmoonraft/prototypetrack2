import React, { Component } from 'react';
import './Step1.css';
import BackAndNext from '../../../SmallComponents/Card/BackAndNext';
import { Card, Row, Col, Input, Label } from 'reactstrap';
import DetailsCard from "../../../MidComponents/TopCard";
import Header from '../../../Header';
import Footer from '../../../Footer';


export default class Step1 extends Component {
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
                            <Col className="px-md-0">
                                <span className="Make-a-New-Grant">Make a new grant</span>
                                <hr className="Line-g-s2" />
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX">
                            <Col className="p-xs-0 px-md-0">
                                <DetailsCard />
                            </Col>
                        </Row>
                        <Row className="ContentMiddle paddingX my-5">
                            <Col className="px-md-0">
                                <Card className="BBottom" >
                                    <div className="Step-2-Grant-Alloca marginTop"><span className="text-style-1">Step 1:</span> Enter grant details</div>
                                    <div >
                                        <div className="row justify-content-center mb-5">
                                            <div className="col-md-6 stepper-media">
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="">
                                                        <div className="Oval-9-outer" >
                                                            <div className="Oval-9-center">
                                                                <div className="Oval-9-Gradient">
                                                                    <div className="OnNumber-G">1</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G">2</div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G">3</div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="Oval-9-3_4 " >
                                                            <div className="OffNumber-G">4</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="line-behind-oval"> </div >
                                            </div>
                                        </div>
                                    </div>
                                    <Row className="px-md-5 px-3 oval-down  mt-5">
                                        <Col>
                                            <Row>
                                                <Col md="4" className="grand-amounttop" >
                                                    <Label>
                                                        <span className="Input-Heading">Grant amount</span>
                                                    </Label>
                                                    <Input className="BRadius Input-text-su1" placeholder="$5000 " />
                                                </Col>
                                                <Col md="4" >
                                                    <Label className="">
                                                        <span className="Input-Heading">Frequency</span>
                                                    </Label>
                                                    <Input className="BRadius Input-text-su1 DownCaret h-58" type="select">
                                                        <option>Monthly</option>
                                                    </Input>
                                                </Col>
                                                <Col md="4" >
                                                    <Label className="">
                                                        <span className="Input-Heading">Number of frequency</span>
                                                    </Label>
                                                    <Input className="BRadius Input-text-su1 DownCaret h-58" type="select">
                                                        <option>6</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3"  >
                                                <Col md="4" className="" >
                                                    <p className="Input-Heading  topmshedule mt-2 schedue mb-2">Scheduled date</p>
                                                    <Input className=" BRadius Input-text-su1" name="date" id="exampleDate" placeholder="22/06/2018" >
                                                    </Input>
                                                </Col>
                                                <Col md="4" className="mt-2">
                                                    <span className="Input-Heading mb-md-5 ">Last date</span>
                                                    <p className="layer-step-1  mt-3">12/12/2018</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-3 leftt1">
                                                <Col className="ml-5 mt-3">
                                                    <Row className=" mt-2 leftt">
                                                        <Col className="d-flex">
                                                            <p className="Input-Heading  spacehead">Grant purpose</p>
                                                            <div className="Oval-2-step-1 mx-md-3 mx-2">
                                                                <p className="i">i</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row className=" leftt mt-3">
                                                        <Col className="d-flex">
                                                            <p className="Lorem-ipsum-dolor-si">
                                                                Is this grant to a religious organization?
                                                    </p>
                                                        </Col>
                                                        <Col md="8" className="mr-radio">
                                                            <span className="ml-5">
                                                                <Input className="radio rd" type="radio" name="radio1" />{' '}
                                                                <span className="Yes">Yes</span>
                                                            </span>
                                                            <span className="ml-5">
                                                                <Input className="radio rd" type="radio" name="radio1" />{' '}
                                                                <span className="Yes">No</span>
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                    <Row className=" leftt mt-4">
                                                        <Col className="d-flex">
                                                            <p className="Lorem-ipsum-dolor-si">
                                                                Is this grant for a specific purpose?
                                                 </p>
                                                        </Col>
                                                        <Col md="8" className="mr-radio">
                                                            <span className="ml-5">
                                                                <Input className="radio rd" type="radio" name="radio2" />{' '}<span className="Yes">Yes</span>
                                                            </span>
                                                            <span className="ml-5">
                                                                <Input className="radio rd" type="radio" name="radio2" />{' '}<span className="Yes">No</span>
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="ml-md-4 mt-4" >
                                                <Col>
                                                    <Row className="bottom-mar">
                                                        <Col md="4" className="botspace bottom-mar">
                                                            <Label className=" Input-Heading">Define purpose*</Label>
                                                            <Input className="BRadius Input-text-su1 DownCaret h-58" type="select">
                                                                <option >Charity event</option>
                                                            </Input>
                                                        </Col>
                                                        <Col md="8" className="">
                                                            <Label className=" Input-Heading ">Enter details of purpose</Label>
                                                            <Input className="BRadius Input-text-su1" placeholder="Annual fundraiser  " />
                                                        </Col>
                                                    </Row>
                                                    {/* <Row className="bottom-mar">
                                                        <Col className="leftt2">
                                                            <p className="Input-Heading  spacehead mb-1">
                                                                Grant recognition and permission to publish </p>
                                                            <p className="Lorem-ipsum-dolor-si mb-1">
                                                                Entering (or not entering) the following information will customize the grant letter and affect the grant recepient’s options for responding to and/or publishing the grant information.
                                                            </p>
                                                        </Col>
                                                    </Row> */}
                                                    <Row className="bottom-mar">
                                                        <Col className="leftt2">
                                                            <p className="Input-Heading spacehead mb-1 mt-4">Grant recognition</p>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="middlebox mx-md-1 mb-5">
                                                <Col className="mx-md-5 mx-3">
                                                    <Row className="my-md-3 my-2 ">
                                                        <Col className="Lorem-ipsum-dolor-si mt-3">
                                                            <Input className="form-check-input-s1 radio" type="radio" name="radio3" />{' '}
                                                            Account advisor name(s) address(s), and philanthropic account name
                                                        </Col>
                                                    </Row>
                                                    <Row className="my-md-3 ">
                                                        <Col className="d-flex Lorem-ipsum-dolor-si">
                                                            <Input className="form-check-input-s1 radio" type="radio" name="radio3" />{' '}
                                                            Account advisor name(s) address(s), and philanthropic account name and a third party (individual or organization)
                                                            <div className="Oval-2-step-1 mx-md-3 mx-2"><p className="i">i</p></div>
                                                        </Col>
                                                    </Row>
                                                    <Input className="Rectangle-11 boxwidth bottom" type="textarea" name="text" id="exampleText" />
                                                    <Row className="my-md-3">
                                                        <Col className="bottom By-checking-this-box chekbox1">
                                                            <Input type="checkbox" className="rd" />
                                                            <span className="small-text-step1">
                                                                Do not include account advisor information on the letter accompanying the check sent
                                                            </span>
                                                            <div className="small-text-step1">to the grantee organization.</div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="d-flex bottom  Lorem-ipsum-dolor-si">
                                                            <Input className="form-check-input-s1 radio By-checking-this-box" type="radio" name="radio3" />{' '}
                                                            Account name only : [The Jack and Mary morrison Fund]
                                                            <div className="Oval-2-step-1 mx-md-3 mx-2"><p className="i">i</p></div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="d-flex bottom  Lorem-ipsum-dolor-si">
                                                            <Input className="form-check-input-s1 radio By-checking-this-box" type="radio" name="radio3" />{' '}
                                                            Annonymous
                                                            <div className="Oval-2-step-1 mx-md-3 mx-2"><p className="i">i</p></div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="bottom mt-md-5  my-5 small-text-step1">
                                                            <p className="Terms-and-Condition Terms-and-Condition-mar mb-4">
                                                                Terms and Condition</p>
                                                            <Input type="checkbox" className="By-checking-this-box " />
                                                            <span className="small-text-step1 ">
                                                                By checking this box and clicking Submit you certify on behalf of all authorized parties on this account that the information above is correct. You also certify that you have read Vanguard Charitable's Joircres and guidelines booklet.
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <BackAndNext pathb="welcome" pathn="step2" />
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


