import { Meta, StoryObj } from '@storybook/react';
import OrderSummary from '../../src/components/common/OrderSummary';

const meta = {
  title: 'Component/Order Summary',
  component: OrderSummary,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OrderSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderSummaryMain: Story = {};
