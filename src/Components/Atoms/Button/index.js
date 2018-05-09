import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Button.module.css';

const Button = (props) => {
  const {
    children, action, type, name, className,
  } = props;

  return (
    <button
      className={Classes[className]}
      type={type}
      onClick={action}
      name={name}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  action: () => {},
  type: 'submit',
  name: 'button',
  className: 'none',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  action: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
