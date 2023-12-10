import { Meta, StoryObj } from '@storybook/react';
import CardTour from '../../src/components/CardTour';
import tour from '../assets/tour-lake.jpg';

const meta = {
  title: 'Component/Card Tour',
  component: CardTour,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardTour>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardTourDefault: Story = {
  args: {
    code: 'a',
    landmarks: ['a', 'b', 'c'],
    start: 'a',
    duration: '2 hours',
    image: tour,
    name: 'Tour of the lake',
    price: 10,
  },
};
