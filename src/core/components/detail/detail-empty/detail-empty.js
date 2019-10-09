import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

const DetailEmpty = ({ emptyTitle, emptyText }) => (
    <Card>
        <Card.Body>
            <Card.Title>{emptyTitle}</Card.Title>
            <Card.Text>{emptyText}</Card.Text>
        </Card.Body>
    </Card>
);

DetailEmpty.propTypes = {
    emptyTitle: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.string
    ]),
    emptyText: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.string
    ]),
};

export default DetailEmpty;