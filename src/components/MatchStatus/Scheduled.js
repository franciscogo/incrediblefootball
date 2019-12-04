import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rebass';

function Scheduled(props) {
  const { homeTeamName, awayTeamName } = props;
  return (
    <>
      <Flex flexWrap="wrap" alignItems="center" flexDirection="row" mb={3}>
        <Box width={[4 / 12, 5 / 12]}>
          <Text textAlign={['left', 'right']}>{homeTeamName}</Text>
        </Box>
        <Box width={[4 / 12, 2 / 12]}>
          <Text textAlign="center">vs</Text>
        </Box>
        <Box width={[4 / 12, 5 / 12]} order={[1, 2]}>
          <Text textAlign={['right', 'left']}>{awayTeamName}</Text>
        </Box>
      </Flex>
    </>
  );
}

Scheduled.propTypes = {
  homeTeamName: PropTypes.string.isRequired,
  awayTeamName: PropTypes.string.isRequired,
};

export default Scheduled;
