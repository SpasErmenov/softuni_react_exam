import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start py-3">
                        ©Spyro Cars ООД
                    </Col>
                    <Col md={6} className="text-center text-md-end py-3">
                        <Button variant="outline-secondary me-2">About us</Button>
                        <Button variant="outline-secondary">Contact us</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};