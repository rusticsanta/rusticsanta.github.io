import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const AboutImageCard: () => JSX.Element = () => (
    <Card>
        {/* <CardImg src={profilePic} alt="Rustic Santa Meta Tag" /> */}
        <CardBody>
            <CardTitle>Rustic Santa</CardTitle>
            <CardSubtitle>Rustic Santas Description</CardSubtitle>
        </CardBody>
    </Card>
);

export default AboutImageCard;
