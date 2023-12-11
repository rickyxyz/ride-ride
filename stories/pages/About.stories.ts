import { Meta, StoryObj } from '@storybook/react';
import PageAbout from '../../src/pages/About';

const meta = {
  title: 'Page/About Page',
  component: PageAbout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageAbout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageAboutMain: Story = {};
