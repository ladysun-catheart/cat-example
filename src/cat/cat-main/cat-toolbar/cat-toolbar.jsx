import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, InputGroup } from 'react-bootstrap';

const CatToolbar = ({ onClickSearch, goToCatCreate }) => {
  const [input, setInput] = useState('')
    return (
        <>
            <Col><Button onClick={() => goToCatCreate()}>Insert new cat</Button></Col>
            <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={e => onClickSearch(input)}>Search</Button>
                    </InputGroup.Prepend>
                    <Form.Control type="text" placeholder="enter the cat" value={input} onChange={e => setInput(e.target.value)}/>
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
