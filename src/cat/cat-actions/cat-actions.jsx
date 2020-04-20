import React, { useState } from 'react'
import TestIds from '../../core/config/test-ids'
import { Row, Col, ButtonToolbar, Button, Form } from 'react-bootstrap'
import {
  downloadInfoCat,
  getAllcats
} from './utils'

const CatActions = ({ cat }) => {
  const [selectedType, setSelectedType] = useState('json')
  return (
    <form data-testid={TestIds.catActionsMain} style={{ margin: '20px 0' }}>
      <Row>
        <Col>
          <Button
            data-testid={TestIds.btnOneCatActionsMain}
            disabled={!cat}
            variant="secondary"
            size="sm"
            style={{ marginRight: '10px' }}
            onClick={() => downloadInfoCat(cat, `${cat.id}-${cat.name}.${selectedType}`, selectedType)}
          >
            Export Cat Selected
            </Button>
          <Button
            data-testid={TestIds.btnAllCatsActionsMain}
            variant="secondary"
            size="sm"
            onClick={() => getAllcats(selectedType)}
          >
            Export Cat List
            </Button>
          <div style={{ display: 'inline-block', marginLeft: '20px' }}>
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
          </div>
        </Col>
      </Row>
    </form>
  )
}

export default CatActions