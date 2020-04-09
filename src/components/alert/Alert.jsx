import React from 'react';
import PropTypes from 'prop-types';

import './Alert.scss';

const Alert = ({ message, type, onClose }) => (
  <div className={`alert alert-${type}`}>
    <button type="button" className="alert-close-btn" onClick={onClose}>&times;</button>
    <p className="alert-message">{message}</p>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: 'info',
  onClose: null,
};

export default Alert;
