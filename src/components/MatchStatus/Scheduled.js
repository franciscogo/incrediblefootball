import React from 'react';
import { Box, Flex, Text } from 'rebass';

function Scheduled (props) {
  const { item, index } = props;
  return (
    <React.Fragment key={index}>
      <Flex flexWrap='wrap' alignItems='center' flexDirection='row' mb={3}>
        <Box width={[ 4/12, 5/12 ]}>
          <Text textAlign={['left', 'right']}>{item.homeTeam.name}</Text>
        </Box>
        <Box width={[ 4/12, 2/12 ]}>
          <Text textAlign='center'>vs</Text>
        </Box>
        <Box width={[ 4/12, 5/12 ]} order={[1, 2]}>
          <Text textAlign={['right', 'left']}>{item.awayTeam.name}</Text>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Scheduled;
