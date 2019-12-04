import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rebass';

function Game(props) {
  const {
    homeTeamName,
    scoreHomeTeamFullTime,
    awayTeamName,
    scoreAwayTeamFullTime,
    winner,
    status,
    index,
  } = props;
  return (
    <React.Fragment key={index}>
      <Flex flexWrap="wrap" flexDirection="row" mb={3} className={[status === 'IN_PLAY' ? 'in-play' : null]}>
        <Box width={[4 / 5, 4 / 12]}>
          <Text textAlign={['left', 'right']}>{homeTeamName}</Text>
        </Box>
        <Box width={[1 / 5, 2 / 12]}>
          <Text textAlign="center" fontWeight={winner === 'HOME_TEAM' ? 'bold' : 'normal'}>
            {scoreHomeTeamFullTime}
          </Text>
        </Box>
        <Box width={[1 / 5, 2 / 12]} order={[2, 1]}>
          <Text textAlign="center" fontWeight={winner === 'AWAY_TEAM' ? 'bold' : 'normal'}>
            {scoreAwayTeamFullTime}
          </Text>
        </Box>
        <Box width={[4 / 5, 4 / 12]} order={[1, 2]}>
          <Text textAlign="left">{awayTeamName}</Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

Game.propTypes = {
  homeTeamName: PropTypes.string.isRequired,
  scoreHomeTeamFullTime: PropTypes.number.isRequired,
  awayTeamName: PropTypes.string.isRequired,
  scoreAwayTeamFullTime: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Game;
