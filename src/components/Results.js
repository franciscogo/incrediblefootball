import React from 'react';
import useConnection from './../utils';
import Section from './Section';
import Finished from './MatchStatus/Finished';
import Scheduled from './MatchStatus/Scheduled';
import InPlay from './MatchStatus/InPlay';
import Generic from './MatchStatus/Generic';
import Loading from './Loading';

function handleMatchStatus (item, index) {
  switch (item.status) {
    case 'SCHEDULED':
      return <Scheduled item={item} key={index} />
    case 'POSTPONED':
      return <Generic item={item} key={index} status="Postponed" />
    case 'SUSPENDED':
      return <Generic item={item} key={index} status="Suspended" />
    case 'CANCELED':
      return <Generic item={item} key={index} status="Canceled" />
    case 'IN_PLAY':
      return <InPlay item={item} key={index} />
    case 'FINISHED':
      return <Finished item={item} key={index}/>
    default:
      console.log(`Error loading ${item}`);
  }
}

function Results (props) {
  const results = useConnection(props, `https://api.football-data.org/v2/competitions/${props.id}/matches?matchday=${props.matchDay}`)
  return (
    <React.Fragment>
      {results ? (
        <React.Fragment>
          <Section title='Results' width={[ 1 ]}>
            {results.matches.map((item, index) => 
              handleMatchStatus(item, index)
            )}
          </Section>
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  )
}

export default Results;
