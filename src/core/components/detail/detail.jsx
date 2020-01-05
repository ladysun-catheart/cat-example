import React from 'react';
import PropTypes from 'prop-types';
import DetailFilled from './detail-filled';
import DetailEmpty from './detail-empty';

const Detail = ({
  isAvailable,
  actionList,
  title,
  subtitle,
  description,
  emptyTitle,
  emptyText,
  'data-testid': dataTestid
}) => (
    isAvailable ? (
      <DetailFilled
        data-testid={`${dataTestid}-filled`}
        actionList={actionList}
        title={title}
        subtitle={subtitle}
        description={description}
      />
    ) : (
        <DetailEmpty
          data-testid={`${dataTestid}-empty`}
          emptyTitle={emptyTitle}
          emptyText={emptyText}
        />
      )
  );

DetailFilled.propTypes = {
  'data-testid': PropTypes.string,
  isAvailable: PropTypes.boolean,
  actionList: PropTypes.array,
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
