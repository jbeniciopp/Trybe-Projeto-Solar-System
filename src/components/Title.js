import React from 'react';
import PropTypes, { string } from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.shape(string).isRequired,
};

export default Title;
