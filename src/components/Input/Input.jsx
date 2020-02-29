import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  type,
  onChange,
  onBlur,
  value,
  inputClassNames,
  labelClassNames,
  errorMessage,
}) => {
  return (
    <>
      <section className="form__section">
        <input
          className={inputClassNames}
          onChange={onChange}
          value={value}
          name={name}
          onBlur={onBlur}
          type={type}
          autoComplete="off"
        />
        <label className={labelClassNames} htmlFor={name}>
          <span className="form__label--content">{name}</span>
        </label>
      </section>
      {errorMessage && <span className="form__field--error">{errorMessage}</span>}
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputClassNames: PropTypes.string,
  labelClassNames: PropTypes.string,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  inputClassNames: '',
  labelClassNames: '',
  errorMessage: '',
}

export default Input;
