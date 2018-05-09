import React from 'react';
import PropTypes from 'prop-types';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
  const {
    inputId, className, updateAction, name, checked,
  } = props;
  return (
    <input
      id={inputId}
      className={classes[className]}
      type="checkbox"
      onClick={updateAction}
      name={name}
      defaultChecked={checked}
    />
  );
};

Checkbox.defaultProps = {
  className: 'checkbox',
  updateAction: () => {},
  checked: false,
};

Checkbox.propTypes = {
  inputId: PropTypes.string.isRequired,
  className: PropTypes.string,
  updateAction: PropTypes.func,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default Checkbox;
