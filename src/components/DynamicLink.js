import React from 'react';
import { Link as RebassLink } from 'rebass';
import { Link as RouterLink } from 'react-router-dom';

function DynamicLink (props) {
  return (
    <RebassLink {...props} as={RouterLink}>{props.children}</RebassLink>
  )
}

export default DynamicLink;
