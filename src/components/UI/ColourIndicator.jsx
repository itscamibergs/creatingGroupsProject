import React from "react";
import PropTypes from 'prop-types';
import "../UI/Card"; // Import the CSS file for Card styles

const ColourIndicator = ({ affinityID, children }) => {

  let borderColorClass;

  if (affinityID === 2) {
    borderColorClass = "red-border";
  } else if (affinityID === 1) {
    borderColorClass = "green-border";
  } else {
    borderColorClass = "grey-border";
  } 

  return (
    <div className={`card ${borderColorClass}`}>{children}</div>
  );
};


ColourIndicator.propTypes = {
  affinityID: PropTypes.number.isRequired,
  children: PropTypes.node,
};


export default ColourIndicator;