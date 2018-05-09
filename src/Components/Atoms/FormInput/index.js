import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormInput.module.css';

const FormInput = (props) => {
  const {
    inputId, className, initText, updateAction, type, name, autoComplete,
  } = props;

  return (
    <input
      id={inputId}
      className={classes[className]}
      placeholder={initText}
      onChange={updateAction}
      type={type}
      name={name}
      autoComplete={autoComplete}
    />
  );
};

FormInput.defaultProps = {
  className: 'FormInput',
  initText: '',
  updateAction: () => {},
  type: 'text',
  autoComplete: 'off',
};

FormInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  className: PropTypes.string,
  initText: PropTypes.string,
  updateAction: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

export default FormInput;
