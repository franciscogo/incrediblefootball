import React from 'react';
import { Flex, Box, Text } from 'rebass';
import DynamicLink from './DynamicLink';
import useConnection from '../utils';
import Loading from './Loading';

function Leagues() {
  const leagues = useConnection('https://api.football-data.org/v2/competitions/?plan=TIER_ONE');

  if (leagues === null) {
    return <Loading />;
  }

  return (
    <Flex flexWrap="wrap">
      {leagues.competitions.map((league) => (
        <Box key={league.id} width={[1, 1 / 2, 1 / 4]} mb={4}>
          <DynamicLink to={`/information/${league.id}`} color="black">
            <>
              <Text fontWeight="bold" fontSize={[2, 3, 4]} pb={1}>{league.name}</Text>
              <Text fontSize={2}>{league.area.name}</Text>
            </>
          </DynamicLink>
        </Box>
      ))}
    </Flex>
  );
}

export default Leagues;
