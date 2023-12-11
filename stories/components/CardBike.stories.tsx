import { Meta, StoryObj } from '@storybook/react';
import CardBike from '../../src/components/common/CardBike';
import bike_1 from '../assets/bike-1.png';

const meta = {
  title: 'Component/Card Bike',
  component: CardBike,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardBike>;

const bike = {
  code: 'b1',
  name: 'mountain bike',
  image: bike_1,
  description: 'a',
  price: 12,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardBikeFull: Story = {
  args: {
    bike: bike,
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
    bike: bike,
    size: 'mini',
  },
};
