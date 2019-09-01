import React from 'react';
import Card from 'react-bootstrap/Card'

const CatInfoEmpty = () => ( 
<Card>
    <Card.Body>
    <Card.Title>Welcome to Super Neko Database!</Card.Title>
    <Card.Text>Select a cat to show its details</Card.Text>
    </Card.Body>
</Card> 
);
 
export default CatInfoEmpty;