import React, { Component } from "react";
import './card.css';
import { NavLink } from 'react-router-dom';
export default class BackAndNext extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <NavLink to={{ pathname: "/" + this.props.pathb }}>
                        <div className="Back text-center d-inline-block">
                            <p className="Back-Text"><img src={require('../../../assets/images/if_arrow_left.png')} class="if_arrow-left mr-3"></img>BACK</p>
                        </div>
                    </NavLink>
                    <NavLink to={{ pathname: "/" + this.props.pathn }}>
                        <div className="Next text-center d-inline-block">
                            <p className="Next-Text">NEXT<img src={require('../../../assets/images/if_arrow_right.png')} class="if_arrow-right ml-3"></img></p>
                        </div>
                    </NavLink>
                </div>
            </div >
        );
    }
}