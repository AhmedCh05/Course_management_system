import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Assets/Css/dashboardicon.css";
import professor from "../Db_files/Professor";
import courses from "../Db_files/Course";

export default function DashBoardIcon() {
	let professorCount = professor.length;
	let coursesCount = courses.length;
	return (
		<Container style={{ marginRight: "200px" }}>
			<Row>
				<Col>
					<Card className="DashIconcard">
						<Card.Body className="DashIconcard-body">
							<div>
								<h2 style={{ color: "#007bff", margin: "0" }}>
									Total Professors
								</h2>
								<h2 style={{ color: "#007bff8c", margin: "0" }}>
									{professorCount}
								</h2>
							</div>
							<hr />
							<div>
								<h2 style={{ color: "#007bff", margin: "0" }}>
									Courses Count
								</h2>
								<h2 style={{ color: "#007bff8c", margin: "0" }}>
									{coursesCount}
								</h2>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
