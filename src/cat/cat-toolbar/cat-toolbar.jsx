import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, InputGroup } from 'react-bootstrap';

const CatToolbar = ({ onClickCreate, onClickSearch }) => (
    <>
        <Col><Button onClick={onClickCreate}>Insert new cat</Button></Col>
        <Col>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button onClick={onClickSearch}>Search</Button>
                </InputGroup.Prepend>
                <Form.Control type="text" placeholder="enter the cat" />
            </InputGroup>
        </Col>
    </>
);

CatToolbar.propTypes = {
    onClickCreate: PropTypes.func,
    onClickSearch: PropTypes.func
};

export default CatToolbar;