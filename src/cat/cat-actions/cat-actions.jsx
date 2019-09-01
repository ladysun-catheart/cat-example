import React, { useState } from 'react';
import { Row, Col, ButtonToolbar, Button, Form } from 'react-bootstrap';
import {
  downloadInfoCat,
  getAllcats
} from './utils';

const CatActions = ({ cat }) => {
  const [selectedType, setSelectedType] = useState('xml');
  return (
    <form>
      <Row>
        <Col xs={2}>
          <Form.Check
            id="radioXml" 
            type="radio"
            label="xml"
            inline
            value="xml" 
            checked={selectedType === 'xml'}
            onChange={() => setSelectedType('xml')}
          />
          <Form.Check 
            id="radioJson" 
            type="radio"
            label="json"
            inline
            value="json" 
            checked={selectedType === 'json'} 
            onChange={() => setSelectedType('json')}
          />
        </Col>
        <Col xs={4}>
          <ButtonToolbar>
            <Button
              disabled = {!cat}
              variant="primary" 
              style={{ marginRight: '10px' }}
              onClick={() => downloadInfoCat(cat, `${cat.id}-${cat.name}.${selectedType}`, selectedType)}
            >
              Export Cat Selected
            </Button>
            <Button 
              variant="primary"
              onClick={() => getAllcats(selectedType)}
            >
              Export Cat List
            </Button>
          </ButtonToolbar>
        </Col>
      </Row> 
    </form>
  );
}
 
export default CatActions;