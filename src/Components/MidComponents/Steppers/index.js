import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card.css';
import Dropdowns from '../../SmallComponents/Dropdown';
import Tables from '../Table';

const StepCard = (props) => {
    return (
        <div>
            <Card className="Shadow">
                <CardImg top width="100%" />
                <CardBody>
                    <CardTitle className="Step-2-Grant-Alloca"><span className="text-style-1">Step 2:</span> Grant Allocation</CardTitle>
                    <CardSubtitle className="Start-allocating-Fun">Start allocating Funds to the Charity you selected</CardSubtitle>
                    <CardText></CardText>

                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between">
                                <div className="">
                                    <div className="Oval-9 " >
                                        <div className="layer_1">1</div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="Oval-9-outer" >
                                        <div className="Oval-9-center">
                                            <div className="Oval-9-Gradient">
                                                <div className="layer_2">2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="Oval-9-3_4 " >
                                        <div className="layer-3_4">3</div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="Oval-9-3_4 " >
                                        <div className="layer-3_4">4</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line-behind-oval"> </div >
                            <div className="line-behind-oval-blue"> </div >
                        </div>
                    </div>


                    <div className="row justify-content-center mt-40" >
                        <div className="col-4">
                            <div className="Investment-Preferenc">Investment Preference</div>
                        </div>
                    </div>
                    <div className="row  overflow justify-content-center" >
                        <div className="col-4">
                            <Dropdowns />
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col tablePadding">
                            <Tables />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default StepCard;