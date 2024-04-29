import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector hook
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(state => selectCampsiteById(state, campsiteId)); // Use useSelector hook to access Redux state

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;


/*import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;*/