import { Meta, StoryObj } from '@storybook/react';
import CardTour from '../../src/components/CardTour';
import tour_1 from '../assets/tour-lake.jpg';

const meta = {
  title: 'Component/Card Tour',
  component: CardTour,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardTour>;

export default meta;

type Story = StoryObj<typeof meta>;

const tour = {
  code: 't1',
  image: '',
  name: tour_1,
  price: 20,
  description: 'Enjoy the lake',
  duration: '30 minutes',
  landmarks: ['pizza shop', 'big park'],
};

export const CardTourDefault: Story = {
  args: {
    tour: tour,
  },
};
