import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const CampsitesList = ({ campsites }) => {
    return (
        <Container>
        <div className="row">
            {campsites.map(campsite => (
                <Col key={campsite.id} md="4">
                    <Card>
                        <Link to={`/directory/${campsite.id}`}>
                            <CardImg top width="100%" src={campsite.image} alt={campsite.name} />
                        </Link>
                        <CardBody>
                            <CardTitle>
                                <Link to={`/directory/${campsite.id}`}>{campsite.name}</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </div>
        </Container>
    );
};

export default CampsitesList;


/*import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsitesList = ({ campsites }) => {
    return (
        <div className="row">
            {campsites.map(campsite => (
                <Col key={campsite.id} md="4">
                    <Card>
                        <Link to={`/directory/${campsite.id}`}>
                            <CardImg top width="100%" src={campsite.image} alt={campsite.name} />
                        </Link>
                        <CardBody>
                            <CardTitle>
                                <Link to={`/directory/${campsite.id}`}>{campsite.name}</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default CampsitesList;
*/

/*import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
       <Row className='ms-auto'>
       
       {campsites.map((campsite) => {
            return (
                <Col 
                md='5' 
                className='m-4' 
                key={campsite.id}
                >
                    <CampsiteCard campsite={campsite} />
                </Col>
                    );
                })}
       </Row>
    );
  }

  export default CampsitesList;*/