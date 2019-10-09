import React from 'react';
import PropTypes from 'prop-types';
import DetailFilled from './detail-filled';
import DetailEmpty from './detail-empty';

const Detail = ({ isAvailable, title, subtitle, description, emptyTitle, emptyText }) => (
  isAvailable ? (
    <DetailFilled
      title={title}
      subtitle={subtitle}
      description={description}
    />) : (
      <DetailEmpty
        emptyTitle={emptyTitle}
        emptyText={emptyText}
      />)
);

DetailFilled.propTypes = {
  isAvailable: PropTypes.boolean,
  title: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  description: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  emptyTitle: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
  emptyText: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string
  ]),
};

export default Detail;