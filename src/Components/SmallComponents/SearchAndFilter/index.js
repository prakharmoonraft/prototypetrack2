import React, { Component } from "react";
import './SearchAndFilter.css';
import { Row, Col, FormGroup, Input } from 'reactstrap';

export default class SearchAndFilter extends Component {
    render() {
        return (
            <div className="d-md-flex">
                <Col md="4" className="pl-md-0 sf-px-0">
                    <FormGroup>
                        <Input className="InnerTerm BRadius pb-10" type="text" name="SSN" id="SSN" placeholder="Search" /><i className="fas fa-search SearchIcon"></i>
                    </FormGroup>
                </Col>
                <Col md="4" className="sf-px-0">
                    <FormGroup>
                        <Input className="InnerTerm BRadius DownCaret" type="select" name="select" id="exampleSelect" >
                            <option>Filter by region</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md="4" className="pr-md-0 sf-px-0">
                    <FormGroup>
                        <Input className="InnerTerm BRadius DownCaret" type="select" name="select" id="exampleSelect" >
                            <option>Filter by gross receipts</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                </Col>
            </div >
        );
    }
}