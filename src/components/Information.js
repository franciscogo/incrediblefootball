import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Helmet } from 'react-helmet';
import useConnection from './../utils';
import Results from './Results';
import Section from './Section';
import Loading from './Loading';

const Information = (props) => {
  const information = useConnection(props, `http://api.football-data.org/v2/competitions/${props.id}/?plan=TIER_ONE`);
  return (
    <React.Fragment>
      {information ? (
        <React.Fragment>
          <Helmet>
            <title>{information.name} - {information.area.name} | IncredibleFootball</title>
            <meta name="description" content={`${information.area.name} - ${information.name} results, standings and top scorers!`} />
          </Helmet>
          <Section title={`${information.name} - ${information.area.name}`}>
            <Box>
              <Flex flexWrap='wrap'>
                <Box width={[ 1/2, 1/4 ]} mb={[ 4, 0 ]}>
                  <Text fontWeight='bold' mb={1}>Start Date</Text>
                  <Text>{information.currentSeason.startDate}</Text>
                </Box>
                <Box width={[ 1/2, 1/4 ]} mb={[ 4, 0 ]}>
                  <Text textAlign={['right', 'left']} fontWeight='bold' mb={1}>End Date</Text>
                  <Text textAlign={['right', 'left']}>{information.currentSeason.endDate}</Text>
                </Box>
                <Box width={[ 1/2, 1/4 ]} mb={[ 0, 4, 0 ]}>
                  <Text fontWeight='bold' mb={1}>Current Matchday</Text>
                  <Text>{information.currentSeason.currentMatchday}</Text>
                </Box>
                <Box width={[ 1/2, 1/4 ]} mb={[ 0, 4, 0 ]}>
                  <Text textAlign={['right', 'left']} fontWeight='bold' mb={1}>Last updated</Text>
                  <Text textAlign={['right', 'left']}>{information.lastUpdated}</Text>
                </Box>
              </Flex>
            </Box>
          </Section>
          <Results id={props.id} matchDay={information.currentSeason.currentMatchday} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  )
}

export default Information;
