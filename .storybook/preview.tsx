import type { Preview } from '@storybook/react';
import '../src/global.css';
import i18n from '../src/i18n';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

// Wrap your stories in the I18nextProvider component
const withI18next = (Story) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
export const decorators = [withI18next];
