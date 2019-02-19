import React from 'react';
import { Box, Flex, Text } from 'rebass';

function Generic (props) {
  const { item, index, status } = props;
  return (
    <React.Fragment key={index}>
      <Flex flexWrap='wrap' flexDirection='row' mb={3}>
        <Box width={[ 1, 2/6 ]}>
          <Text textAlign={['center', 'left']}>{item.homeTeam.name}</Text>
        </Box>
        <Box width={[ 2/6 ]}>
          <Text fontWeight='bold' textAlign='center'>{status}</Text>
        </Box>
        <Box width={[ 1, 2/6 ]} order={[1, 2]}>
          <Text textAlign={['center', 'left']}>{item.awayTeam.name}</Text>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Generic;
