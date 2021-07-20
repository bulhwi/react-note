import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return <div>
    My name is {name} <br />
    children : {children} <br/>
    number : {favoriteNumber}
  </div>;
};

MyComponent.defaultProps = {
  name: 'Sample'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;