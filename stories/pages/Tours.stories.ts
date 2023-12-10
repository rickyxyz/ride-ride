import { Meta, StoryObj } from '@storybook/react';
import PageTours from '../../src/pages/Tours';

const meta = {
  title: 'Page/Tours',
  component: PageTours,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageTours>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageToursMain: Story = {};
