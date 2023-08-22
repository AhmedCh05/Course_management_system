import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DisplayProfessorInfo({ obj }) {
	const [show, setShow] = useState(false);

	const editData = (event) => {
		event.preventDefault();
		const newUser = {
			ProfessorID : event.target[0].value,
			firstName: event.target[1].value,
			lastName: event.target[2].value,
			Subject: event.target[3].value
		};
		console.log(newUser);
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
				<td>{obj.ProfessorID}</td>
				<td>{obj.firstName}</td>
				<td>{obj.lastName}</td>
				<td>{obj.Subject}</td>
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
												<label className="Formlabel">Professor ID</label>
												<Form.Control
													placeholder="Student ID"
													type="text"
													value={obj?.ProfessorID}
													readOnly></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">First Name</label>
												<Form.Control
													placeholder="First Name"
													type="text"
													defaultValue={obj?.firstName}></Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row className="SignleRowEntities">
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Last Name</label>
												<Form.Control
													placeholder="Last Name"
													type="text"
													defaultValue={obj?.lastName}></Form.Control>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="credentials">
												<label className="Formlabel">Subject</label>
												<Form.Control
													placeholder="Subject"
													type="text"
													defaultValue={obj?.Subject}></Form.Control>
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

export default DisplayProfessorInfo;
