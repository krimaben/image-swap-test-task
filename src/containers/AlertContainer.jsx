import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { alertActions } from '../actions';
import Alert from '../components/alert/Alert';

const mapStateToProps = state => ({
  isError: state.alert.isError,
  message: state.alert.message,
  type: state.alert.type,
});

const mapActionToProps = dispatch => ({
  closeAlert() {
    dispatch(alertActions.closeAlert());
  },
});

class AlertContainer extends React.Component {
  closeAlert() {
    const { closeAlert } = this.props;
    closeAlert();
  }

  render() {
    const { isError, message, type } = this.props;

    return (
      isError
        ? <Alert message={message} type={type} onClose={() => this.closeAlert()} />
        : null
    );
  }
}

AlertContainer.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string,
  closeAlert: PropTypes.func,
};

AlertContainer.defaultProps = {
  isError: false,
  message: '',
  type: '',
  closeAlert: null,
};

export default connect(mapStateToProps, mapActionToProps)(AlertContainer);
