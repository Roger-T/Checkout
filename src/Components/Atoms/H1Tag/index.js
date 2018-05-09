import React from 'react';
import PropTypes from 'prop-types';
import classes from './H1Tag.module.css';

const H1Tag = (props) => {
  const {
    className, children,
  } = props;

  return (
    <h1 className={classes[className]}>{children}</h1>
  );
};

H1Tag.defaultProps = {
  className: '',
  children: '',
};

H1Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default H1Tag;
