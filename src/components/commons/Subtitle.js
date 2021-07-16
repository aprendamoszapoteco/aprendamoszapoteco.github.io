import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children }) => {
  return (
    <h4 className="text-center fw-bold fs-5 mb-3">{ children }</h4>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default Subtitle;