import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DisplayCourseInfo({ obj }) {
	const [show, setShow] = useState(false);

	const editData = (event) => {
		event.preventDefault();
		const newCourse = {
			CourseID : event.target[0].value,
			CourseName: event.target[1].value,
			ProfessorID: event.target[2].value,
			CourseDescription: event.target[3].value
		};
		console.log(newCourse);
	};

	const handleClose = () => {
		return setShow(false);
	};

	const handleShow = () => {
		return setShow(true);
	};

	return (
		<>
			<tr>
				<td>{obj.CourseID}</td>
				<td>{obj.CourseName}</td>
				<td>{obj.ProfessorID}</td>
				<td>{obj.CourseDescription}</td>
				<td>
					<FontAwesomeIcon
						id="viewIcon"
						title="View Details"
						icon={faEye}
						onClick={handleShow}
					/>
				</td>
			</tr>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Page</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Form onSubmit={editData}>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Course ID</label>
												<Form.Control
													placeholder="Course ID"
													type="text"
													value={obj?.CourseID}
													readOnly></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Course Name</label>
												<Form.Control
													placeholder="Course Name"
													type="text"
													defaultValue={obj?.CourseName}></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Professor ID</label>
												<Form.Control
													placeholder="Professor ID"
													type="text"
													defaultValue={obj?.ProfessorID}></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Course Description</label>
												<Form.Control
													placeholder="Course Description"
													type="text"
													defaultValue={obj?.CourseDescription}></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<div id="buttonPlacement">
										<Button
											className="btn-fill_SignUp"
											type="Submit"
											variant="info">
											Edit
										</Button>
									</div>
								</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default DisplayCourseInfo;
