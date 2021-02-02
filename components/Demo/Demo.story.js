import React from 'react';

import { text } from '@storybook/addon-knobs';

import Demo from './Demo';
import docs from './Demo.docs.mdx';

export default {
  title: `Demo`,
  component: Demo,
  parameters: {
    docs: { page: docs },
  },
};

export const firstStory = () => (
  <Demo content={text('content', 'This always shows')} />
);

export const secondStory = () => (
  <Demo content={text('content', 'this shows only in canvas')} />
);

export const thirdStory = () => (
  <Demo content={text('content', 'this shows also only in canvas')} />
);
