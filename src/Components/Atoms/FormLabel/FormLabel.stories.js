import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import FormLabel from './index';

const label = storiesOf('Form Input', module);

label.addDecorator(withKnobs)
    .add('Form Field Lable', () => <FormLabel inputId="fieldId" >{text('Initial Text', 'Please enter something')}</FormLabel>);