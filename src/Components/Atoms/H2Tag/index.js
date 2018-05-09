import React from 'react';
import PropTypes from 'prop-types';
import classes from './H2Tag.module.css';

const H2Tag = (props) => {
  const {
    className, children, id,
  } = props;

  return (
    <h2 className={classes[className]} id={id}>{children}</h2>
  );
};

H2Tag.defaultProps = {
  className: '',
  children: '',
  id: '',
};

H2Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.string,
};

export default H2Tag;
