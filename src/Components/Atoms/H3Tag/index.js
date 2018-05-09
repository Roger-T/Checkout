import React from 'react';
import PropTypes from 'prop-types';
import classes from './H3Tag.module.css';

const H3Tag = (props) => {
  const {
    className, children, id,
  } = props;

  return (
    <h3 className={classes[className]} id={id}>{children}</h3>
  );
};

H3Tag.defaultProps = {
  className: '',
  children: '',
  id: '',
};

H3Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.string,
};

export default H3Tag;
