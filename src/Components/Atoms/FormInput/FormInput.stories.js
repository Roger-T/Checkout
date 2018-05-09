import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import FormInput from './index';

const textBox = storiesOf('Text Box', module);
textBox.addDecorator(withKnobs)
      .add('Text Entry box', () => <FormInput inputId="text1" className="firstName" action={(e) => this.handleUpdate(e)} name="firstname" initText={text('Initial Text', 'Please enter something')} type="text"/>);