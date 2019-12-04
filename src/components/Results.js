import React from 'react';
import PropTypes from 'prop-types';
import useConnection from '../utils';
import Section from './Section';
import Scheduled from './MatchStatus/Scheduled';
import Generic from './MatchStatus/Generic';
import Game from './MatchStatus/Game';
import Loading from './Loading';

function handleMatchStatus(item, index) {
  switch (item.status) {
    case 'SCHEDULED':
      return (
        <Scheduled
          homeTeamName={item.homeTeam.name}
          awayTeamName={item.awayTeam.name}
          key={index}
        />
      );
    case 'POSTPONED':
      return (
        <Generic
          homeTeamName={item.homeTeam.name}
          awayTeamName={item.awayTeam.name}
          key={index}
          status="Postponed"
        />
      );
    case 'SUSPENDED':
      return (
        <Generic
          homeTeamName={item.homeTeam.name}
          awayTeamName={item.awayTeam.name}
          key={index}
          status="Suspended"
        />
      );
    case 'CANCELED':
      return <Generic item={item} key={index} status="Canceled" />;
    case 'IN_PLAY':
      return (
        <Game
          homeTeamName={item.homeTeam.name}
          scoreHomeTeamFullTime={item.score.fullTime.homeTeam}
          awayTeamName={item.awayTeam.name}
          scoreAwayTeamFullTime={item.score.fullTime.awayTeam}
          winner={item.score.winner}
          status="IN_PLAY"
          index={item.id}
          key={index}
        />
      );
    case 'FINISHED':
      return (
        <Game
          homeTeamName={item.homeTeam.name}
          scoreHomeTeamFullTime={item.score.fullTime.homeTeam}
          awayTeamName={item.awayTeam.name}
          scoreAwayTeamFullTime={item.score.fullTime.awayTeam}
          winner={item.score.winner}
          status="FINISHED"
          index={item.id}
          key={index}
        />
      );
    default:
      return (`Error loading ${item}`);
  }
}

function Results(props) {
  const { id, matchDay } = props;
  const results = useConnection(`https://api.football-data.org/v2/competitions/${id}/matches?matchday=${matchDay}`);

  if (results === null) {
    return <Loading />;
  }

  return (
    <Section title="Results">
      {results.matches.map((item, index) => handleMatchStatus(item, index))}
    </Section>
  );
}

Results.propTypes = {
  id: PropTypes.string.isRequired,
  matchDay: PropTypes.number.isRequired,
};

export default Results;
