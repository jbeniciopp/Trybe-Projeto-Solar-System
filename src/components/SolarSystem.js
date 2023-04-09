import React from 'react';
import Title from './Title';
import PlanetCards from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planetas">
          {Planets.map((planeta, index) => (
            <PlanetCards
              key={ index }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
