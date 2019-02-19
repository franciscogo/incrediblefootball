import React from 'react';
import { Flex, Box, Text } from 'rebass';
import useConnection from './../utils';
import Section from './Section';
import Loading from './Loading';

function handleCompetition (content) {
  switch (content.competition.id) {
    case 2001: // UEFA Champions League
      const total = content.standings.filter(item => item.type === 'TOTAL');
      return (
        <React.Fragment>
          {total.map((stage, index) =>
            <Box key={index} mb={4}>
              <Text fontWeight='bold' mb={2}>
                {stage.group.replace('_', ' ')}
              </Text>
              <Flex flexwrap='wrap' mb={2}>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>Nº</Text>
                </Box>
                <Box width={[ 3/12 ]}>
                  <Text fontWeight='bold'>Team</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>P</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>PTS</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>W</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>D</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>L</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>GF</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>GA</Text>
                </Box>
                <Box width={[ 1/12 ]}>
                  <Text fontWeight='bold'>GD</Text>
                </Box>
              </Flex>
              <Flex flexWrap='wrap'>
                {stage.table.map((item, index) => 
                  <React.Fragment key={index}>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.position}</Text>
                    </Box>
                    <Box width={[ 3/12 ]}>
                      <Text>{item.team.name}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.playedGames}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.points}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.won}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.draw}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.lost}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.goalsFor}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.goalsAgainst}</Text>
                    </Box>
                    <Box width={[ 1/12 ]} mb={2}>
                      <Text>{item.goalDifference}</Text>
                    </Box>
                  </React.Fragment>
                )}
              </Flex>
            </Box>
          )}
        </React.Fragment>
      )
    default:
      return (
        <Section title="Standing">
          <Box>
            <Flex flexwrap='wrap' mb={2}>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>Nº</Text>
              </Box>
              <Box width={[ 3/12 ]}>
                <Text fontWeight='bold'>Team</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>P</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>PTS</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>W</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>D</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>L</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>GF</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>GA</Text>
              </Box>
              <Box width={[ 1/12 ]}>
                <Text fontWeight='bold'>GD</Text>
              </Box>
            </Flex>
            <Flex flexWrap='wrap'>
              {content.standings[0].table.map((item, index) => 
                <React.Fragment key={index}>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.position}</Text>
                  </Box>
                  <Box width={[ 3/12 ]}>
                    <Text>{item.team.name}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.playedGames}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.points}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.won}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.draw}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.lost}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.goalsFor}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.goalsAgainst}</Text>
                  </Box>
                  <Box width={[ 1/12 ]} mb={2}>
                    <Text>{item.goalDifference}</Text>
                  </Box>
                </React.Fragment>
              )}
            </Flex>
          </Box>
        </Section>
      )
  }
}

const Standing = (props) => {
  const standing = useConnection(props, `http://api.football-data.org/v2/competitions/${props.id}/standings?plan=TIER_ONE`);
  return (
    <React.Fragment>
      {standing ? (
        handleCompetition(standing)
      ) : (
        <Loading />
      )}
    </React.Fragment>
  )
}

export default Standing;
