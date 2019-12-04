import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Box } from 'rebass';

function Section(props) {
  const { title, children } = props;
  return (
    <Box mb={[4, 5]} title={title}>
      <Heading fontFamily="inherit" fontWeight="bold" mb={4}>{title}</Heading>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Section;
