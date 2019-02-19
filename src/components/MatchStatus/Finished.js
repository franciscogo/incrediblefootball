import React from 'react';
import { Box, Flex, Text } from 'rebass';

function Finished (props) {
  const { item, index } = props;
  return (
    <React.Fragment key={index}>
      <Flex flexWrap='wrap' flexDirection='row' mb={3}>
        <Box width={[ 4/5, 4/12 ]}>
          <Text textAlign={[ 'left', 'right' ]}>{item.homeTeam.name}</Text>
        </Box>
        <Box width={[ 1/5, 2/12 ]}>
          <Text textAlign='center' fontWeight={item.score.winner === 'HOME_TEAM' ? 'bold' : 'normal'}>
            {item.score.fullTime.homeTeam}
          </Text>
        </Box>
        <Box width={[ 1/5, 2/12 ]} order={[ 2, 1 ]}>
          <Text textAlign='center' fontWeight={item.score.winner === 'AWAY_TEAM' ? 'bold' : 'normal'}>
            {item.score.fullTime.awayTeam}
          </Text>
        </Box>
        <Box width={[ 4/5, 4/12 ]} order={[1, 2]}>
          <Text textAlign='left'>{item.awayTeam.name}</Text>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Finished;
