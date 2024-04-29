import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';


const CampsiteDetail = () => {
    const { id } = useParams();
    const [campsite, setCampsite] = useState(null);

    useEffect(() => {
        // Fetch campsite data based on the id from your API or data source
        // Example fetch call (replace with your actual fetch call)
        fetch(`your_api_endpoint/campsites/${id}`)
            .then(response => response.json())
            .then(data => setCampsite(data))
            .catch(error => console.error('Error fetching campsite:', error));
    }, [id]);

    if (!campsite) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
    }

    const { image, name, description } = campsite;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;


/*import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

const CampsiteDetail = ({ campsite }) => {
    const { image, name, description } = campsite;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;*/