import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormLabel.module.css';

const Label = (props) => {
  const {
    inputId, children, className,
  } = props;

  return (
    <label
      htmlFor={inputId}
      className={classes[className]}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  children: '',
  className: 'label',
};

Label.propTypes = {
  inputId: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
