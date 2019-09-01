import React, { useState } from 'react';
import { Row, Col, ButtonToolbar, Button, Form } from 'react-bootstrap';

const CatActions = ({ cat, catList }) => {
  const [selectedType, setSelectedType] = useState({ type: 'xml' });
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
            checked={selectedType.type === 'xml'}
            onChange={() => setSelectedType({ type: 'xml'})}
          />
          <Form.Check 
            id="radioJson" 
            type="radio"
            label="json"
            inline
            value="json" 
            checked={selectedType.type === 'json'} 
            onChange={() => setSelectedType({ type: 'json'})}
          />
        </Col>
        <Col xs={4}>
          <ButtonToolbar>
            <Button variant="primary" style={{ marginRight: '10px' }}>Export Cat Selected</Button>
            <Button variant="primary">Export Cat List</Button>
          </ButtonToolbar>
        </Col>
      </Row> 
    </form>
  );
}
 
export default CatActions;