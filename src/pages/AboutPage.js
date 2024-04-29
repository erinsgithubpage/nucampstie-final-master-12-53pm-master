import React from 'react';
import { Container } from 'reactstrap';

const AboutUs = () => {
    return (
        <Container>
        <div className="col-12">
            <h2>About Us</h2>
            <hr />
            <div className="row row-content">
                <div className="col-sm-12">
                    <h3>Our Mission</h3>
                    <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default AboutUs;
