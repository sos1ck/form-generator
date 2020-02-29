import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as errorActions from '../../modules/actions';
import ErrorPage from '../ErrorPage/ErrorPage';

class ErrorBoundary extends Component {
  componentDidCatch() {
    const { actions } = this.props;
    actions.setError();
  }

  render() {
    const { isError, children } = this.props;

    if (isError) {
      return <ErrorPage />;
    }

    return children;
  }
}

const mapStateToProps = state => ({
  isError: state.isError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(errorActions, dispatch),
});

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  isError: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    setError: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
