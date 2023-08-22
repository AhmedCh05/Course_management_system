import React from "react";
import DisplayCourseInfo from "../Components/DisplayCourseInfo";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import Courses from '../Db_files/Course';
import '../Assets/Css/courserecords.css'

function ListCourses() {
  return (
    <div className="list-Courses">
      <Container fluid>
        <Row>
          <Col>
            <Card className="Course-card">
              <Card.Header className="card-header">
                <div>
                  <Card.Title as="h4">Course Records</Card.Title>
                </div>
                <p className="subheading">
                  All Registered Courses
                </p>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Course ID</th>
                      <th>Course Name</th>
                      <th>Professor ID</th>
                      <th>Course Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Courses?.map((Course) => (
                      <DisplayCourseInfo key={Course.CourseID} obj={Course} />
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

export default ListCourses;
