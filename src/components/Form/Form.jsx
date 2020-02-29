import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { text, select } from '../../helpers/consts';
import Input from '../Input/Input';
import Select from '../Select/Select';

const Form = ({
  onSubmit,
  formFieldsData,
  errorMessages,
  formValues,
  formValues: { field },
  onChange,
  onBlur,
  clearFormValues,
}) => {
  const formFieldClassNames = (type, value, error) =>
    cx('form__field', {
      'form__field--select': type === select,
      'form__field--error': error,
      'form__field--filled': value,
    });

  const formLabelClassNames = error =>
    cx('form__label', {
      'form__label--error': error,
    });

  const renderForm = formData => {
    const form = formData.map(({ name, type, options }) => {
      if (type === text) {
        return (
          <Input
            key={name}
            inputClassNames={formFieldClassNames(type, formValues[name], errorMessages[name])}
            labelClassNames={formLabelClassNames(errorMessages[name])}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={formValues[name]}
            errorMessage={errorMessages[name]}
            type={type}
          />
        );
      }

      if (type === select) {
        return (
          <Select
            key={name}
            selectClassNames={formFieldClassNames(type, formValues[name], errorMessages[name])}
            labelClassNames={formLabelClassNames(errorMessages[name])}
            name={name}
            onBlur={onBlur}
            errorMessage={errorMessages[name]}
            onChange={onChange}
            options={options}
            selectedValue={formValues[name]}
            fieldValue={field}
          />
        );
      }

      return null;
    });

    return form;
  };

  return (
    <form onSubmit={onSubmit}>
      {renderForm(formFieldsData)}
      <section className="form__buttons">
        <button type="submit" className="button button--primary">
          submit
        </button>
        <button onClick={clearFormValues} type="button" className="button button--default">
          clear values
        </button>
      </section>
    </form>
  );
};

Form.propTypes = {
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
  onSubmit: PropTypes.func.isRequired,
  clearFormValues: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
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
};

Form.defaultProps = {
  formFieldsData: [],
};

export default Form;
