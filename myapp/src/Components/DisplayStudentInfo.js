import React, { useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Row, Col } from "react-bootstrap";

import "../Assets/Css/modal.css";

function DisplayInfo({ obj }) {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const editData = (event) => {
		event.preventDefault();
		const newUser = {
			StudentID: event.target[0].value,
			firstName: event.target[1].value,
			lastName: event.target[2].value,
			Gender: event.target[3].value,
			Age: event.target[4].value,
		};
		console.log(newUser);
	};

	return (
		<>
			{showModal && (
				<div className="custom-modal">
					<div className="modal-content">
						<span className="close" onClick={toggleModal}>
							&times;
						</span>
						<h2>Student Details</h2>
						{
							<Form onSubmit={editData}>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Student ID
											</label>
											<Form.Control
												placeholder="Student ID"
												type="text"
												value={obj?.StudentID}
												readOnly></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												First Name
											</label>
											<Form.Control
												placeholder="First Name"
												type="text"
												defaultValue={
													obj?.firstName
												}></Form.Control>
										</Form.Group>
									</Col>
								</Row>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Last Name
											</label>
											<Form.Control
												placeholder="Last Name"
												type="text"
												defaultValue={
													obj?.lastName
												}></Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Age
											</label>
											<Form.Control
												placeholder="Age"
												type="text"
												defaultValue={
													obj?.Age
												}></Form.Control>
										</Form.Group>
									</Col>
								</Row>
								<Row className="SignleRowEntities">
									<Col>
										<Form.Group className="credentials">
											<label className="Formlabel">
												Gender
											</label>
											<Form.Control
												placeholder="Gender"
												type="text"
												defaultValue={
													obj?.Gender
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
				<td>{obj.StudentID}</td>
				<td>{obj.firstName}</td>
				<td>{obj.lastName}</td>
				<td>{obj.Gender}</td>
				<td>{obj.Age}</td>
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

export default DisplayInfo;
