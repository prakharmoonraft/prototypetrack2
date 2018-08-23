import React, { Component } from "react";
import './card.css';
import { Link } from 'react-router-dom';
export default class Submit extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <Link to={{ pathname: "/" + this.props.pathn }}>
                        <div className="Submit text-center">
                            <p className="SUBMIT-TEXT">SUBMIT <img src={require('../../../assets/images/if_arrow_right.png')} class="if-arrow-right-submit ml-3"></img></p>
                        </div>
                    </Link>
                </div>
            </div >
        );
    }
}