import React from "react";
import Loading from "./../components/Loading";

const Information = React.lazy(() => import("./../components/Information"));
const Standing = React.lazy(() => import("./../components/Standing"));
const TopScorers = React.lazy(() => import("./../components/TopScorers"));

function Summary ({ match }) {
  return (
    <React.Suspense fallback={<Loading />}>
      <Information id={match.params.id} />
      <Standing id={match.params.id} />
      <TopScorers id={match.params.id} />
    </React.Suspense>
  )
}

export default Summary;
