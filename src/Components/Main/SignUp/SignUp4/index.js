import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import './SignUp4.css';
import BackAndCreate from "../../../SmallComponents/Card/BackAndCreate";
import Header from '../../../Header';
import Footer from '../../../Footer';

export default class Card2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="">
                <Row className="Gradient">
                    <Col>
                        <Header />
                        <Row className="ContentMiddle paddingX my-5">
                            <Col className="p-xs-0">
                                <Card className="BBottom pt-5 card-padt">
                                    <Row className="pady">
                                        <Col>
                                            <p className="p1">By clicking Submit you certify on behalf of all authorized parties on this account that There is no agreement written or verbal, in place with the grantee organization that may</p>
                                        </Col>
                                    </Row>
                                    <Row className="padz mt-3">
                                        <Col>
                                            <ul className="ul-leftpad">
                                                <li className="ul1">Modify the grant purpose in any way </li>
                                                <li className="ul1">Allow you and other Disqualified Persons* any legal right to direct the use of the funds</li>
                                                <li className="ul1">Support a legally binding pledge. fulfill a grant or satisfy a legal obligation that you, another Disqualified Person. or an organization that is not eligible to receive grants from Vanguard Charitable may owe to the grantee organization </li>
                                                <li className="ul1">Support any expenses related to a Disqualified Person including but not limited to, tickets. auctions sporting events. admission scholarships. missionary support or other cash. goods. services or grants  </li>
                                                <li className="ul1">Require the grant funds to be used to fund a lobbying communication that reflects a view of support or opposition to specific legislation </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row className="pady">
                                        <Col>
                                            <p className="heading1">Further. you certify that: </p>
                                        </Col>
                                    </Row>
                                    <Row className="padz mt-3">
                                        <Col >
                                            <ul className="ul-leftpad">
                                                <li className="ul2">You will not claim an additional charitable deduction for this grant recommendation.
                                                    even if the grantee organization erroneously sends a charitable
                                                    contribution tax deduction substantiation letter to the recommending donor or account advisor </li>
                                                <li className="ul2">You do not control the grantee organization either
                                                    solely in your individual capacity or together with other Disqualified Persons </li>
                                                <li className="ul2">If the recommended grant is for a supporting organization, neither you nor any
                                                    Disqualified Person directly or indirectly control any supported organization of the grantee </li>
                                                <li className="ul2"> If the recommended grant is for a supporting organization, neither you
                                                    nor any Disqualified Person directly or indirectly control any supported organization of the grantee</li>
                                                <li className="ul2">You have no reason to believe grant funds will be used in violation of any Office of Foreign
                                                    Assets Control (OFAC) Rule(s) as defined by the U.S. Department of the Treasury. and you agree to
                                                    notify Vanguard Charitable if you become aware that grant funds may be used in violation of any
                                                    OFAC Rule(s)
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row className="pady mb-5">
                                        <Col >
                                            <p className="p2">
                                                *A Disqualified Person includes you and any other account advisors, other authorized parties on your account.
                                                 your family members. and certain entities that you own or control.
                                            </p>
                                        </Col>
                                    </Row>
                                    <BackAndCreate pathb="signup3" pathn="welcome" />
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