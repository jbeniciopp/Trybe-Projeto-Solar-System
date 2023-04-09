import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <Title headline="Missões" />
        <section className="missoes-div">
          {missions.map((missao, index) => (
            <MissionCard
              key={ index }
              name={ missao.name }
              year={ missao.year }
              country={ missao.country }
              destination={ missao.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
