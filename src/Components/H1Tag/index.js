import React from 'react';
import PropTypes from 'prop-types';
import Classes from './H1Tag.module.css';

const H1Tag = (props) => {
  const {
    className, id, children,
  } = props;

  return (
    <h1 className={Classes[className]} id={id}>{children}</h1>
  );
};

H1Tag.defaultProps = {
  className: '',
  id: '',
  children: '',
};

H1Tag.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.string,
};

export default H1Tag;
