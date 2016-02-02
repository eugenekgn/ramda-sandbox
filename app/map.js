import R from '../node_modules/ramda/dist/ramda';

(() => {
  'use strict';

  let hockeyPlayers = [{
    name: 'John Taveras',
    team: 'New York Islanders',
    goals: 40,
    assisits: 50
  }, {
    name: 'Johny Boychak',
    team: 'New York Islanders',
    goals: 10
  }, {
    name: 'Kyle Okposo',
    team: 'New York Islanders',
    goals: 40,
    assisits: 10
  }, {
    name: 'Josh Baley',
    team: 'New York Islanders',
    goals: 25
  }, {
    name: 'Pavel Datsyk',
    team: 'Detriot Red Wings',
    goals: 30,
    assisits: 10
  }];


  let playerTeamMapper = (player) => {
    let team = {};
    team[player.team] = {
      name: player.name,
      team: player.team,
      goals: player.goals,
      assisits: player.assisits,
      points: player.goals + player.assisits
    };
    return team;
  };

  let teams = R.map(playerTeamMapper, hockeyPlayers);

  console.log(teams);

})();
