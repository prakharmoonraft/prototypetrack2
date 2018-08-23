import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Card.css';
import Dropdowns from '../../SmallComponents/Dropdown';

const StepCard = (props) => {
    return (
        <div>
            
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

        </div>
    );
};

export default StepCard;