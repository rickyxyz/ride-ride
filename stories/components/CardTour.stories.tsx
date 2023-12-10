import { Meta, StoryObj } from '@storybook/react';
import CardTour from '../../src/components/CardTour';

const meta = {
  title: 'Component/Card Tour',
  component: CardTour,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardTour>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardTourDefault: Story = {};
