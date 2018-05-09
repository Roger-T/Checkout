import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Button from './index';

const button = storiesOf('Button', module);

button.addDecorator(withKnobs)
      .add('Button', () => <Button>Submit</Button>);