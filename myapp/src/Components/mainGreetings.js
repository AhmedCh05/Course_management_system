import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Assets/Css/main-greetings.css";
import DashBoardIcon from "./DashBoardIcon";
import TotalCountCard from "./TotalCountCard";
import ListClasses from "../Pages/ListClasses";

export default function MainGreetings(credentials) {
	const id = localStorage.getItem("id");
	let foundEntry = null;
	for (const key in credentials) {
		// eslint-disable-next-line eqeqeq
		if (credentials[key]?.id == id) {
			foundEntry = credentials[key];
			break;
		}
	}

	return (
		<Container id="GreetingsNameContainer">
			<Row>
				<Col>
					<Card className="Namecard">
						<Card.Header className="GreetingName-header">
							<Card.Title as="h1">
								Hello{" "}
								{foundEntry?.firstName +
									" " +
									foundEntry?.lastName}
								,{" "}
							</Card.Title>
						</Card.Header>
					</Card>
				</Col>
			</Row>
			<Row className="cards-row">
				<Col>
					<TotalCountCard />
				</Col>
				<Col>
					<DashBoardIcon />
				</Col>
			</Row>
			<Row
				style={{ marginTop: "10px" }}
				className="align-items-center justify-content-center">
				<ListClasses />
			</Row>
		</Container>
	);
}
