import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap'
import profilePic from 'src/images/rustic-santa-background.jpg';

const AboutImageCard: () => JSX.Element = () => (
    <Card>
        <CardImg src={profilePic} alt="Rustic Santa Meta Tag" />
        <CardBody>
            <CardTitle>Rustic Santa</CardTitle>
            <CardSubtitle>Rustic Santas Description</CardSubtitle>
        </CardBody>
    </Card>
);

export default AboutImageCard;
