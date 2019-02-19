import React from 'react';
import { Heading, Box} from 'rebass';

function Section (props) {
  return (
    <React.Fragment>
      <Box mb={[ 4, 5 ]} {...props}>
        <Heading fontWeight='bold' mb={4}>{props.title}</Heading>
        {props.children}
      </Box>
    </React.Fragment>
  )
}

export default Section;
