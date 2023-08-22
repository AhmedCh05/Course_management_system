import React from "react";
import DisplayStudentInfo from "../Components/DisplayStudentInfo";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import students from '../Db_files/Student';
import '../Assets/Css/studentrecords.css';

function ListStudents() {
  return (
    <div className="list-students">
      <Container fluid>
        <Row>
          <Col>
            <Card className="student-card">
              <Card.Header className="card-header">
                <div>
                  <Card.Title as="h4">Student Records</Card.Title>
                </div>
                <p className="subheading">
                  All Registered Students
                </p>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students?.map((student) => (
                      <DisplayStudentInfo key={student.StudentID} obj={student} />
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

export default ListStudents;
