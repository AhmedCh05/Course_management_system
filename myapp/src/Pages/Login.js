import React, { useEffect, useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import "../Assets/Css/login.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import credentials from "../Db_files/loginCredentials";
import { useNavigate } from "react-router-dom";

function Login() {
	const [authenticated, setAuthenticated] = useState(false); // Initialize with false
	const [response, setResponse] = useState(null); // Initialize with null
	const navigate = useNavigate();

	const authenticateUser = (event) => {
		event.preventDefault();
		const foundEntry = credentials.find(
			(item) =>
				item.email === event.target[0].value &&
				item.password === event.target[1].value
		);

		if (foundEntry) {
			setAuthenticated(true);
			setResponse(foundEntry);
		} else {
			setAuthenticated(false);
		}
	};

	useEffect(() => {
		if (authenticated) {
			localStorage.setItem("authenticate", authenticated);
			localStorage.setItem("id", response.id);
			navigate("/dashboard");
		} else if (authenticated === false) {
			alert("Wrong Credentials! Please Enter Again");
		}
	}, [authenticated, response, navigate]);

	return (
		<>
			<Container id="Logincontainer">
				<Row>
					<Col>
						<Card className="Logincard">
							<Card.Header className="Logincard-header">
								<Card.Title as="h1">User Login</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={authenticateUser}>
									<Row>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">
													Email
												</label>
												<Form.Control
													placeholder="Email"
													type="email"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">
													Password
												</label>
												<Form.Control
													placeholder="password"
													type="password"></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<div>
										<Button
											className="btn-fill pull-right"
											type="Submit"
											variant="info">
											Login
										</Button>
									</div>
								</Form>
								<div id="links">
									<a href="/forgetPassword">
										Forget Password
									</a>
									<a href="/signup">
										SignUp
										<AiOutlineArrowRight id="iconStyle" />
									</a>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Login;
