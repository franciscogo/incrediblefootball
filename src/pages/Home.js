import React from 'react';
import { Helmet } from 'react-helmet';
import Loading from './../components/Loading';

const Leagues = React.lazy(() => import('./../components/Leagues'));

function Home () {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | IncreibleFootball</title>
        <meta name="description" content="See all football results" />
      </Helmet>
      <React.Suspense fallback={<Loading />}>
        <Leagues />
      </React.Suspense>
    </React.Fragment>
  )
}

export default Home;