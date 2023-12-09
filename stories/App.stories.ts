import { Meta, StoryObj } from '@storybook/react';
import App from '../src/App';

const meta = {
  title: 'Content/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {};
