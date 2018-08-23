import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<Row className="footer">
					<Col>
						<Row className="ContentMiddle paddingX py-4">
							<Col className="">
								<Row >
									<Col md="4" className="p-md-4 p-3 imgcenter">
										<img src={require('../../assets/images/logo.png')} className="img-responsive logo" />
									</Col>
									<Col md="8" className="p-md-5 p-4">
										<Row>
											<Col md="4" xs="6" className="footer-items mouse ">
												<p>Career opportunities</p>
												<p className="pt-3">Privacy policy</p>
												<p className="pt-3">Help</p>

											</Col>
											<Col md="4" xs="6" className="footer-items mouse ">
												<p>Policies and guidelines</p>
												<p className="pt-3">Legal disclosure</p>
												<p className="pt-3">Site map</p>
											</Col>
											<Col md="4" xs="12" className="footer-items mouse pt-media-2">
												<Row>
													<Col xs="6" md="12"  >
														<p>Terms and conditions</p>
													</Col>
													<Col xs="6" md="12"  >
														<p className="pt-md-3">User agreement</p>
													</Col>
												</Row>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col>
										<p className="copyright text-center pt-md-2">© 2018 Vanguard Charitable Endowment Program</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}