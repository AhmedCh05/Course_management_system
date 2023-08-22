import React from "react";
import DisplayClassInfo from "../Components/DisplayClassInfo";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import Classes from "../Db_files/Classes";

function ListClasses() {
	return (
		<div className="list-Classes">
			<Container fluid>
				<Row>
					<Col>
						<Card className="Classes-card">
							<Card.Header className="card-header">
								<div>
									<Card.Title as="h4">
										Classes Records
									</Card.Title>
								</div>
								<p className="subheading">
									All Registered Classes
								</p>
							</Card.Header>
							<Card.Body>
								<Table responsive>
									<thead>
										<tr>
											<th>Class ID</th>
											<th>Class Name</th>
											<th>Room No</th>
											<th>Course ID</th>
											<th>Professor ID</th>
										</tr>
									</thead>
									<tbody>
										{Classes?.map((Class) => (
											<DisplayClassInfo
												key={Class.ClassID}
												obj={Class}
											/>
										))}
									</tbody>
								</Table>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ListClasses;
