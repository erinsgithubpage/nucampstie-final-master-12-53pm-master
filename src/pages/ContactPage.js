import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
    return (
        <Container>
                   <div className="col-12">
            <Row>
                <Col >
                   
                    <h2>Contact Us</h2>
                    <hr />
                    
                </Col>
            </Row>

            <Row className="row-content align-items-center">
                <Col sm="4" >
                <h3>Reach Out</h3>
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:campsites@nucamp.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                </Col>
            </Row>
        </div>
           
            
        </Container>
    );
};

export default ContactPage;
