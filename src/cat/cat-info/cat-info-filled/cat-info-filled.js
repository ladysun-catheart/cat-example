import React from 'react';
import Card from 'react-bootstrap/Card'

const CatInfoFilled = ({cat}) => {
  const getLabelProp = (prop) => prop || '...';
  const getLabelBirthday = (ms) => {
    let label = '';
    if(ms) {
      const date = new Date(ms);
      const locale = window.navigator.userLanguage || window.navigator.language;
      const dateString = Intl.DateTimeFormat(locale).format(date);
      label = dateString;
    }
    return label;
  };
  return ( 
    <Card>
      <Card.Body>
        <Card.Title><span role="img" aria-label="Cat icon">🐱</span> {getLabelProp(cat.id)} - {getLabelProp(cat.name)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{cat.sex.icon} {getLabelBirthday(cat.birthday)}</Card.Subtitle>
        <Card.Text>{getLabelProp(cat.description)}</Card.Text>
      </Card.Body>
    </Card> 
  );
}
 
export default CatInfoFilled;