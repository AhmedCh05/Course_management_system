import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../Assets/Css/totalcountcard.css";
import students from "../Db_files/Student";

export default function TotalCountCard() {
	let totalStudents = students.length;
	return (
		<Container>
			<Row>
				<Col>
					<Card className="CountNamecard">
						<Card.Header className="CountCard-header">
							<Card.Title className="Countcard-title">
								Total Students
							</Card.Title>
						</Card.Header>
						<Card.Body className="Countcard-body">
							<h2 id="countSTD">{totalStudents}</h2>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
