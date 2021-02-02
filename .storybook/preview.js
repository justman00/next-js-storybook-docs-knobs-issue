import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import styled from '@emotion/styled';

const Story = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .sbdocs & {
    min-height: auto;
  }
`;

const withStoryStyles = (storyFn) => {
  return <Story>{storyFn()}</Story>;
};

addParameters({
  options: {
    showRoots: true
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const withNextRoot = (storyFn) => {
  return <div id="__next">{storyFn()}</div>;
};

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withStoryStyles);
addDecorator(withNextRoot);
