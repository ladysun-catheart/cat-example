import React, { useState } from 'react'
import TestIds from '../../core/config/test-ids'
import { Row, Col, ButtonToolbar, Button, Form } from 'react-bootstrap'
import {
  downloadInfoCat,
  getAllcats
} from './utils'

const CatActions = ({ cat }) => {
  const [selectedType, setSelectedType] = useState('xml')
  return (
    <form data-testid={TestIds.catActionsMain}>
      <Row>
        <Col xs={2}>
          <Form.Check
            data-testid={TestIds.radioXmlCatActionsMain}
            id="radioXml"
            type="radio"
            label="xml"
            inline
            value="xml"
            checked={selectedType === 'xml'}
            onChange={() => setSelectedType('xml')}
          />
          <Form.Check
            data-testid={TestIds.radioJsonCatActionsMain}
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
              data-testid={TestIds.btnOneCatActionsMain}
              disabled={!cat}
              variant="primary"
              style={{ marginRight: '10px' }}
              onClick={() => downloadInfoCat(cat, `${cat.id}-${cat.name}.${selectedType}`, selectedType)}
            >
              Export Cat Selected
            </Button>
            <Button
              data-testid={TestIds.btnAllCatsActionsMain}
              variant="primary"
              onClick={() => getAllcats(selectedType)}
            >
              Export Cat List
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </form>
  )
}

export default CatActions