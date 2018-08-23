import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './button.css';

  
export default class RoundBlue extends Component {

    render(){
        return (
            <Button type={ this.props.type } bsStyle="success" bsSize={ this.props.bsSize } className={`success success-outline ${ this.props.className}`}>{this.props.children}</Button>
        );
    }
}
// Specifies the default values for props:
RoundBlue.defaultProps = {
    children: 'Success'
  };