import React from 'react';
import { Heading, Flex } from 'rebass';
import DynamicLink from './DynamicLink';

function Header () {
  return (
    <Flex alignItems='center' mb={[ 4, 5 ]}>
      <Heading color='black' fontSize={[ 3 ]} mr='auto'>
        <DynamicLink color='black' to="/">IncredibleFootball</DynamicLink>
      </Heading>
      <DynamicLink color='black' to="/about">About</DynamicLink>
    </Flex>
  )
}

export default Header;
