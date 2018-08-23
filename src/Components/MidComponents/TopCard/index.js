import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import './TopCard.css';

const DetailsCard = (props) => {
    return (
        <div>
            <Card className="mt-4">
                <div className="Rectangle-7 SILVER">
                    <i class="fas fa-star"></i>
                    <span className="marginLeft">SILVER</span>
                </div>
                <CardBody>
                    <div className="card-tag">Churches</div>
                    <Row>
                        <Col md="10">
                            <Row>
                                <Col>
                                    <p className="card-head md-3">Jewish social service agency</p>
                                </Col>
                            </Row>
                            <div className="d-flex my-3 ">
                                <div className="Rectangle-Gray1">
                                    <p className="card-location p-1">Rockville, MD </p>
                                </div>
                                <div className="ml-2 Rectangle-Gray">
                                    <p className="card-location p-1">EIN: 53-0196598</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="card-para">Montgomery County, Maryland and Northern Virginia meet emotional, social, and physical challenges for more than 120 years. JSSA serves.</div>
                    <div className="mt-3">
                        <span className="card-money mr-4"><img src={require('../../../assets/images/gross_receipts.png')} className="if_header-account-image-line_1540176 mr-2" />$48,564,283</span>
                        <span className="card-money "><img src={require('../../../assets/images/profile.png')} className="if_header-account-image-line_1540176 mr-2" />Education and Health</span>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default DetailsCard;