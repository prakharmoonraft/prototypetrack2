import React, { Component } from "react";
import './Tag.css';

export default class Tag extends Component {
    render() {
        return (
            <div>
                <div className="d-flex mt-2 mb-4">
                    <div className="Rectangle-tag d-flex justify-content-around mr-2"><p className="Churche">Churches </p><img src={require('../../../assets/images/tag_cancel.png')} className="tag-cross" /></div>
                    <div className="Rectangle-tag d-flex justify-content-around mr-2"><span className="Churche">Education </span><img src={require('../../../assets/images/tag_cancel.png')} className="tag-cross" /></div>
                    <div className="Rectangle-tag d-flex justify-content-around mr-2 w-14"><span className="Churche">My Community </span><img src={require('../../../assets/images/tag_cancel.png')} className="tag-cross" /></div>
                    <img src={require('../../../assets/images/add_account_advisor.png')} className="add_tag" />
                </div>
            </div >
        );
    }
}