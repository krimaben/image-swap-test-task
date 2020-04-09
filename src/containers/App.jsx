import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultPage from '../components/pages/result/ResultPage';
import PuzzlePage from '../components/pages/puzzle/PuzzlePage';
import AlertContainer from './AlertContainer';
import { alertActions } from '../actions';

const mapStateToProps = state => ({
  ready: state.puzzle.ready,
});

const mapActionToProps = dispatch => ({
  showAlert(data) {
    dispatch(alertActions.showAlert(data));
  },
});

class App extends React.Component {
  componentDidMount() {
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    const { showAlert } = this.props;
    if (isMobile) {
      const alert = {
        message: 'This app doesn\'t work on touch devices',
        type: 'warning',
      };
      showAlert(alert);
    }
  }

  render() {
    const { ready } = this.props;

    return (
      <div className="app">
        {ready
          ? <ResultPage />
          : <PuzzlePage />
        }
        <AlertContainer />
      </div>
    );
  }
}

App.propTypes = {
  ready: PropTypes.bool,
  showAlert: PropTypes.func,
};

App.defaultProps = {
  ready: false,
  showAlert: null,
};

export default connect(mapStateToProps, mapActionToProps)(App);
