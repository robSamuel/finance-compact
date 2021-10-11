import React from 'react';
import PropTypes from 'prop-types';

const SettingsToolbar = ({ children, margin }) => {
  const toolbarStyle = {
    display: 'flex',
    margin: !margin ? '10px 0' : margin
  };

  return (
    <div style={toolbarStyle}>
      { children }
    </div>
  );
};

SettingsToolbar.defaultProps = {
  margin: 0
};

SettingsToolbar.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.number
};

export default SettingsToolbar;
