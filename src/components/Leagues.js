import React from 'react';
import { Flex, Box, Text } from 'rebass';
import DynamicLink from './DynamicLink';
import useConnection from './../utils';
import Loading from './Loading';

const Leagues = () => {
  const leagues = useConnection(null, 'http://api.football-data.org/v2/competitions/?plan=TIER_ONE');
  return (
    <Flex flexWrap='wrap'>
      {leagues ? leagues.competitions.map((league, index) =>
        <Box key={index} width={[ 1, 1/2, 1/4 ]} mb={4}>
          <DynamicLink to={`/information/${league.id}`} color='black'>
            <Text fontWeight='bold' fontSize={[2, 3, 4]} pb={1}>{league.name}</Text>
            <Text fontSize={2}>{league.area.name}</Text>
          </DynamicLink>
        </Box>
      ) : <Loading />}
    </Flex>
  )
}

export default Leagues;
