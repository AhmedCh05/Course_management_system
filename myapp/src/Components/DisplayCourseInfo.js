import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function DisplayCourseInfo({ obj }) {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const editData = (event) => {
		event.preventDefault();
		const newCourse = {
			CourseID: event.target[0].value,
			CourseName: event.target[1].value,
			ProfessorID: event.target[2].value,
			CourseDescription: event.target[3].value,
		};
		console.log(newCourse);
	};

	return (
		<>
			{showModal && (
				<div className="custom-modal">
					<div className="modal-content">
						<span className="close" onClick={toggleModal}>
							&times;
						</span>
						<h2>Course Details</h2>
						{
							<Form onSubmit={editData}>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Course ID
											</label>
											<Form.Control
												placeholder="Course ID"
												type="text"
												value={obj?.CourseID}
												readOnly></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Course Name
											</label>
											<Form.Control
												placeholder="Course Name"
												type="text"
												defaultValue={
													obj?.CourseName
												}></Form.Control>
										</Form.Group>
									</Col>
								</Row>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Professor ID
											</label>
											<Form.Control
												placeholder="Professor ID"
												type="text"
												defaultValue={
													obj?.ProfessorID
												}></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Course Description
											</label>
											<Form.Control
												as="textarea"
												rows={4}
												placeholder="Course Description"
												type="text"
												style={{
													width: "100%",
													boxSizing: "border-box",
													resize: "none",
													fontFamily: "inherit",
												}}
												defaultValue={
													obj?.CourseDescription
												}></Form.Control>
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
						}
					</div>
				</div>
			)}

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
						onClick={toggleModal}
					/>
				</td>
			</tr>
		</>
	);
}

export default DisplayCourseInfo;
