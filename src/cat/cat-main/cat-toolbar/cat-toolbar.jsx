import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, InputGroup } from 'react-bootstrap';

const CatToolbar = ({ onClickSearch, goToCatCreate }) => {
  const [input, setInput] = useState('')
  const searchValue = () => onClickSearch(1, 10, input.length === 0 ? /\w/ : input)
  return (
    <>
      <Col>
        <Button
          data-testid="btn-insert-toolbar"
          onClick={() => goToCatCreate()}
        >Insert new cat
          </Button>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button
              data-testid="btn-search-toolbar"
              onClick={e => searchValue()}
            >Search</Button>
          </InputGroup.Prepend>
          <Form.Control
            data-testid="input-search-toolbar"
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
  onClickSearch: PropTypes.func,
  goToCatCreate: PropTypes.func
};

export default CatToolbar;
