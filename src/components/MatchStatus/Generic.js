import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rebass';

function Generic(props) {
  const {
    homeTeamName, awayTeamName, index, status,
  } = props;
  return (
    <React.Fragment key={index}>
      <Flex flexWrap="wrap" flexDirection="row" mb={3}>
        <Box width={[1, 2 / 6]}>
          <Text textAlign={['center', 'left']}>{homeTeamName}</Text>
        </Box>
        <Box width={[2 / 6]}>
          <Text fontWeight="bold" textAlign="center">{status}</Text>
        </Box>
        <Box width={[1, 2 / 6]} order={[1, 2]}>
          <Text textAlign={['center', 'left']}>{awayTeamName}</Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

Generic.propTypes = {
  homeTeamName: PropTypes.string.isRequired,
  awayTeamName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Generic;
