import React from 'react';
import { Flex, Box, Text } from 'rebass';
import useConnection from './../utils';
import Section from './Section';
import Loading from './Loading';

function TopScorers (props) {
  const scorers = useConnection(props, `https://api.football-data.org/v2/competitions/${props.id}/scorers`);
  return (
    <React.Fragment>
      {scorers ? (
        <Section title="Top Scorers">
          <Box>
            <Flex flexwrap='wrap' mb={2}>
              <Box width={[ 1/6 ]}>
                <Text fontWeight='bold'>Nº</Text>
              </Box>
              <Box width={[ 2/6 ]}>
                <Text fontWeight='bold'>Name</Text>
              </Box>
              <Box width={[ 1/6 ]}>
                <Text fontWeight='bold'>Goals</Text>
              </Box>
              <Box width={[ 1/6 ]}>
                <Text fontWeight='bold'>Team</Text>
              </Box>
              <Box width={[ 1/6 ]}>
                <Text fontWeight='bold' textAlign='right'>Position</Text>
              </Box>
            </Flex>
            <Flex flexWrap='wrap'>
              {scorers.scorers.map((item, index) => 
                <React.Fragment key={index}>
                  <Box width={[ 1/6 ]} mb={2}>
                    <Text>{index + 1}</Text> {/* <--- What */}
                  </Box>
                  <Box width={[ 2/6 ]} mb={2}>
                    <Text>{item.player.name}</Text>
                  </Box>
                  <Box width={[ 1/6 ]} mb={2}>
                    <Text>{item.numberOfGoals}</Text>
                  </Box>
                  <Box width={[ 1/6 ]} mb={2}>
                    <Text>{item.team.name}</Text>
                  </Box>
                  <Box width={[ 1/6 ]} mb={2}>
                    <Text textAlign='right'>{item.player.position}</Text>
                  </Box>
                </React.Fragment>
              )}
            </Flex>
          </Box>
        </Section>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  )
}

export default TopScorers;
