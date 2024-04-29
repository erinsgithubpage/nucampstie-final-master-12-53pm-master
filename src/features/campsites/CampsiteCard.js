import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({campsite}) => {
    const { id, image, name } = campsite;
    return (
        <Link to={`{id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name}
                 />
                    <CardTitle>{name}</CardTitle>
                    <CardBody>{description}</CardBody>
            </Card>
        </Link>
    );
  }
  
  //export default Tool;
  export default CampsiteCard;

//Past version
/*import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function CampsiteCard(props) {
    const name = props.name;
    const tool = props.tool;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardTitle>{props.campsite.name}</CardTitle>
        </Card>
    );
  }
  
  //export default Tool;
  export default CampsiteCard;*/
