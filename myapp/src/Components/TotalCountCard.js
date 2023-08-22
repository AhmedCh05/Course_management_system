import React from "react";
import { Card, Container, Row, Col} from "react-bootstrap";


export default function TotalCountCard (credentials){
	  
    return(
        <Container>
				<Row>
					<Col>
						<Card>
							<Card.Header>
								<Card.Title as="h1">Hello, </Card.Title>
							</Card.Header>
							<Card.Body>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
    );
}