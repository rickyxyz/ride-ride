import { Meta, StoryObj } from '@storybook/react';
import PageBookBike from '../../src/pages/BookBike';

const meta = {
  title: 'Page/Bike Booking Page',
  component: PageBookBike,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageBookBike>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageBikeMain: Story = {};
