import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'

const DetailEmpty = ({ emptyTitle, emptyText, 'data-testid': dataTestid  }) => (
    <Card data-testid={dataTestid}>
        <Card.Body>
            <Card.Title>{emptyTitle}</Card.Title>
            <Card.Text>{emptyText}</Card.Text>
        </Card.Body>
    </Card>
);

DetailEmpty.propTypes = {
    'data-testid': PropTypes.string,
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