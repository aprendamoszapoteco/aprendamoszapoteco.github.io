import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children }) => {
  return (
    <h5 className="text-center fw-bold mb-3">{ children }</h5>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default Subtitle;