import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import "../Assets/Css/signup.css"

function SignUp() {
	const signUser = (event) =>{
		event.preventDefault();
		const newUser = {
			firstName:event.target[0].value,
			lastName:event.target[1].value,
			password:event.target[2].value,
			email:event.target[4].value,
			phoneNo:event.target[5].value
		}
		console.log(newUser);
	}
	return (
		<>
			<Container id="SignUpContainer">
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h1">User Sign Up</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={signUser}>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">First Name</label>
												<Form.Control
													placeholder="First name"
													type="text"></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Last Name</label>
												<Form.Control
													placeholder="Last name"
													type="text"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Password</label>
												<Form.Control
													placeholder="password"
													type="password"></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Confirm Password</label>
												<Form.Control
													placeholder="password"
													type="password"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Email</label>
												<Form.Control
													placeholder="Email"
													type="email"></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Phone No</label>
												<Form.Control
													placeholder="Phone no"
													type="text"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<div id="buttonPlacement">
										<Button
											className="btn-fill_SignUp"
											type="Submit"
											variant="info">
											Create Profile
										</Button>
									</div>
									<div id="Signuplinks">
										<a href="/login"><AiOutlineArrowLeft id ="iconStyle"/>Back</a>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SignUp;
