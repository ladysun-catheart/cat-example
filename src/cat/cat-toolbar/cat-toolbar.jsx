import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { Col, Button, Form, InputGroup } from 'react-bootstrap';

const CatToolbar = ({ onClickSearch, goToCatCreate }) => {
    // const history = useHistory();
    return (
        <>
            <Col><Button onClick={() => goToCatCreate()}>Insert new cat</Button></Col>
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
};

CatToolbar.propTypes = {
    onClickSearch: PropTypes.func,
    goToCatCreate: PropTypes.func
};

export default CatToolbar;