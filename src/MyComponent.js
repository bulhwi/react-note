import React from 'react';
import PropTypes from "prop-types";

const MyComponent = ({name,favoriteNumber,children}) => {
  return <div>나의 새롭고 멋진 컴포넌트
    {name} <br/>
    {children} <br/>
    {favoriteNumber}
  </div>;
}

MyComponent.defaultProps = {
  name: 'Default props'
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;