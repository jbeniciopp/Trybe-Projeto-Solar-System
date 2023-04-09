import React from 'react';
import PropTypes, { string } from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planeta">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } width="200px" />
      </div>
    );
  }
}

PlanetCards.propTypes = {
  planetName: PropTypes.shape(string).isRequired,
  planetImage: PropTypes.shape(string).isRequired,
};

export default PlanetCards;
