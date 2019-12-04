import React from 'react';
import { Heading, Flex } from 'rebass';
import DynamicLink from './DynamicLink';

const Header = () => (
  <Flex alignItems="center" mb={[4, 5]}>
    <Heading color="black" fontFamily="inherit" fontSize={[3]} mr="auto">
      <DynamicLink color="black" to="/">IncredibleFootball</DynamicLink>
    </Heading>
    <DynamicLink color="black" to="/about">About</DynamicLink>
  </Flex>
);

export default Header;
