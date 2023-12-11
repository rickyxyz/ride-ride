import { Meta, StoryObj } from '@storybook/react';
import PageOrder from '../../src/pages/Order';

const meta = {
  title: 'Page/Order Page',
  component: PageOrder,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageOrderMain: Story = {};
