import { Meta, StoryObj } from '@storybook/react';
import PageBookTour from '../../src/pages/BookTour';

const meta = {
  title: 'Page/Tour Booking Page',
  component: PageBookTour,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageBookTour>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTourMain: Story = {};
