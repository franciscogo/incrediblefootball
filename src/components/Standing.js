import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from 'rebass';
import useConnection from '../utils';
import Section from './Section';
import Loading from './Loading';

function handleCompetition(content) {
  const total = content.standings.filter((item) => item.type === 'TOTAL');
  switch (content.competition.id) {
    case 2001: // UEFA Champions League
      return (
        <>
          {total.map((stage) => (
            <Box key={stage.group} mb={4}>
              <Text fontWeight="bold" mb={2}>
                {stage.group.replace('_', ' ')}
              </Text>
              <Flex flexwrap="wrap" mb={2}>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">Nº</Text>
                </Box>
                <Box width={[3 / 12]}>
                  <Text fontWeight="bold">Team</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">P</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">PTS</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">W</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">D</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">L</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">GF</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">GA</Text>
                </Box>
                <Box width={[1 / 12]}>
                  <Text fontWeight="bold">GD</Text>
                </Box>
              </Flex>
              <Flex flexWrap="wrap">
                {stage.table.map((item) => (
                  <React.Fragment key={item.team.id}>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.position}</Text>
                    </Box>
                    <Box width={[3 / 12]}>
                      <Text>{item.team.name}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.playedGames}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.points}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.won}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.draw}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.lost}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.goalsFor}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.goalsAgainst}</Text>
                    </Box>
                    <Box width={[1 / 12]} mb={2}>
                      <Text>{item.goalDifference}</Text>
                    </Box>
                  </React.Fragment>
                ))}
              </Flex>
            </Box>
          ))}
        </>
      );
    default:
      return (
        <Section title="Standing">
          <>
            <Flex flexwrap="wrap" mb={2}>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">Nº</Text>
              </Box>
              <Box width={[3 / 12]}>
                <Text fontWeight="bold">Team</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">P</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">PTS</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">W</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">D</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">L</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">GF</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">GA</Text>
              </Box>
              <Box width={[1 / 12]}>
                <Text fontWeight="bold">GD</Text>
              </Box>
            </Flex>
            <Flex flexWrap="wrap">
              {content.standings[0].table.map((item) => (
                <React.Fragment key={item.team.id}>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.position}</Text>
                  </Box>
                  <Box width={[3 / 12]}>
                    <Text>{item.team.name}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.playedGames}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.points}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.won}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.draw}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.lost}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.goalsFor}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.goalsAgainst}</Text>
                  </Box>
                  <Box width={[1 / 12]} mb={2}>
                    <Text>{item.goalDifference}</Text>
                  </Box>
                </React.Fragment>
              ))}
            </Flex>
          </>
        </Section>
      );
  }
}

function Standing(props) {
  const { id } = props;
  const standing = useConnection(`http://api.football-data.org/v2/competitions/${id}/standings?plan=TIER_ONE`);

  if (standing === null) {
    return <Loading />;
  }

  return (
    <>
      {handleCompetition(standing)}
    </>
  );
}

Standing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Standing;
