import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, Row, Container } from 'reactstrap'; // Import Col component from reactstrap
import { Link } from 'react-router-dom';
import DisplayCard from '../features/display/DisplayCard';

const CampsitesList = ({ campsites }) => {
    return (
        <Container>
            <div className="row">
                {campsites.map(campsite => (
                    <Col key={campsite.id} md="6" className="mb-4">
                        <Card>
                            <CardImg top width="100%" src={campsite.image} alt={campsite.name} />
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


{/*const CampsitesList = ({ campsites }) => {
    return (
      
      
       
        <Container>
            
            <>
            
            {campsites.map(campsite => (
                <Col key={campsite.id} md="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>
                                <Link to={`/directory/${campsite.id}`}>{campsite.name}</Link>
                            </CardTitle>
                        </CardBody>
                    </Card>
                    
                    
                </Col>
            ))}
            </>
          
        </Container>
        
          
        
     
        
    );
};

export default CampsitesList;*/}


{/*import React from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import { CAMPSITES } from '../app/shared/CAMPSITES'; // Import campsite data
import DisplayList from '../features/display/DisplayList';

const CampsitesDirectoryPage = () => {
    
    return (
        <Container>
            <Row>
            <CampsitesList campsites={CAMPSITES} />
            </Row>
        </Container>
        
        
    );
};

export default CampsitesDirectoryPage;*/}


/*import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { CAMPSITES } from '../app/shared/CAMPSITES';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList campsites={CAMPSITES} /> 
            <ul>
                {CAMPSITES.map(campsite => (
                    <li key={campsite.id}>
                        <Link to={`/directory/${campsite.id}`}>{campsite.name}</Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default CampsitesDirectoryPage;*/
        /*old code that works*
const CampsitesDirectoryPage = ({ campsites }) => {
    return (
   
            <CampsitesList campsites={campsites} />
            <ul>
                {campsites.map(campsite => (
                    <li key={campsite.id}>
                        <Link to={`/directory/${campsite.id}`}>{campsite.name}</Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default CampsitesDirectoryPage;
    */

/*import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
           <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;*/