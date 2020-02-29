import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Spinner from '../Spinner/Spinner';
import { email, field, positions, success } from '../../helpers/consts';

import * as formActions from '../../modules/actions';

class FormContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.resetForm();
    actions.getFormData();
  }

  /* eslint-disable no-shadow */
  emailValidate = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  formFieldValidate = (name, value) => {
    let errorMessage = '';

    if (!value) {
      errorMessage = `${name} is required`;
    } else if (name === email) {
      if (!this.emailValidate(value)) {
        errorMessage = 'enter valid email';
      }
    }
    return errorMessage;
  };

  onFormFieldChange = ({ target: { name, value } }) => {
    const { actions } = this.props;
    actions.setFormValue(name, value.trim());
    this.resetErrorMessage(name);

    if (name === field) {
      this.resetFormFieldValue(positions);
    }
  };

  onFormFieldBlur = ({ target: { name, value } }) => {
    const { actions } = this.props;
    const errorMessages = {};
    errorMessages[name] = this.formFieldValidate(name, value);
    actions.setErrorMessage(errorMessages);
  };

  onSubmit = event => {
    event.preventDefault();
    const { actions, formValues, history } = this.props;
    const errorMessages = {};
    Object.entries(formValues).forEach(([name, value]) => {
      errorMessages[name] = this.formFieldValidate(name, value);
    });

    actions.setErrorMessage(errorMessages);

    if (this.formIsValid(errorMessages)) {
      history.push(success);
      console.log('FORM VALUES:', formValues); // eslint-disable-line no-console
    }
  };

  resetErrorMessage = name => {
    const { actions, errorMessages } = this.props;

    if (errorMessages[name]) {
      actions.resetErrorMessage(name);
    }
  };

  resetFormFieldValue = fieldName => {
    const { actions } = this.props;
    actions.resetFormValue(fieldName);
  };

  formIsValid = errorFields => {
    return Object.keys(errorFields).every(key => !errorFields[key]);
  };

  resetForm = () => {
    const { actions } = this.props;
    actions.resetForm();
  };

  render() {
    const { formFieldsData, formValues, errorMessages, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <section className="section__container">
        <h2 className="section__title">react form</h2>
        <Form
          onSubmit={this.onSubmit}
          onBlur={this.onFormFieldBlur}
          onChange={this.onFormFieldChange}
          clearFormValues={this.resetForm}
          formFieldsData={formFieldsData}
          formValues={formValues}
          errorMessages={errorMessages}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  formFieldsData: state.formFieldsData,
  isLoading: state.isLoading,
  formValues: state.formValues,
  errorMessages: state.errorMessages,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(formActions, dispatch),
});

FormContainer.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    positions: PropTypes.string.isRequired,
  }).isRequired,
  errorMessages: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    positions: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    setFormValue: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    resetFormValue: PropTypes.func.isRequired,
    setErrorMessage: PropTypes.func.isRequired,
    getFormData: PropTypes.func.isRequired,
    resetErrorMessage: PropTypes.func.isRequired,
  }).isRequired,
  formFieldsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          field: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              field: PropTypes.string,
              options: PropTypes.arrayOf(
                PropTypes.shape({
                  position: PropTypes.string.isRequired,
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

FormContainer.defaultProps = {
  formFieldsData: [],
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(FormContainer);
