import React from 'react';
import Helmet from 'react-helmet';
import { Text, Link } from 'rebass';

function About() {
  return (
    <>
      <Helmet>
        <title>About | IncreibleFootball</title>
        <meta name="description" content="About IncredibleFootball" />
      </Helmet>
      <div>
        <Text mb={2}>
Reactjs App created by
          <Link color="black" href="https://github.com/franciscogo">Francisco Gonzalez</Link>
          {' '}
using Football Data API.
        </Text>
        <Link color="black" href="https://github.com/franciscogo">Source</Link>
      </div>
    </>
  );
}

export default About;
