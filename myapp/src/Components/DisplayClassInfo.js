import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function DisplayClassInfo({ obj }) {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const editData = (event) => {
		event.preventDefault();
		const newClass = {
			ClassID: event.target[0].value,
			ClassName: event.target[1].value,
			RoomNo: event.target[2].value,
			CourseID: event.target[3].value,
			ProfessorID: event.target[4].value,
		};
		console.log(newClass);
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
												Class ID
											</label>
											<Form.Control
												placeholder="Class ID"
												type="text"
												value={obj?.ClassID}
												readOnly></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Class Name
											</label>
											<Form.Control
												placeholder="Class Name"
												type="text"
												defaultValue={
													obj?.ClassName
												}></Form.Control>
										</Form.Group>
									</Col>
								</Row>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Room No
											</label>
											<Form.Control
												placeholder="Room No"
												type="text"
												defaultValue={
													obj?.RoomNo
												}></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Course ID
											</label>
											<Form.Control
												placeholder="Course ID"
												type="text"
												defaultValue={
													obj?.CourseID
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
				<td>{obj.ClassID}</td>
				<td>{obj.ClassName}</td>
				<td>{obj.RoomNo}</td>
				<td>{obj.CourseID}</td>
				<td>{obj.ProfessorID}</td>
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

export default DisplayClassInfo;
