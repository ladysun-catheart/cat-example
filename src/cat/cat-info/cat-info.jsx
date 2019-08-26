import React from 'react';
import Card from 'react-bootstrap/Card'

const CatInfo = () => {
  return ( 
    <Card style={{marginTop: '20px'}}>
      <Card.Body>
        <Card.Title>🐱 1 - Namecat</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">♂️ 18/08/2002</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card> 
  );
}
 
export default CatInfo;