import React, { useState } from 'react'
import TestIds from '../../../core/config/test-ids'
import PropTypes from 'prop-types'
import { Col, Button, Form, InputGroup } from 'react-bootstrap'

const CatToolbar = ({ onClickSearch, goToCatCreate }) => {
  const [input, setInput] = useState('')
  const searchValue = () => onClickSearch(input.trim())
  return (
    <>
      <Col data-testid={TestIds.insertToolbar}>
        <Button
          data-testid={TestIds.btnInsertToolbar}
          onClick={() => goToCatCreate()}
        >Insert new cat
          </Button>
      </Col>
      <Col data-testid={TestIds.searchToolbar}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              data-testid={TestIds.btnSearchToolbar}
              onClick={e => searchValue()}
            >Search</Button>
          </InputGroup.Prepend>
          <Form.Control
            data-testid={TestIds.inputSearchToolbar}
            type="text"
            placeholder="enter the cat"
            value={input}
            onChange={e => {
              const str = e.target.value.trim();
              setInput(str)
            }}
            onKeyUp={e => e.key === 'Enter' && searchValue()}
          />
        </InputGroup>
      </Col>
    </>
  );
};

CatToolbar.propTypes = {
  'data-testid': PropTypes.string,
  onClickSearch: PropTypes.func,
  goToCatCreate: PropTypes.func
};

export default CatToolbar
