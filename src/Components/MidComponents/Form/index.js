import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';

export default class CardForm extends Component {
    render() {
        return (
            <Form className="greyBG p-2">
                <img src={require('../../images/elon.jpg')} width="50%" />
                <p className="font-12 primaryFont pt-1">Ann Gill</p>
                <hr/>
                <p className="font-14 blueFont mouse">Subscribe to blog email updates</p>
                <FormGroup>
                    <Label for="exampleTitle" className="primaryFont font-12">Title</Label>
                    <Input type="text" name="title" id="exampleTitle" />
                </FormGroup>
                <FormGroup>
                    <Label for="firstName" className="primaryFont font-12">First Name</Label>
                    <Input type="text" name="firstname" id="firstName" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName" className="primaryFont font-12">Last Name</Label>
                    <Input type="text" name="lastname" id="lastName" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail" className="primaryFont font-12">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                </FormGroup>
                <Button className="mr-2 blueButton font-12 pb-4">Subscribe</Button>
                <Button className="blueButton font-12 pb-4">Unsubscribe</Button>
            </Form>
        );
    }
}