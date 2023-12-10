import { Meta, StoryObj } from '@storybook/react';
import PageBikes from '../../src/pages/Bikes';

const meta = {
  title: 'Page/Bikes Page',
  component: PageBikes,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageBikes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageBikesMain: Story = {};
