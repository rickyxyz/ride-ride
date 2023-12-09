import { Meta, StoryObj } from '@storybook/react';
import CardBike from '../src/components/common/CardBike';
import bike from './assets/bike-1.png';

const meta = {
  title: 'Component/Card Bike',
  component: CardBike,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardBike>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardBikeFull: Story = {
  args: {
    code: 'mb1',
    name: 'climb',
    type: 'mountain',
    description: 'perfect for a more adventurous tour',
    image: bike,
    price: 12,
    size: 'full',
  },
};

export const CardBikeMini: Story = {
  decorators: (Card) => (
    <div className="w-80">
      <Card />
    </div>
  ),
  args: {
    code: 'mb1',
    name: 'climb',
    type: 'mountain',
    description: 'perfect for a more adventurous tour',
    image: bike,
    price: 12,
    size: 'mini',
  },
};
