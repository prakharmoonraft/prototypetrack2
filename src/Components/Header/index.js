import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';
import './header.css';

export default class Footer extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div className="ContentMiddle paddingX p-xs-10 pt-3 mb-5">
				<Navbar expand="md" light >
					<NavbarBrand href="/newconcept"><img src={require('../../assets/images/logo.png')} className="img-responsive logo" /></NavbarBrand>
					<NavbarToggler onClick={this.toggle} className="mt-4 menuButton"/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="HeaderPosition" navbar>
							<NavItem className="nav-item-space">
								<NavLink href="/newconcept">Dashboard</NavLink>
							</NavItem>
							<NavItem className="nav-item-space">
								<NavLink href="/grantdashboard">Grants</NavLink>
							</NavItem>
							<NavItem className="nav-item-space">
								<NavLink href="#">Contribute</NavLink>
							</NavItem>
							<NavItem className="nav-item-space">
								<NavLink href="#">Report</NavLink>
							</NavItem>
							<NavItem className="">
								<NavLink href="#">Profile</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}