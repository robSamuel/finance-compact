import React from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflow: false
};

const SettingsPanel = ({ children }) => {
  
  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

SettingsPanel.propTypes = {
  children: PropTypes.node
};

export default SettingsPanel;
