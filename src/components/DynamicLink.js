import React from 'react';
import PropTypes from 'prop-types';
import { Link as RebassLink } from 'rebass';
import { Link as RouterLink } from 'react-router-dom';

function DynamicLink(props) {
  const { color, to, children } = props;
  return (
    <RebassLink color={color} to={to} as={RouterLink}>{children}</RebassLink>
  );
}

DynamicLink.propTypes = {
  color: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default DynamicLink;
