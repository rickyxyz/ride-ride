import { Meta, StoryObj } from '@storybook/react';
import PageHome from '../../src/pages/Home';

const meta = {
  title: 'Page/Home',
  component: PageHome,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageHome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageHomeMain: Story = {};
