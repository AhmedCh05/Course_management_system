import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import '../Assets/Css/forgetpass.css'
import {AiOutlineArrowLeft} from 'react-icons/ai';
import credentials from "../Db_files/loginCredentials";

function ForgetPassword() {
	const resetPassword = (event) =>{
		event.preventDefault();
		const foundEmail = credentials.find(item => item.email === event.target[0].value);
		console.log(!!foundEmail);
	}
	return (
		<>
			<Container id="forgetPasscontainer">
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h1">Forget Password</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={resetPassword}>
									<Row>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Email</label>
												<Form.Control
													placeholder="Email"
													type="email"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<div id ="buttonPlacementForgetpass">
										<Button
											className="ForgetPassbtn-fill pull-right"
											type="Submit"
											variant="info">
											Reset Password
										</Button>
									</div>
								</Form>
                                <div id="links">
								<a href="/login"><AiOutlineArrowLeft id="iconStyle"/>Back</a>
                                </div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ForgetPassword;
