import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import image1 from '../../../assets/1.png';
import image2 from '../../../assets/2.png';
import image3 from '../../../assets/3.png';


const EditorsInsights = ({ view }) => {

    const table = view ? 3 : 1;

    return (
        <Row xs={table} md={table} lg={table} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsights;