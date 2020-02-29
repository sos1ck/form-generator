import React from 'react';
import PropTypes from 'prop-types';
import { field, positions } from '../../helpers/consts';

const Select = ({
  name,
  onChange,
  onBlur,
  options,
  fieldValue,
  selectedValue,
  selectClassNames,
  labelClassNames,
  errorMessage,
}) => {
  /* eslint-disable no-shadow */
  const renderOptions = options => {
    const selectOptions = options.map(({ field: optionField, options }) => {
      if (name === field) {
        return (
          <option className="form__field--option" key={optionField} value={optionField}>
            {optionField}
          </option>
        );
      }

      if (name === positions) {
        return options.map(({ position }) => {
          if (fieldValue === optionField) {
            return (
              <option className="form__field--option" key={position} value={position}>
                {position}
              </option>
            );
          }
          return null;
        });
      }

      return null;
    });

    return selectOptions;
  };

  const showPositionsFieldPlaceholder = name === positions && !fieldValue;

  return (
    <>
      <section className="form__section form__section--select">
        <select
          className={selectClassNames}
          onChange={onChange}
          onBlur={onBlur}
          value={selectedValue}
          name={name}
        >
          <option hidden value="" />
          {showPositionsFieldPlaceholder && (
            <option className="form__field--option" disabled value="">
              fill the empty field above
            </option>
          )}
          {renderOptions(options)}
        </select>
        <label className={labelClassNames} htmlFor={name}>
          <span className="form__label--content">{name}</span>
        </label>
      </section>
      <span className="form__field--error">{errorMessage}</span>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  fieldValue: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
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
  selectClassNames: PropTypes.string,
  labelClassNames: PropTypes.string,
  errorMessage: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  selectClassNames: '',
  labelClassNames: '',
  errorMessage: '',
};

export default Select;
