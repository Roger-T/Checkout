import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Label from '../../Atoms/FormLabel';
import TextBox from '../../Atoms/FormInput';
import CheckboxInput from '../../Atoms/CheckBox';

const Input = (props) => {
  const {
    inputId, className, updateAction, name, type, children,
  } = props;

  const inputType = (formInputType) => {
    switch (formInputType) {
      case 'checkbox': return <CheckboxInput inputId={inputId} updateAction={updateAction} className={className} name={name} />;
      default: return (
        <TextBox
          inputId={inputId}
          className={className}
          updateAction={updateAction}
          name={name}
          type={type}
        />
      );
    }
  };

  return (
    <Fragment>
      {type !== 'checkbox' && <Label inputId={inputId} >{children}</Label>}
      {inputType(type)}
      {type === 'checkbox' && children !== '' && <Label inputId={inputId} className={className}>{children}</Label>}
    </Fragment>
  );
};

Input.defaultProps = {
  updateAction: () => {},
  className: 'textbox',
  children: '',
};

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  className: PropTypes.string,
  updateAction: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default Input;
