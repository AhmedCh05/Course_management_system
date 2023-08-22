import React from "react";
import DisplayProfessorInfo from "../Components/DisplayProfessorInfo";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import Professors from '../Db_files/Professor';
import '../Assets/Css/professorrecords.css'

function ListProfessors() {
  return (
    <div className="list-Professors">
      <Container fluid>
        <Row>
          <Col>
            <Card className="Professor-card">
              <Card.Header className="card-header">
                <div>
                  <Card.Title as="h4">Professor Records</Card.Title>
                </div>
                <p className="subheading">
                  All Registered Professors
                </p>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Professor ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Professors?.map((Professor) => (
                      <DisplayProfessorInfo key={Professor.ProfessorID} obj={Professor} />
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

export default ListProfessors;
