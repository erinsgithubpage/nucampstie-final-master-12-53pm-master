import React from 'react';
import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import { CAMPSITES } from '../app/shared/CAMPSITES'; // Import campsite data
import DisplayList from '../features/display/DisplayList';

const CampsiteZeroPage = () => {
    console.log("CAMPSITES:", CAMPSITES);

    // Filter the CAMPSITES array to include only the campsite with id "0"
    const filteredCampsites = CAMPSITES.filter(campsite => campsite.id === 0);
    console.log("Filtered Campsites:", filteredCampsites);

    return (
        <Container>
            <CampsitesList campsites={filteredCampsites ? [filteredCampsites] : []} />
            <div>Contact Page</div>
    </Container>
    )
};
   




/*const CampsiteZeroPage = () => {
    return (
        <Container>
            <CampsitesList campsites={CAMPSITES} /> 
        </Container>
        
    );
    
};*/

/*const CampsiteZeroPage = () => {
    // Filter the CAMPSITES array to include only the campsite with id "0"
    const filteredCampsites = CAMPSITES.filter(campsite => campsite.id === 0);


    return (
        <Container>
            <CampsitesList campsites={filteredCampsites ? [filteredCampsites] : []} />
        </Container>
    );
}*/

export default CampsiteZeroPage;