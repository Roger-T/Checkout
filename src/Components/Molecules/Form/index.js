import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Molecules/FormEntry';
import Button from '../../Atoms/Button';
import formClasses from '../Form/form.module.css';

const Form = (props) => {
  const {
    destination, method, submitAction, updateAction, fields, className, id,
  } = props;

  const formElements = Object.keys(fields).map(key =>
    (
      <Input
        inputId={key}
        className={fields[key].className}
        updateAction={updateAction}
        name={key}
        type={fields[key].type}
        key={key}
      >
        {fields[key].label}
      </Input>
    ));
  return (
    <form
      action={destination}
      method={method}
      onSubmit={submitAction}
      className={formClasses[className]}
      id={id}
    >
      {formElements}
      <Button className="button" action={e => e.preventDefault()}>Submit</Button>
    </form>
  );
};

Form.defaultProps = {
  submitAction: () => { },
  updateAction: () => { },
  className: '',
  id: '',
};

Form.propTypes = {
  destination: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  submitAction: PropTypes.func,
  updateAction: PropTypes.func,
  fields: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Form;
