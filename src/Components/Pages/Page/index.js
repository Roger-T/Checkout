/* eslint-env browser */
import React, { Fragment } from 'react';
import H2Tag from '../../Atoms/H2Tag';
import H3Tag from '../../Atoms/H3Tag';
import Form from '../../Molecules/Form';

const Page = () => (
  <Fragment>
    <H2Tag className="formTitle">Checkout</H2Tag>
    <H3Tag className="sectionHeader">User information</H3Tag>
    <Form
      destination="/"
      method="POST"
      className="userInfo"
      submitAction={this.handleSubmit}
      updateAction={this.handleUpdate}
      if="form1"
      fields={{
        firstname: {
          type: 'text',
          className: 'textbox',
          label: 'First Name',
        },
      }}
    />
  </Fragment>
);

export default Page;

/*
  surname: {
    type: 'text',
    className: 'textbox',
    label: 'Last Name',
  },
  telephone: {
    type: 'text',
    className: 'textbox',
    label: 'Mobile No. (To update you on delivery times)',
  },
  password: {
    type: 'password',
    className: 'textbox',
    label: 'Password (Optional - Create an account)',
  },
  subscribe: {
    type: 'checkbox',
    className: 'checkbox',
    label: 'I would like to receive the latest news,
    offers and style updates from [Kurt Geiger] by email.
    PUT A LINK IN FOR PRIVACY POLICY',
    value: 'Yes',
  },
*/
