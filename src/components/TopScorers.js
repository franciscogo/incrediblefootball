import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from 'rebass';
import useConnection from '../utils';
import Section from './Section';
import Loading from './Loading';

function TopScorers(props) {
  const { id } = props;
  const scorers = useConnection(`https://api.football-data.org/v2/competitions/${id}/scorers`);

  if (scorers === null) {
    return <Loading />;
  }

  return (
    <Section title="Top Scorers">
      <>
        <Flex flexwrap="wrap" mb={2}>
          <Box width={[1 / 6]}>
            <Text fontWeight="bold">Nº</Text>
          </Box>
          <Box width={[2 / 6]}>
            <Text fontWeight="bold">Name</Text>
          </Box>
          <Box width={[1 / 6]}>
            <Text fontWeight="bold">Goals</Text>
          </Box>
          <Box width={[1 / 6]}>
            <Text fontWeight="bold">Team</Text>
          </Box>
          <Box width={[1 / 6]}>
            <Text fontWeight="bold" textAlign="right">Position</Text>
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          {scorers.scorers.map((item, index) => (
            <React.Fragment key={item.player.id}>
              <Box width={[1 / 6]} mb={2}>
                <Text>{index + 1}</Text>
                {' '}
                {/* <--- What */}
              </Box>
              <Box width={[2 / 6]} mb={2}>
                <Text>{item.player.name}</Text>
              </Box>
              <Box width={[1 / 6]} mb={2}>
                <Text>{item.numberOfGoals}</Text>
              </Box>
              <Box width={[1 / 6]} mb={2}>
                <Text>{item.team.name}</Text>
              </Box>
              <Box width={[1 / 6]} mb={2}>
                <Text textAlign="right">{item.player.position}</Text>
              </Box>
            </React.Fragment>
          ))}
        </Flex>
      </>
    </Section>
  );
}

TopScorers.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TopScorers;
